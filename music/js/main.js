var progressSpan = document.querySelector(".progress-bar .progress span");
var progressBar = document.querySelector(".progress-bar");
var progress = document.querySelector(".progress-bar .progress ");

var handleUpdateValue = function (value) {
    progress.style.width = `${value}%`;
};

//Chuyển đổi hết thành %
var progressBarWidth = progressBar.clientWidth;
var initialClientX;
var isDrag = false; //Cắm cờ
var initialValue = 0;
var value;
progressBar.addEventListener("mousedown", function (e) {
    if (e.which === 1) {
        //bắt bấm chuột trái
        var offsetX = e.offsetX;
        value = (offsetX * 100) / progressBarWidth;
        var currentTimeClick = (value / 100) * audio.duration;
        audio.currentTime = currentTimeClick;
        initialValue = value;
        initialClientX = e.clientX;
        isDrag = true;
        handleUpdateValue(value);
    }
});
//Xử lí case bấm vào dấu chấm về đầu(nổi bọt)
//Lưu ý: xử lí nổi bọt phải cùng sự kiện

progressSpan.addEventListener("mousedown", function (e) {
    e.stopPropagation();
    if (e.which === 1) {
        isDrag = true;
        initialClientX = e.clientX;
    }
});

//Case: kéo

document.addEventListener("mousemove", function (e) {
    if (isDrag) {
        var moveWidth = e.clientX - initialClientX;
        value = (moveWidth * 100) / progressBarWidth;
        value = initialValue + value;
        if (value < 0) {
            value = 0;
        }
        if (value > 100) {
            value = 100;
        }
        handleUpdateValue(value);
    }
});

progressBar.addEventListener("mouseup", function (e) {
    isDrag = false;
    initialValue = value;
    var currentTimeClick = (value / 100) * audio.duration;
    audio.currentTime = currentTimeClick;
});

var audio = document.querySelector(".audio");
var playBtn = document.querySelector(".play-btn");
var pauseBtnIcon = `<i class="fa-solid fa-pause"></i>`;
var playBtnIcon = `<i class="fa-solid fa-play"></i>`;
var durationEl = progressBar.nextElementSibling;
var currentTimeEl = progressBar.previousElementSibling;

var getTime = function (seconds) {
    var mins = Math.floor(seconds / 60);
    seconds -= mins * 60;
    seconds = Math.floor(seconds);
    return `${mins < 10 ? `0${mins}` : mins}:${
        seconds < 10 ? `0${seconds}` : seconds
    }`;
};

audio.addEventListener("loadeddata", function () {
    durationEl.innerText = getTime(audio.duration);
    duration = audio.duration;
});


playBtn.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
        this.innerHTML = pauseBtnIcon;
    } else {
        audio.pause();
        this.innerHTML = playBtnIcon;
    }
});



audio.addEventListener("timeupdate", function () {
    currentTimeEl.innerText = getTime(audio.currentTime);
    //Lấy ra tỉ lệ % dựa vào currentTime, duration
    value = (audio.currentTime * 100) / audio.duration;
    handleUpdateValue(value);
    showLyric(audio.currentTime*1000);
    // console.log(audio.currentTime);
});



var currentRunTime = document.querySelector(".current-runTime");

progressBar.addEventListener("mouseover", function (e) {
    currentRunTime.style.display = "block";
    currentRunTime.style.left = `${e.offsetX}px`;
    var currentTimePointerRate = (e.offsetX * 100) / progressBarWidth;
    //Find time following %
    var currentTimePointer = (currentTimePointerRate / 100) * audio.duration;
    currentRunTime.innerText = `${getTime(currentTimePointer)}`;
});

progressBar.addEventListener("mousemove", function (e) {
    currentRunTime.style.display = "block";
    currentRunTime.style.left = `${e.offsetX}px`;
    var currentTimePointerRate = (e.offsetX * 100) / progressBarWidth;
    var currentTimePointer = (currentTimePointerRate / 100) * audio.duration;
    currentRunTime.innerText = `${getTime(currentTimePointer)}`;
});

progressBar.addEventListener("mouseout", function () {
    currentRunTime.style.display = "none";
});

//prevent bubble
progressSpan.addEventListener("mousemove", function (e) {
    e.stopPropagation();
});

progressSpan.addEventListener("mouseover", function (e) {
    e.stopPropagation();
    currentRunTime.style.display = "none";
});

//check audio ended?
audio.addEventListener("ended", function () {
    value = 0;
    audio.currentTime = 0;
    handleUpdateValue(0);
    playBtn.innerHTML = playBtnIcon;
});

var lyric = `{"err":0,"msg":"Success","data":{"sentences":[{"words":[{"startTime":800,"endTime":800,"data":"Giữa"},{"startTime":800,"endTime":1080,"data":"mênh"},{"startTime":1080,"endTime":1080,"data":"mang"},{"startTime":1080,"endTime":1350,"data":"đồi"},{"startTime":1350,"endTime":1610,"data":"hoa"},{"startTime":1610,"endTime":1890,"data":"cỏ"},{"startTime":1890,"endTime":2150,"data":"lau"}]},{"words":[{"startTime":2150,"endTime":2420,"data":"Chỉ"},{"startTime":2420,"endTime":2420,"data":"tiếc"},{"startTime":2420,"endTime":2670,"data":"anh"},{"startTime":2670,"endTime":2940,"data":"luôn"},{"startTime":2940,"endTime":2940,"data":"là"},{"startTime":2940,"endTime":3220,"data":"người"},{"startTime":3220,"endTime":3480,"data":"đến"},{"startTime":3480,"endTime":4010,"data":"sau"}]},{"words":[{"startTime":4010,"endTime":4010,"data":"Một"},{"startTime":4010,"endTime":4280,"data":"cuộc"},{"startTime":4280,"endTime":4540,"data":"tình"},{"startTime":4540,"endTime":4800,"data":"anh"},{"startTime":4800,"endTime":5080,"data":"vẫn"},{"startTime":5080,"endTime":5340,"data":"cố"},{"startTime":5340,"endTime":5610,"data":"giấu"}]},{"words":[{"startTime":5610,"endTime":5860,"data":"Giữ"},{"startTime":5860,"endTime":6140,"data":"riêng"},{"startTime":6140,"endTime":6140,"data":"anh"},{"startTime":6140,"endTime":6410,"data":"nỗi"},{"startTime":6410,"endTime":7140,"data":"sầu"}]},{"words":[{"startTime":7140,"endTime":7410,"data":"Và"},{"startTime":7410,"endTime":7660,"data":"gió"},{"startTime":7660,"endTime":7660,"data":"đem"},{"startTime":7660,"endTime":7950,"data":"mây"},{"startTime":7950,"endTime":8200,"data":"từ"},{"startTime":8200,"endTime":8460,"data":"đâu"},{"startTime":8460,"endTime":8460,"data":"đến"},{"startTime":8460,"endTime":8990,"data":"đây"}]},{"words":[{"startTime":8990,"endTime":9260,"data":"Mà"},{"startTime":9260,"endTime":9260,"data":"khiến"},{"startTime":9260,"endTime":9540,"data":"con"},{"startTime":9540,"endTime":9800,"data":"tim"},{"startTime":9800,"endTime":9800,"data":"mình"},{"startTime":9800,"endTime":10060,"data":"đau"},{"startTime":10060,"endTime":10330,"data":"đến"},{"startTime":10330,"endTime":10860,"data":"vậy"}]},{"words":[{"startTime":10860,"endTime":11130,"data":"Vì"},{"startTime":11130,"endTime":11130,"data":"một"},{"startTime":11130,"endTime":11390,"data":"người"},{"startTime":11390,"endTime":11650,"data":"đã"},{"startTime":11650,"endTime":11650,"data":"đến"},{"startTime":11650,"endTime":11920,"data":"chiếm"},{"startTime":11920,"endTime":12470,"data":"lấy"}]},{"words":[{"startTime":12470,"endTime":12730,"data":"Những"},{"startTime":12730,"endTime":12730,"data":"rung"},{"startTime":12730,"endTime":13000,"data":"động"},{"startTime":13000,"endTime":13520,"data":"về"},{"startTime":13520,"endTime":14320,"data":"em"}]},{"words":[{"startTime":14320,"endTime":14590,"data":"Nhìn"},{"startTime":14590,"endTime":14590,"data":"bông"},{"startTime":14590,"endTime":14870,"data":"lau"},{"startTime":14870,"endTime":15120,"data":"nghiêng"}]},{"words":[{"startTime":15120,"endTime":15670,"data":"Giống"},{"startTime":15670,"endTime":15670,"data":"như"},{"startTime":15670,"endTime":15920,"data":"lòng"},{"startTime":15920,"endTime":16180,"data":"mình"},{"startTime":16180,"endTime":16450,"data":"còn"},{"startTime":16450,"endTime":16710,"data":"nhiều"},{"startTime":16710,"endTime":16970,"data":"chơi"},{"startTime":16970,"endTime":17700,"data":"vơi"}]},{"words":[{"startTime":17700,"endTime":17970,"data":"Chiều"},{"startTime":17970,"endTime":17970,"data":"mưa"},{"startTime":17970,"endTime":18230,"data":"rơi"},{"startTime":18230,"endTime":18490,"data":"không"},{"startTime":18490,"endTime":19040,"data":"bến"},{"startTime":19040,"endTime":19290,"data":"đợi"}]},{"words":[{"startTime":19290,"endTime":19550,"data":"Nhưng"},{"startTime":19550,"endTime":19550,"data":"anh"},{"startTime":19550,"endTime":19830,"data":"vẫn"},{"startTime":19830,"endTime":20090,"data":"chờ"},{"startTime":20090,"endTime":20350,"data":"em"},{"startTime":20350,"endTime":21150,"data":"tới"}]},{"words":[{"startTime":21150,"endTime":21430,"data":"Ngàn"},{"startTime":21430,"endTime":21430,"data":"yêu"},{"startTime":21430,"endTime":21700,"data":"thương"},{"startTime":21700,"endTime":21980,"data":"sau"},{"startTime":21980,"endTime":22510,"data":"cuối"}]},{"words":[{"startTime":22510,"endTime":22510,"data":"Xin"},{"startTime":22510,"endTime":22770,"data":"được"},{"startTime":22770,"endTime":23020,"data":"là"},{"startTime":23020,"endTime":23290,"data":"bầu"},{"startTime":23290,"endTime":23570,"data":"trời"},{"startTime":23570,"endTime":23840,"data":"em"},{"startTime":23840,"endTime":24630,"data":"ơi"}]},{"words":[{"startTime":24630,"endTime":24630,"data":"Yêu"},{"startTime":24630,"endTime":24910,"data":"em"},{"startTime":24910,"endTime":25180,"data":"không"},{"startTime":25180,"endTime":25440,"data":"nghỉ"},{"startTime":25440,"endTime":25710,"data":"ngơi"}]},{"words":[{"startTime":25710,"endTime":25970,"data":"Gã"},{"startTime":25970,"endTime":26220,"data":"si"},{"startTime":26220,"endTime":26500,"data":"tình"},{"startTime":26500,"endTime":26500,"data":"chỉ"},{"startTime":26500,"endTime":27030,"data":"cần"},{"startTime":27030,"endTime":27770,"data":"thế"},{"startTime":27770,"endTime":30770,"data":"thôi"}]},{"words":[{"startTime":58090,"endTime":58350,"data":"Nhìn"},{"startTime":58350,"endTime":58350,"data":"ngọn"},{"startTime":58350,"endTime":58610,"data":"đèn"},{"startTime":58610,"endTime":58880,"data":"mờ"},{"startTime":58880,"endTime":58880,"data":"vội"},{"startTime":58880,"endTime":59670,"data":"tắt"}]},{"words":[{"startTime":59670,"endTime":59950,"data":"Mưa"},{"startTime":59950,"endTime":59950,"data":"đánh"},{"startTime":59950,"endTime":60200,"data":"rơi"},{"startTime":60200,"endTime":60470,"data":"trong"},{"startTime":60470,"endTime":61020,"data":"mắt"},{"startTime":61020,"endTime":61550,"data":"anh"}]},{"words":[{"startTime":61550,"endTime":62070,"data":"Tìm"},{"startTime":62070,"endTime":62340,"data":"hình"},{"startTime":62340,"endTime":62620,"data":"bóng"},{"startTime":62620,"endTime":63140,"data":"của"},{"startTime":63140,"endTime":64740,"data":"em"}]},{"words":[{"startTime":64740,"endTime":65000,"data":"Và"},{"startTime":65000,"endTime":65000,"data":"dòng"},{"startTime":65000,"endTime":65270,"data":"đời"},{"startTime":65270,"endTime":65530,"data":"nhiều"},{"startTime":65530,"endTime":65800,"data":"mộng"},{"startTime":65800,"endTime":66600,"data":"ước"}]},{"words":[{"startTime":66600,"endTime":66600,"data":"Mong"},{"startTime":66600,"endTime":66870,"data":"bên"},{"startTime":66870,"endTime":67130,"data":"em"},{"startTime":67130,"endTime":67390,"data":"sẽ"},{"startTime":67390,"endTime":67920,"data":"mãi"},{"startTime":67920,"endTime":68190,"data":"yên"},{"startTime":68190,"endTime":68730,"data":"bình"}]},{"words":[{"startTime":68730,"endTime":68990,"data":"Tuổi"},{"startTime":68990,"endTime":69260,"data":"xuân"},{"startTime":69260,"endTime":69510,"data":"đẹp"},{"startTime":69510,"endTime":69780,"data":"như"},{"startTime":69780,"endTime":70790,"data":"ánh"},{"startTime":70790,"endTime":72660,"data":"trăng"}]},{"words":[{"startTime":72660,"endTime":72920,"data":"Giữa"},{"startTime":72920,"endTime":72920,"data":"mênh"},{"startTime":72920,"endTime":73170,"data":"mang"},{"startTime":73170,"endTime":73460,"data":"đồi"},{"startTime":73460,"endTime":73730,"data":"hoa"},{"startTime":73730,"endTime":73990,"data":"cỏ"},{"startTime":73990,"endTime":74190,"data":"lau"}]},{"words":[{"startTime":74190,"endTime":74190,"data":"Chỉ"},{"startTime":74190,"endTime":74450,"data":"tiếc"},{"startTime":74450,"endTime":74710,"data":"anh"},{"startTime":74710,"endTime":74980,"data":"luôn"},{"startTime":74980,"endTime":74980,"data":"là"},{"startTime":74980,"endTime":75270,"data":"người"},{"startTime":75270,"endTime":75530,"data":"đến"},{"startTime":75530,"endTime":76060,"data":"sau"}]},{"words":[{"startTime":76060,"endTime":76060,"data":"Một"},{"startTime":76060,"endTime":76330,"data":"cuộc"},{"startTime":76330,"endTime":76590,"data":"tình"},{"startTime":76590,"endTime":76870,"data":"anh"},{"startTime":76870,"endTime":76870,"data":"vẫn"},{"startTime":76870,"endTime":77120,"data":"cố"},{"startTime":77120,"endTime":77670,"data":"giấu"}]},{"words":[{"startTime":77670,"endTime":77950,"data":"Giữ"},{"startTime":77950,"endTime":77950,"data":"riêng"},{"startTime":77950,"endTime":78200,"data":"anh"},{"startTime":78200,"endTime":78470,"data":"nỗi"},{"startTime":78470,"endTime":79270,"data":"sầu"}]},{"words":[{"startTime":79270,"endTime":79270,"data":"Và"},{"startTime":79270,"endTime":79550,"data":"gió"},{"startTime":79550,"endTime":79800,"data":"đem"},{"startTime":79800,"endTime":80060,"data":"mây"},{"startTime":80060,"endTime":80060,"data":"từ"},{"startTime":80060,"endTime":80340,"data":"đâu"},{"startTime":80340,"endTime":80600,"data":"đến"},{"startTime":80600,"endTime":81070,"data":"đây"}]},{"words":[{"startTime":81070,"endTime":81070,"data":"Mà"},{"startTime":81070,"endTime":81340,"data":"khiến"},{"startTime":81340,"endTime":81610,"data":"con"},{"startTime":81610,"endTime":81610,"data":"tim"},{"startTime":81610,"endTime":81880,"data":"mình"},{"startTime":81880,"endTime":82150,"data":"đau"},{"startTime":82150,"endTime":82410,"data":"đến"},{"startTime":82410,"endTime":82940,"data":"vậy"}]},{"words":[{"startTime":82940,"endTime":82940,"data":"Vì"},{"startTime":82940,"endTime":83200,"data":"một"},{"startTime":83200,"endTime":83470,"data":"người"},{"startTime":83470,"endTime":83740,"data":"đã"},{"startTime":83740,"endTime":84010,"data":"đến"},{"startTime":84010,"endTime":84270,"data":"chiếm"},{"startTime":84270,"endTime":84530,"data":"lấy"}]},{"words":[{"startTime":84530,"endTime":84800,"data":"Những"},{"startTime":84800,"endTime":84800,"data":"rung"},{"startTime":84800,"endTime":85080,"data":"động"},{"startTime":85080,"endTime":85360,"data":"về"},{"startTime":85360,"endTime":86340,"data":"em"}]},{"words":[{"startTime":86340,"endTime":86610,"data":"Nhìn"},{"startTime":86610,"endTime":86610,"data":"bông"},{"startTime":86610,"endTime":87090,"data":"lau"},{"startTime":87090,"endTime":87090,"data":"nghiêng"}]},{"words":[{"startTime":87090,"endTime":87610,"data":"Giống"},{"startTime":87610,"endTime":87870,"data":"như"},{"startTime":87870,"endTime":87870,"data":"lòng"},{"startTime":87870,"endTime":88130,"data":"mình"},{"startTime":88130,"endTime":88400,"data":"còn"},{"startTime":88400,"endTime":88670,"data":"nhiều"},{"startTime":88670,"endTime":88930,"data":"chơi"},{"startTime":88930,"endTime":89730,"data":"vơi"}]},{"words":[{"startTime":89730,"endTime":89730,"data":"Chiều"},{"startTime":89730,"endTime":90000,"data":"mưa"},{"startTime":90000,"endTime":90260,"data":"rơi"},{"startTime":90260,"endTime":90520,"data":"không"},{"startTime":90520,"endTime":90800,"data":"bến"},{"startTime":90800,"endTime":91350,"data":"đợi"}]},{"words":[{"startTime":91350,"endTime":91350,"data":"Nhưng"},{"startTime":91350,"endTime":91610,"data":"anh"},{"startTime":91610,"endTime":91880,"data":"vẫn"},{"startTime":91880,"endTime":91880,"data":"chờ"},{"startTime":91880,"endTime":92150,"data":"em"},{"startTime":92150,"endTime":93210,"data":"tới"}]},{"words":[{"startTime":93210,"endTime":93210,"data":"Ngàn"},{"startTime":93210,"endTime":93470,"data":"yêu"},{"startTime":93470,"endTime":93750,"data":"thương"},{"startTime":93750,"endTime":94040,"data":"sau"},{"startTime":94040,"endTime":94290,"data":"cuối"}]},{"words":[{"startTime":94290,"endTime":94560,"data":"Xin"},{"startTime":94560,"endTime":94820,"data":"được"},{"startTime":94820,"endTime":94820,"data":"là"},{"startTime":94820,"endTime":95090,"data":"bầu"},{"startTime":95090,"endTime":95350,"data":"trời"},{"startTime":95350,"endTime":95620,"data":"em"},{"startTime":95620,"endTime":96420,"data":"ơi"}]},{"words":[{"startTime":96420,"endTime":96690,"data":"Yêu"},{"startTime":96690,"endTime":96950,"data":"em"},{"startTime":96950,"endTime":96950,"data":"không"},{"startTime":96950,"endTime":97490,"data":"nghỉ"},{"startTime":97490,"endTime":97750,"data":"ngơi"}]},{"words":[{"startTime":97750,"endTime":98000,"data":"Gã"},{"startTime":98000,"endTime":98270,"data":"si"},{"startTime":98270,"endTime":98270,"data":"tình"},{"startTime":98270,"endTime":98540,"data":"chỉ"},{"startTime":98540,"endTime":99080,"data":"cần"},{"startTime":99080,"endTime":99870,"data":"thế"},{"startTime":99870,"endTime":100890,"data":"thôi"}]},{"words":[{"startTime":100890,"endTime":100890,"data":"Nhìn"},{"startTime":100890,"endTime":101180,"data":"ngọn"},{"startTime":101180,"endTime":101180,"data":"đèn"},{"startTime":101180,"endTime":101430,"data":"mờ"},{"startTime":101430,"endTime":101700,"data":"vội"},{"startTime":101700,"endTime":102520,"data":"tắt"}]},{"words":[{"startTime":102520,"endTime":102770,"data":"Mưa"},{"startTime":102770,"endTime":102770,"data":"đánh"},{"startTime":102770,"endTime":103040,"data":"rơi"},{"startTime":103040,"endTime":103310,"data":"trong"},{"startTime":103310,"endTime":103840,"data":"mắt"},{"startTime":103840,"endTime":104360,"data":"anh"}]},{"words":[{"startTime":104360,"endTime":104910,"data":"Tìm"},{"startTime":104910,"endTime":105170,"data":"hình"},{"startTime":105170,"endTime":105700,"data":"bóng"},{"startTime":105700,"endTime":105970,"data":"của"},{"startTime":105970,"endTime":107570,"data":"em"}]},{"words":[{"startTime":107570,"endTime":107570,"data":"Và"},{"startTime":107570,"endTime":107820,"data":"dòng"},{"startTime":107820,"endTime":108090,"data":"đời"},{"startTime":108090,"endTime":108090,"data":"nhiều"},{"startTime":108090,"endTime":108610,"data":"mộng"},{"startTime":108610,"endTime":109370,"data":"ước"}]},{"words":[{"startTime":109370,"endTime":109640,"data":"Mong"},{"startTime":109640,"endTime":109640,"data":"bên"},{"startTime":109640,"endTime":109910,"data":"em"},{"startTime":109910,"endTime":110170,"data":"sẽ"},{"startTime":110170,"endTime":110710,"data":"mãi"},{"startTime":110710,"endTime":110970,"data":"yên"},{"startTime":110970,"endTime":111770,"data":"bình"}]},{"words":[{"startTime":111770,"endTime":112030,"data":"Tuổi"},{"startTime":112030,"endTime":112030,"data":"xuân"},{"startTime":112030,"endTime":112300,"data":"đẹp"},{"startTime":112300,"endTime":112570,"data":"như"},{"startTime":112570,"endTime":113370,"data":"ánh"},{"startTime":113370,"endTime":116370,"data":"trăng"}]},{"words":[{"startTime":144530,"endTime":144790,"data":"Dưới"},{"startTime":144790,"endTime":145050,"data":"cơn"},{"startTime":145050,"endTime":145050,"data":"mưa"},{"startTime":145050,"endTime":145320,"data":"chẳng"},{"startTime":145320,"endTime":145590,"data":"ai"},{"startTime":145590,"endTime":145590,"data":"đón"},{"startTime":145590,"endTime":146130,"data":"đưa"}]},{"words":[{"startTime":146130,"endTime":146400,"data":"Chỉ"},{"startTime":146400,"endTime":146400,"data":"có"},{"startTime":146400,"endTime":146670,"data":"anh"},{"startTime":146670,"endTime":146940,"data":"luôn"},{"startTime":146940,"endTime":146940,"data":"nhìn"},{"startTime":146940,"endTime":147200,"data":"em"},{"startTime":147200,"endTime":147480,"data":"dưới"},{"startTime":147480,"endTime":147950,"data":"mưa"}]},{"words":[{"startTime":147950,"endTime":148210,"data":"Lặng"},{"startTime":148210,"endTime":148210,"data":"thầm"},{"startTime":148210,"endTime":148490,"data":"chịu"},{"startTime":148490,"endTime":148490,"data":"phải"},{"startTime":148490,"endTime":148740,"data":"trái"},{"startTime":148740,"endTime":149010,"data":"đắng"},{"startTime":149010,"endTime":149540,"data":"nữa"}]},{"words":[{"startTime":149540,"endTime":149800,"data":"Biết"},{"startTime":149800,"endTime":150070,"data":"bao"},{"startTime":150070,"endTime":150070,"data":"nhiêu"},{"startTime":150070,"endTime":150340,"data":"mới"},{"startTime":150340,"endTime":151130,"data":"vừa"}]},{"words":[{"startTime":151130,"endTime":151400,"data":"Ngồi"},{"startTime":151400,"endTime":151660,"data":"ngắm"},{"startTime":151660,"endTime":151660,"data":"trông"},{"startTime":151660,"endTime":151930,"data":"ai"},{"startTime":151930,"endTime":152190,"data":"mà"},{"startTime":152190,"endTime":152460,"data":"anh"},{"startTime":152460,"endTime":152720,"data":"cứ"},{"startTime":152720,"endTime":153000,"data":"mong"}]},{"words":[{"startTime":153000,"endTime":153260,"data":"Thấy"},{"startTime":153260,"endTime":153260,"data":"em"},{"startTime":153260,"endTime":153550,"data":"buồn"},{"startTime":153550,"endTime":153790,"data":"là"},{"startTime":153790,"endTime":154060,"data":"đau"},{"startTime":154060,"endTime":154330,"data":"xé"},{"startTime":154330,"endTime":154880,"data":"lòng"}]},{"words":[{"startTime":154880,"endTime":154880,"data":"Từng"},{"startTime":154880,"endTime":155130,"data":"giọt"},{"startTime":155130,"endTime":155400,"data":"lệ"},{"startTime":155400,"endTime":155660,"data":"em"},{"startTime":155660,"endTime":155920,"data":"vẫn"},{"startTime":155920,"endTime":156200,"data":"cứ"},{"startTime":156200,"endTime":156460,"data":"khóc"}]},{"words":[{"startTime":156460,"endTime":156730,"data":"Cố"},{"startTime":156730,"endTime":156990,"data":"nuốt"},{"startTime":156990,"endTime":157260,"data":"ngược"},{"startTime":157260,"endTime":157520,"data":"vào"},{"startTime":157520,"endTime":158340,"data":"trong"}]},{"words":[{"startTime":158340,"endTime":158340,"data":"Chạy"},{"startTime":158340,"endTime":158600,"data":"theo"},{"startTime":158600,"endTime":158870,"data":"chân"},{"startTime":158870,"endTime":159130,"data":"cơn"},{"startTime":159130,"endTime":159400,"data":"sóng"}]},{"words":[{"startTime":159400,"endTime":159670,"data":"Đi"},{"startTime":159670,"endTime":159940,"data":"tìm"},{"startTime":159940,"endTime":160210,"data":"ai"},{"startTime":160210,"endTime":160470,"data":"ở"},{"startTime":160470,"endTime":160740,"data":"nơi"},{"startTime":160740,"endTime":161020,"data":"xa"},{"startTime":161020,"endTime":161530,"data":"xôi"}]},{"words":[{"startTime":161530,"endTime":161800,"data":"Trời"},{"startTime":161800,"endTime":162070,"data":"hôm"},{"startTime":162070,"endTime":162070,"data":"nay"},{"startTime":162070,"endTime":162600,"data":"tắt"},{"startTime":162600,"endTime":162880,"data":"nắng"},{"startTime":162880,"endTime":163130,"data":"rồi"}]},{"words":[{"startTime":163130,"endTime":163400,"data":"Trong"},{"startTime":163400,"endTime":163660,"data":"căn"},{"startTime":163660,"endTime":163930,"data":"phòng"},{"startTime":163930,"endTime":164200,"data":"tăm"},{"startTime":164200,"endTime":164980,"data":"tối"}]},{"words":[{"startTime":164980,"endTime":165260,"data":"Vì"},{"startTime":165260,"endTime":165530,"data":"nghe"},{"startTime":165530,"endTime":165530,"data":"câu"},{"startTime":165530,"endTime":166060,"data":"nói"},{"startTime":166060,"endTime":166330,"data":"dối"}]},{"words":[{"startTime":166330,"endTime":166590,"data":"Nên"},{"startTime":166590,"endTime":166860,"data":"lòng"},{"startTime":166860,"endTime":166860,"data":"buồn"},{"startTime":166860,"endTime":167120,"data":"làm"},{"startTime":167120,"endTime":167380,"data":"gì"},{"startTime":167380,"endTime":167650,"data":"em"},{"startTime":167650,"endTime":168400,"data":"ơi"}]},{"words":[{"startTime":168400,"endTime":168670,"data":"Người"},{"startTime":168670,"endTime":168670,"data":"thương"},{"startTime":168670,"endTime":168930,"data":"em"},{"startTime":168930,"endTime":169200,"data":"chính"},{"startTime":169200,"endTime":169460,"data":"là"},{"startTime":169460,"endTime":169740,"data":"tôi"}]},{"words":[{"startTime":169740,"endTime":170000,"data":"Gã"},{"startTime":170000,"endTime":170260,"data":"si"},{"startTime":170260,"endTime":170260,"data":"tình"},{"startTime":170260,"endTime":170530,"data":"rồi"},{"startTime":170530,"endTime":170790,"data":"lệ"},{"startTime":170790,"endTime":171560,"data":"đắng"},{"startTime":171560,"endTime":174560,"data":"môi"}]},{"words":[{"startTime":186640,"endTime":186640,"data":"Nhìn"},{"startTime":186640,"endTime":186900,"data":"ngọn"},{"startTime":186900,"endTime":186900,"data":"đèn"},{"startTime":186900,"endTime":187170,"data":"mờ"},{"startTime":187170,"endTime":187440,"data":"vội"},{"startTime":187440,"endTime":188240,"data":"tắt"}]},{"words":[{"startTime":188240,"endTime":188240,"data":"Mưa"},{"startTime":188240,"endTime":188520,"data":"đang"},{"startTime":188520,"endTime":188770,"data":"rơi"},{"startTime":188770,"endTime":189030,"data":"trong"},{"startTime":189030,"endTime":189570,"data":"mắt"},{"startTime":189570,"endTime":190100,"data":"anh"}]},{"words":[{"startTime":190100,"endTime":190620,"data":"Tìm"},{"startTime":190620,"endTime":190900,"data":"hình"},{"startTime":190900,"endTime":191170,"data":"bóng"},{"startTime":191170,"endTime":191720,"data":"của"},{"startTime":191720,"endTime":193050,"data":"em"}]},{"words":[{"startTime":193050,"endTime":193320,"data":"Và"},{"startTime":193320,"endTime":193580,"data":"dòng"},{"startTime":193580,"endTime":193840,"data":"đời"},{"startTime":193840,"endTime":193840,"data":"nhiều"},{"startTime":193840,"endTime":194390,"data":"mộng"},{"startTime":194390,"endTime":194910,"data":"ước"}]},{"words":[{"startTime":194910,"endTime":195190,"data":"Mong"},{"startTime":195190,"endTime":195460,"data":"bên"},{"startTime":195460,"endTime":195720,"data":"em"},{"startTime":195720,"endTime":195990,"data":"sẽ"},{"startTime":195990,"endTime":196520,"data":"mãi"},{"startTime":196520,"endTime":196780,"data":"yên"},{"startTime":196780,"endTime":197320,"data":"bình"}]},{"words":[{"startTime":197320,"endTime":197570,"data":"Tuổi"},{"startTime":197570,"endTime":197840,"data":"xuân"},{"startTime":197840,"endTime":198110,"data":"đẹp"},{"startTime":198110,"endTime":198370,"data":"như"},{"startTime":198370,"endTime":199180,"data":"ánh"},{"startTime":199180,"endTime":200180,"data":"trăng"}]}],"file":"https://static-zmp3.zmdcdn.me/lyrics/3/2/7/6/327618c1288a280c457db86f6867a51c.lrc","enabledVideoBG":true,"defaultIBGUrls":["https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/a/a/b/e/aabe12ef3831ad70b24e56f82357d071.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/9/1/a/091aecb90fbe0dbf8a8c6c6ac565fbcd.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/4/8/e/9/48e954d466b4d4a58ed993de9c4ad4ae.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/f/d/7/4/fd749a0e9647048d3b3206d0d43f38b7.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/c/e/6/6ce66414fd305c2959833eb7262fda3e.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/f/8/c/df8c6b2b33f04bfb15bdf8f26ecc30b2.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/8/d/2/6/8d264b2ba5ede2840f812a0434f7e81a.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/1/3/e/e13eba8bece6dee40b09d08e33f50129.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/2/7/2/9/272971adef5ceb4168162061a306f433.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/d/8/3/dd83ba455be609b02b580c47a3e386dc.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/1/9/6/a/196a6ed5b7d85cb123ae33c537638223.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/4/9/7/b/497b06ff1829f7d22ae3f11486869743.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/7/3/f/b73f9b5c9102bec98bbd5e6ff993174b.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/5/c/3/6/5c368a95018189a5c90f1039fdf5c2de.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/2/f/3/62f38a21f5c83cc179f81e89c389696c.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/f/d/8/5/fd854be8bf431f5bb384ab03b0e1fa1b.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/c/0/7/dc071f8de1b454c358921a70ab5f21ef.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/1/3/f/a/13fa5e6f2b4479025dd5f808a21b5874.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/a/6/5/ba650b55b4a1d68bcb2cb5d029073b87.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/d/9/4/bd9477b80b517b2a9322058821db1363.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/4/7/a/1/47a1fec2cce8c8eca0337dca4154f24b.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/f/d/2/5/fd252316a37b098a7a77eeb463d65cca.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/8/3/b/e83beaed8abad7d6c3b1cf02cc379ea6.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/5/8/7/9/5879ebba5e2e6a7b5a197162a6c94f1a.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/5/d/6/f/5d6f23707a58be5a5beea2660e4b9af4.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/c/2/5/6c255e0ec433d35ac7b5e3af59258158.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/8/2/1/08214d7defd091ac608cb863cb9857f2.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/a/3/7/e/a37e18aebdc451d3d3e8bb705bffcb6e.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/0/d/5/00d553598a7921475262cb17ddf12da2.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/7/2/1/b72105d67c52e5c2fdb68d34fa0196de.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/2/6/1/3/2613dc722b4fc8fc5c06da57d517eb20.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/2/1/9/a/219aac49fa229688b53c5e66b6bec0e5.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/0/0/8/0008bbee62e41eda31706fc3fc228567.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/7/8/e/a/78ea5eab2baced8e667a7e1f7c53d0eb.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/d/d/5/edd5491004b631f26820ded0cbfefd7c.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/5/8/d/3/58d376691c64ac0cefd79aa38e98dd79.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/7/4/8/6748ebf095213b3e10ecdc8cd2d058f6.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/5/e/f/1/5ef1aea7dacb513c04e81ef0f83eee9c.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/4/5/b/e/45bedc3b6c02268986cfa53351120729.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/8/1/2/7/812763374b713681c32447874c0d8d02.jpg"],"BGMode":0},"timestamp":1694791162850}`; 
//Day 28
lyric = JSON.parse(lyric).data.sentences;
// console.log(lyric);

btnKaraoke = document.querySelector(".btn-karaoke");
karaoke = document.querySelector(".karaoke");
exit = document.querySelector(".exit");
karaokeInner = document.querySelector(".karaoke-inner");
var song = `
    <p>Hoa cỏ lau</p>
    <p>Ca sĩ: Hoàng An</p>
`

btnKaraoke.addEventListener("click", function() {
    karaoke.style.translate = "0 0";
    karaokeInner.innerHTML = song;
});

exit.addEventListener("click", function() {
    karaoke.style.translate = "0 100%";
    karaokeInner.innerHTML = "";
});

var arrLyric = [];
lyric.forEach(function(item) {
    arrLyric.push(item.words);
});



// console.log(arrLyric);
var lineOnePage = 2;
var showLyric = function(time) {
    var index = arrLyric.findIndex(function(item) {
        return time >= item[0].startTime && time <= item[item.length-1].endTime;
    })
    // console.log(index);
    if(index === -1) {
        karaokeInner.innerHTML = song;
    } else {
        karaokeInner.innerText = "";
        var page = Math.floor(index/2+1);
        var start = (page-1)*2;
        content = document.createElement("div");
        for(var i = start; i < start+lineOnePage; i++) {
            var lyricEl = document.createElement("p");
            arrLyric[i].forEach(function(item) {
                lyricEl.innerText += item.data + " ";
                console.log(item.data);
            });
            content.appendChild(lyricEl);
        }
        karaokeInner.append(content);
        // console.log(karaokeInner.innerText);
    }
}
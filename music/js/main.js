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

document.addEventListener("mouseup", function (e) {
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
    var value = (audio.currentTime * 100) / audio.duration;
    handleUpdateValue(value);
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
    // handleUpdateValue(0);
    playBtn.innerHTML = playBtnIcon;
});

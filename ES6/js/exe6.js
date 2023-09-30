const getA = () => {
    console.log("GetA");
}

const getB = () => {
    setTimeout(() => {
        console.log("GetB");
    }, 1000);
    // console.log("GetB");
}

const getC = () => {
    console.log("GetC");
}

getA();
getB();
getC();
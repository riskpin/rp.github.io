const process = document.getElementsByClassName('Process');
const processImage = document.getElementsByClassName('Process__image');
const processList = ['js-decide-spec', 'js-build-data', 'js-monitoring', 'js-feedback'];
let currentIndex = 0;

const removeProcessActive = () => [].forEach.call(process, process => {
    process.classList.remove("Process--active");
});

const removeProcessImageActive = () => [].forEach.call(processImage, processImage => {
    processImage.classList.remove("Process__image--active");
});

const addProcessActive = (className) => {
    const targetClass = document.getElementsByClassName(className);
    currentIndex = processList.indexOf(className);
    if (Object.keys(targetClass[0].classList).find(key => targetClass[0].classList[key] === "Process")) {
        targetClass[0].classList.add("Process--active");
        targetClass[1].classList.add("Process__image--active");
    } else {
        targetClass[0].classList.add("Process__image--active");
        targetClass[1].classList.add("Process--active");
    }
};

[].forEach.call(process, process => {
    process.addEventListener('click', function (e) {
        e.preventDefault();
        removeProcessActive();
        removeProcessImageActive();
        addProcessActive(process.classList[0]);
    });
});

setInterval(() => {
    removeProcessActive();
    removeProcessImageActive();
    addProcessActive(processList[currentIndex]);
    currentIndex = (currentIndex + 1) % 4;
}, 2000);
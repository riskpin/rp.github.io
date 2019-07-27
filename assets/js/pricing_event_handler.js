const imageVideoLabelingButton = document.getElementById("jsImageVideoLabelingButton");
const textLabelingButton = document.getElementById("jsTextLabelingButton");
const dataCollectionButton = document.getElementById("jsDataCollectionButton");
const imageVideoLabelingContent = document.getElementById("jsImageVideoLabelingContent");
const textLabelingContent = document.getElementById("jsTextLabelingContent");
const dataCollectionContent = document.getElementById("jsDataCollectionContent");

const buttons = [imageVideoLabelingButton, textLabelingButton, dataCollectionButton];
const contents = [imageVideoLabelingContent, textLabelingContent, dataCollectionContent];

const removeActive = () => {
    [].forEach.call(buttons, function (el) {
        el.classList.remove("active");
    });
    [].forEach.call(contents, function (el) {
        el.classList.remove("active");
    });
};

imageVideoLabelingButton.addEventListener('click', () => {
    removeActive();
    imageVideoLabelingButton.classList.add('active');
    imageVideoLabelingContent.classList.add('active');
});
textLabelingButton.addEventListener('click', () => {
    removeActive();
    textLabelingButton.classList.add('active');
    textLabelingContent.classList.add('active');
});
dataCollectionButton.addEventListener('click', () => {
    removeActive();
    dataCollectionButton.classList.add('active');
    dataCollectionContent.classList.add('active');
});
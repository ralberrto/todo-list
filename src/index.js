import "./style.css";

const appBody = document.getElementById("app-body");
const mainContainer = document.getElementById("container");

const Project = function(name, description) {
    return {name, description};
};

const renderProject = function(target, projects) {

}

const gettingStarted = Project(
    "Getting Started",
    "Learn the features that My List App puts in your hand, it's simple!"
);

const projects = [
    gettingStarted,
];

const contentGenerator = (function() {
    const  contentHeader = function(text) {
        const header = document.createElement("div");
        const titleText = document.createElement("p");
        header.appendChild(titleText);
        titleText.classList.add("header");
        titleText.textContent = text;
        return header;
    };
    return {contentHeader};
})();

appBody.prepend(contentGenerator.contentHeader("PROJECTS"));
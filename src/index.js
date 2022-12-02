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
    const prependHeader = function(target, headerText) {
        const header = document.createElement("div");
        const titleText = document.createElement("p");
        header.appendChild(titleText);
        titleText.classList.add("header");
        titleText.textContent = headerText;
        target.prepend(header);
    };
    
    const appendProjectList = function(target, projects) {
        let list = document.createElement("ul");
        for (let project of projects) {
            let item = document.createElement("li");
            list.appendChild(item);

            let projectName = document.createElement("p");
            projectName.textContent = project.name;
            item.appendChild(projectName);

            let projectDescription = document.createElement("p");
            projectDescription.textContent = project.description;
            item.appendChild(projectDescription);

            target.appendChild(list);
        }
    };

    return {prependHeader, appendProjectList};
})();

contentGenerator.prependHeader(appBody, "PROJECTS");
contentGenerator.appendProjectList(mainContainer, projects);
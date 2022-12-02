import "./style.css";

const appBody = document.getElementById("app-body");
const mainContainer = document.createElement("div");
mainContainer.setAttribute("id", "container");

const projectsTab = document.querySelector("button#projects");
projectsTab.onclick = renderProjects;

const tasksTab = document.querySelector("button#tasks");
tasksTab.onclick = renderTasks;

const tabs = [projectsTab, tasksTab];

const Task = function(title, description, dueDate, priority) {
    const pending = true;
    return {title, description, dueDate, priority, pending};
};

const Project = function(name, description) {
    const tasks = [];
    const addTask = function(task) {
        tasks.push(task);
    }
    return {name, description, tasks, addTask};
};

const gettingStarted = Project(
    "Getting Started",
    "Learn the features that My List App puts in your hand, it's simple!"
);

gettingStarted.tasks.forEach(task => console.log(task));

const projects = [
    gettingStarted,
    Project(
        "Oldenburg",
        "Apply to Oldenburg Universität"
    ),
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

function appenContainerToBody() {
    appBody.appendChild(mainContainer);
}

function clearAppBody() {
    appBody.innerHTML = "";
    mainContainer.innerHTML = "";
    appenContainerToBody();
}

function renderProjects() {
    tabs.forEach(tab => tab.classList.remove("active"));
    this.classList.add("active");
    clearAppBody();
    contentGenerator.prependHeader(appBody, "PROJECTS");
    contentGenerator.appendProjectList(mainContainer, projects);
}

function renderTasks() {
    tabs.forEach(tab => tab.classList.remove("active"));
    this.classList.add("active");
    clearAppBody();
    contentGenerator.prependHeader(appBody, "TASKS");
}
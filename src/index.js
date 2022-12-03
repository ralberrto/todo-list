import "./style.css";
import addSrc from "./icons/add_FILL1_wght400_GRAD0_opsz24.svg";

const Task = function(title, description, dueDate, priority) {
    const done = true;
    const isDone = function() {
        return done;
    }
    const switchDone = function() {
        done = !done;
    }
    return {title, description, dueDate, priority, isDone, switchDone};
};

const Project = function(name, description) {
    const tasks = [];
    const addTask = function(task) {
        tasks.push(task);
    }
    return {name, description, tasks, addTask};
};

const displayController = (function() {
    const _body = document.body;

    const _appBody = document.getElementById("app-body");

    const _mainContainer = document.createElement("div");
    _mainContainer.setAttribute("id", "container");

    const _clearAppBody = function() {
        _appBody.innerHTML = "";
        _mainContainer.innerHTML = "";
        _appendContainerToBody();
    };

    const _appendContainerToBody = function() {
        _appBody.appendChild(_mainContainer);
    };
    
    const renderProjects = function() {
        tabs.forEach(tab => tab.classList.remove("active"));
        this.classList.add("active");
        _clearAppBody();
        const header = DOMContentGenerator.header("PROJECTS");
        _appBody.prepend(header);

        const projectList = DOMContentGenerator.projectList(projects);
        _mainContainer.append(projectList);
    };

    const renderTasks = function() {
        tabs.forEach(tab => tab.classList.remove("active"));
        this.classList.add("active");
        _clearAppBody();
        const header = DOMContentGenerator.header("TASKS");
        _appBody.prepend(header);
    };

    return {renderProjects, renderTasks};
})();

const DOMContentGenerator = (function() {
    const header = function(headerText) {
        const header = document.createElement("div");
        const titleText = document.createElement("p");
        header.appendChild(titleText);
        titleText.classList.add("header");
        titleText.textContent = headerText;
        return header;
    };
    
    const projectList = function(projects) {
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
        }
        return list;
    };

    return {header, projectList};
})();

const gettingStarted = Project(
    "Getting Started",
    "Learn the features that My List App puts in your hand, it's simple!"
);

gettingStarted.addTask(Task(
    "Add your projects",
    "Explore the functionality that My Todo List offers you",
    new Date(),
    5
))

const projects = [
    gettingStarted,
    Project(
        "Agency",
        "Start up freelance consultant agency"
    ),
    Project(
        "Garden",
        "Make functional hydroponics garden"
    )
];

const projectsTab = document.querySelector("button#projects");
projectsTab.onclick = displayController.renderProjects;

const tasksTab = document.querySelector("button#tasks");
tasksTab.onclick = displayController.renderTasks;

const tabs = [projectsTab, tasksTab];

const addBtn = document.querySelector("button#add");
const addIcon = new Image();
addIcon.src = addSrc;
addBtn.appendChild(addIcon);

displayController.renderProjects.call(projectsTab);

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
        window.scrollTo(0, 0);
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
        const header = DOMContentGenerator.header(projects[activeProjectIndex].name);
        _appBody.prepend(header);
        let taskList = DOMContentGenerator.taskList(projects[activeProjectIndex]);
        _mainContainer.appendChild(taskList);
    };

    const renderProjectTasks = function() {
        tabs.forEach(tab => tab.classList.remove("active"));
        tasksTab.classList.add("active");
        activeProjectIndex = Number(this.getAttribute("index").substring(1));
        _clearAppBody();
        const index = this.getAttribute("index").substring(1);
        const project = projects[index];

        let taskList  = DOMContentGenerator.taskList(project);
        _mainContainer.appendChild(taskList);

        const header = DOMContentGenerator.header(project.name);
        _appBody.prepend(header);
    };

    return {renderProjects, renderTasks, renderProjectTasks};
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
        projects.forEach((project, index) => {
            let item = document.createElement("li");
            item.setAttribute("index", `i${index}`)
            item.onclick = displayController.renderProjectTasks;
            list.appendChild(item);

            let projectName = document.createElement("p");
            projectName.textContent = project.name;
            item.appendChild(projectName);

            let projectDescription = document.createElement("p");
            projectDescription.textContent = project.description;
            item.appendChild(projectDescription);
        });
        return list;
    };

    const taskList = function(project) {
        let list = document.createElement("ul");
        project.tasks.forEach(task => {
            let item = document.createElement("li");
            list.appendChild(item);

            let taskName = document.createElement("p");
            taskName.textContent = task.title;
            item.appendChild(taskName);

            let taskDescription = document.createElement("p");
            taskDescription.textContent = task.description;
            item.appendChild(taskDescription);
        });
        return list;
    }

    return {header, projectList, taskList};
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
));
gettingStarted.addTask(Task(
    "Add tasks to your projects",
    "Now that you have projects added, add tasks to them and get to work!"
));

const agency = Project(
    "Agency",
    "Start up freelance consultant agency"
);
agency.addTask(Task(
    "Set meeting",
    "Set meeting with Omar Duarte, the consultant. Tel: 33 3333 3333."
));
agency.addTask(Task(
    "Make transaction",
    "Pay consultant the audience. Account number: 4421 2342 2321 2929"
))

const projects = [
    gettingStarted,
    agency,
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

let activeProjectIndex = 0;
displayController.renderTasks.call(tasksTab);

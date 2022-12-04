import "./style.css";
import addSrc from "./icons/add_FILL1_wght400_GRAD0_opsz24.svg";

const Task = function(title, description, dueDate, priority) {
    const done = true;

    let _dueDate = dueDate; 

    const isDone = function() {
        return done;
    };

    const switchDone = function() {
        done = !done;
    };

    const _inThisYear = function() {
        return _dueDate.getYear() === (new Date()).getYear();
    };

    const api = {title, description, priority, isDone, switchDone};

    Object.defineProperties(api, {
        "dueDate": {
            get() {
                if (_inThisYear) {
                    return _dueDate.toLocaleString(LocaleConfig.locale, LocaleConfig.shortDateOptions);
                }
                return _dueDate.toLocaleString(LocaleConfig.locale, LocaleConfig.longDateOptions);
            },
            set(date) {_dueDate = date;}
        },
    });

    return api;
};

const Project = function(name, description) {
    const tasks = [];
    const addTask = function(task) {
        tasks.push(task);
    }
    return {name, description, tasks, addTask};
};

const displayController = (function() {
    const _appBody = document.getElementById("app-body");

    const _mainContainer = document.createElement("div");
    _mainContainer.setAttribute("id", "container");

    const projectsTab = document.querySelector("button#projects");
    const tasksTab = document.querySelector("button#tasks");
    const tabs = [projectsTab, tasksTab];

    const addBtn = document.querySelector("button#add");
    const addIcon = new Image();
    addIcon.src = addSrc;
    addBtn.appendChild(addIcon);

    const loadPage = function() {
        renderTasks.call(tasksTab);
    };

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

        const projectList = DOMContentGenerator.projectList(State.projects);
        _mainContainer.append(projectList);
    };

    const renderTasks = function() {
        tabs.forEach(tab => tab.classList.remove("active"));
        this.classList.add("active");
        _clearAppBody();
        const header = DOMContentGenerator.header(State.activeProject.name);
        _appBody.prepend(header);
        let taskList = DOMContentGenerator.taskList(State.activeProject);
        _mainContainer.appendChild(taskList);
    };

    const renderProjectTasks = function() {
        tabs.forEach(tab => tab.classList.remove("active"));
        tasksTab.classList.add("active");
        const activeProjectIndex = Number(this.getAttribute("index").substring(1));
        State.activeProject = activeProjectIndex;
        _clearAppBody();
        const project = State.activeProject;

        let taskList  = DOMContentGenerator.taskList(project);
        _mainContainer.appendChild(taskList);

        const header = DOMContentGenerator.header(project.name);
        _appBody.prepend(header);
    };
    
    projectsTab.onclick = renderProjects;
    tasksTab.onclick = renderTasks;

    return {loadPage, renderProjects, renderTasks, renderProjectTasks};
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
            item.classList.add("project-entry");
            item.onclick = displayController.renderProjectTasks;
            list.appendChild(item);

            let projectName = document.createElement("p");
            projectName.textContent = project.name;
            projectName.classList.add("entry-title");
            item.appendChild(projectName);

            let projectDescription = document.createElement("p");
            projectDescription.textContent = project.description;
            item.appendChild(projectDescription);
        });
        return list;
    };

    const taskElement = function(task) {
        const wrapper = document.createElement("div");
        wrapper.classList.add("task-entry");

        const title = document.createElement("p");
        title.classList.add("entry-title");
        title.textContent = task.title;

        const description = document.createElement("p");
        description.textContent = task.description;

        const details = document.createElement("div");
        details.classList.add("task-details");

        const dueDate = document.createElement("p");
        dueDate.textContent = `${task.dueDate}`;

        const priority = document.createElement("p");
        priority.textContent = `Priority: ${task.priority}`;

        const doneRadioBtn = document.createElement("p");
        doneRadioBtn.textContent = "Complete";

        details.appendChild(dueDate);
        details.appendChild(priority);
        details.appendChild(doneRadioBtn);

        wrapper.appendChild(title);
        wrapper.appendChild(description);
        wrapper.appendChild(details);
        
        return wrapper;
    };

    const taskList = function(project) {
        let list = document.createElement("ul");
        if (project.tasks.length === 0) {
            const item = document.createElement("li");
            list.appendChild(item);

            const noTaskElement = document.createElement("p");
            noTaskElement.textContent = "No tasks have been added";
            noTaskElement.classList.add("empty-task");
            item.appendChild(noTaskElement);
        }
        else {
            project.tasks.forEach(task => {
                let item = document.createElement("li");
                item.appendChild(taskElement(task));

                list.appendChild(item);
            });
        }
        return list;
    };

    return {header, projectList, taskList};
})();

const State = (function() {
    let _activeProjectIndex = 0;

    const projects = [];

    const gettingStarted = Project(
        "Getting Started",
        "Learn the features that My List App puts in your hand, it's simple!"
    );
    gettingStarted.addTask(Task(
        "Add your projects",
        "Explore the functionality that My Todo List offers you",
        new Date(),
        "High"
    ));
    gettingStarted.addTask(Task(
        "Add tasks to your projects",
        "Now that you have projects added, add tasks to them and get to work!",
        new Date(),
        "High"
    ));
    
    const agency = Project(
        "Agency",
        "Start up freelance consultant agency"
    );
    agency.addTask(Task(
        "Set meeting",
        "Set meeting with Omar Duarte, the consultant. Tel: 33 3333 3333.",
        new Date(),
        "High"
    ));
    agency.addTask(Task(
        "Make transaction",
        "Pay consultant the audience. Account number: 4421 2342 2321 2929",
        new Date(),
        "Medium"
    ));

    const garden = Project(
        "Garden",
        "Make functional hydroponics garden"
    );

    [gettingStarted, agency, garden].forEach(project => projects.push(project));

    const addProject = function(project) {
        projects.push(project);
    }
    
    const api = {projects, addProject};

    Object.defineProperty(api, "activeProject", {
        get() {
            return projects[_activeProjectIndex];
        },

        set(index) {
            _activeProjectIndex = index;
        }
    });

    Object.defineProperty(api, "dateOptions", {
        get() {
            return _dateOptions;
        }
    });

    return api;
})();

const LocaleConfig = (function() {
    let _locale = undefined;//"en-GB";

    const _longDateOptions = {
        "year": "numeric",
        "month": "short",
        "weekday": "short",
        "day": "numeric"
    };

    const _shortDateOptions = {
        "month": "short",
        "weekday": "long",
        "day": "numeric"
    };

    const api = {};

    Object.defineProperties(api, {
        "locale": {
            get() {return _locale;},
            set(tag) {_locale = tag;}
        },
        "shortDateOptions": {
            get() {return _shortDateOptions;},
        },
        "longDateOptions": {
            get() {return _longDateOptions;}
        }
    });
        
    return api;
})();

displayController.loadPage();
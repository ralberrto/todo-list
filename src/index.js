import "./style.css";
import addSrc from "./icons/add_FILL1_wght400_GRAD0_opsz24.svg";
import calendarSrc from "./icons/calendar_month_FILL1_wght400_GRAD0_opsz24.svg";

const Task = function(title, description, dueDate, priority) {
    let _done = false;

    let _dueDate = dueDate; 

    let _priority = priority;

    let _priorities = ["Low", "Medium", "High"];

    const shiftPriority = function() {
        let priorityIndex = _priorities.indexOf(_priority);
        priorityIndex += 1;
        if (priorityIndex > _priorities.length - 1) {priorityIndex -= priorityIndex}
        _priority = _priorities[priorityIndex];
        return _priorities[priorityIndex];
    };

    const switchStatus = function() {
        _done = !_done;
    };

    const _inThisYear = function() {
        return _dueDate.getYear() === (new Date()).getYear();
    };

    const api = {title, description, priority, switchStatus, shiftPriority};

    Object.defineProperties(api, {
        "dueDate": {
            get() {
                if (_inThisYear()) {
                    return _dueDate.toLocaleString(LocaleConfig.locale, LocaleConfig.shortDateOptions);
                }
                return _dueDate.toLocaleString(LocaleConfig.locale, LocaleConfig.longDateOptions);
            },
            set(date) {_dueDate = date;}
        },
        "doneString": {
            get() {return _done ? "Done" : "Pending";},
        },
        "done": {
            get() {return _done;}
        },
        "priority": {
            get() {return _priority;}
        }
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

    const switchTaskStatus = function() {
        const taskIndex = Number(this.getAttribute("index"));
        const task = State.activeProject.tasks[taskIndex];
        task.switchStatus();
        this.textContent = task.doneString;
        this.classList.toggle("done");
    };

    const shiftPriority = function() {
        const taskIndex = Number(this.getAttribute("index"));
        const task = State.activeProject.tasks[taskIndex];
        this.classList.remove(task.priority.toLowerCase());
        const newPriority = task.shiftPriority();
        this.classList.add(newPriority.toLowerCase());
        this.textContent = newPriority;
    }

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

    return {loadPage, renderProjects, renderTasks, renderProjectTasks, switchTaskStatus, shiftPriority};
})();

const DOMContentGenerator = (function() {
    const _appendChildren = function(target, children) {
        const elements = Array.prototype.slice.call(arguments, 1);
        for (let element of elements) {
            target.appendChild(element);
        }
    };

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
        const taskIndex = State.activeProject.tasks.indexOf(task);

        const wrapper = document.createElement("div");
        wrapper.classList.add("task-entry");

        const title = document.createElement("p");
        title.classList.add("entry-title");
        title.textContent = task.title;

        const description = document.createElement("p");
        description.textContent = task.description;

        const details = document.createElement("div");
        details.classList.add("task-details");

        const dueDateCont = document.createElement("div");
        const dueDate = document.createElement("p");
        const calendar = new Image();
        dueDateCont.classList.add("due-container");
        dueDate.classList.add("due");
        dueDate.textContent = task.dueDate;
        calendar.src = calendarSrc;
        _appendChildren(dueDateCont, calendar, dueDate);

        const priorityCont = document.createElement("div");
        const priorityTag = document.createElement("p");
        const priority = document.createElement("p");
        priorityTag.classList.add("tag");
        priority.classList.add("value");
        priority.classList.add(task.priority.toLowerCase());
        priority.setAttribute("index", taskIndex);
        priority.onclick = displayController.shiftPriority;
        priorityTag.textContent = "Priority";
        priority.textContent = task.priority;
        _appendChildren(priorityCont, priorityTag, priority);

        const doneContainer = document.createElement("div");
        const doneTag = document.createElement("p");
        const done = document.createElement("p");
        doneTag.classList.add("tag")
        done.classList.add("value");
        if (task.done) {done.classList.add("done")};
        done.setAttribute("index", taskIndex);
        done.onclick = displayController.switchTaskStatus;
        doneTag.textContent = "Completion";
        done.textContent = task.doneString;
        _appendChildren(doneContainer, doneTag, done);

        _appendChildren(details, dueDateCont, priorityCont, doneContainer);

        _appendChildren(wrapper, title, description, details);
        
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
        "Medium"
    ));
    gettingStarted.addTask(Task(
        "Get to Work",
        "All that's left for you to do is get to work to make your dreams come true!",
        new Date(2023, 0, 2),
        "Low"
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
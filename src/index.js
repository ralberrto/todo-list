import "./style.css";
import addSrc from "./icons/add_FILL1_wght400_GRAD0_opsz24.svg";
import calendarSrc from "./icons/calendar_month_FILL1_wght400_GRAD0_opsz24.svg";

const Task = function(title, description, dueDate, priority) {
    let _title = title;
    let _description = description;
    let _dueDate = dueDate;
    let _priority = priority;

    let _done = false;
    let _priorities = ["Low", "Medium", "High"];

    const shiftPriority = function() {
        let priorityIndex = _priorities.indexOf(_priority);
        priorityIndex += 1;
        if (priorityIndex > _priorities.length - 1) {priorityIndex -= priorityIndex}
        _priority = _priorities[priorityIndex];
        return _priority;
    };

    const switchStatus = function() {
        _done = !_done;
    };

    const _inThisYear = function() {
        return _dueDate.getYear() === (new Date()).getYear();
    };

    const instance = {title, description, dueDate, priority, switchStatus, shiftPriority};

    Object.defineProperties(instance, {
        "dueDateHuman": {
            get() {
                if (_inThisYear()) {
                    return _dueDate.toLocaleString(LocaleConfig.locale, LocaleConfig.shortDateOptions);
                }
                return _dueDate.toLocaleString(LocaleConfig.locale, LocaleConfig.longDateOptions);
            },
        },
        "dueDate": {
            get() {return _dueDate;},
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
        },
        "title": {
            get() {return _title},
            set(title) {_title = title}
        },
        "description": {
            get() {return _description},
            set(description) {_description = description}
        },
    });

    return instance;
};

const Project = function(name, description) {
    let _name = name;
    let _description = description;

    let _tasks = [];
    const tasks = _tasks;

    const addTask = function(task) {
        _tasks.push(task);
    };

    const deleteTask = function(index) {
        _tasks.splice(index, 1);
    };

    const instance = {name, description, tasks, addTask, deleteTask};

    Object.defineProperties(instance, {
        "name": {
            get() {return _name},
            set(name) {_name = name}
        },
        "description": {
            get() {return _description},
            set(description) {_description = description}
        },
        "tasks": {
            get() {return _tasks},
            set(array) {_tasks = array}
        }
    });

    return instance;
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
        _clearMainContainer();
        _appendContainerToBody();
    };

    const _clearMainContainer = function() {
        _mainContainer.innerHTML = "";
    };

    const _appendContainerToBody = function() {
        _appBody.appendChild(_mainContainer);
    };

    const _hideAddBtn = function() {
        addBtn.style.display = "none";
    };

    const _showAddBtn = function() {
        addBtn.style.display = "grid";
    };

    const deleteEntry = function(event) {
        event.stopPropagation();
        const index = Number(this.getAttribute("index"));
        if (this.classList.contains("delete-task")) {
            State.activeProject.deleteTask(index);
            renderTasks.call(tasksTab);
        }
        else if (this.classList.contains("delete-project")) {
            State.projects.splice(index, 1);
            renderProjects.call(projectsTab);
        }
        storageController.populate();
    };

    const addProject = function() {
        const projectList = document.getElementById("project-list");
        projectList.appendChild(DOMContentGenerator.projectInputForm());
        _hideAddBtn();
        window.scrollTo(0, document.body.scrollHeight);
    };

    const submitProject = function(event) {
        event.preventDefault();
        const title = document.querySelector("#add-project .entry-title").value;
        const description = document.querySelector("#add-project .description").value;
        const project = Project(title, description);
        State.addProject(project);

        renderProjects.call(projectsTab);
        _showAddBtn();

        storageController.populate();
    };

    const addTask = function() {
        const taskList = document.getElementById("task-list");
        taskList.appendChild(DOMContentGenerator.taskInputForm());
        _hideAddBtn();
        window.scrollTo(0, document.body.scrollHeight);
        //addBtn.style.display = "none";
    };

    const submitTask = function(event) {
        event.preventDefault();
        const title = document.querySelector("#add-task .entry-title").value;
        const description = document.querySelector("#add-task .description").value;

        const dateISOString = document.querySelector("#add-task .task-details .due-container input").value
            + "T00:00:00.000Z"; //To make sure it's always UTC.
        const dateUTC = new Date(dateISOString);
        const offset = dateUTC.getTimezoneOffset();
        const localDate = new Date(dateUTC.getTime() + offset*60000);
        
        const priority = document.querySelector("#add-task .task-details .priority select").value;
        const task = Task(title, description, localDate, priority);

        State.activeProject.addTask(task);
        renderTasks.call(tasksTab);

        _showAddBtn();
        window.scrollTo(0, document.body.scrollHeight);

        storageController.populate();
    };

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

    
    const renderProjects = function() {
        _clearAppBody();
        _showAddBtn();
        addBtn.onclick = addProject;
        tabs.forEach(tab => tab.classList.remove("active"));
        this.classList.add("active");

        const header = DOMContentGenerator.header("PROJECTS");
        _appBody.prepend(header);

        const projectList = DOMContentGenerator.projectList(State.projects);
        _mainContainer.append(projectList);
    };

    const renderTasks = function() {
        _clearAppBody();
        _showAddBtn();
        addBtn.onclick = addTask;
        tabs.forEach(tab => tab.classList.remove("active"));
        this.classList.add("active");

        const header = DOMContentGenerator.header(State.activeProject.name);
        _appBody.prepend(header);

        let taskList = DOMContentGenerator.taskList(State.activeProject);
        _mainContainer.appendChild(taskList);
    };

    const renderProjectTasks = function() {
        tabs.forEach(tab => tab.classList.remove("active"));
        tasksTab.classList.add("active");
        addBtn.onclick = addTask;
        const activeProjectIndex = Number(this.getAttribute("index"));
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

    return {loadPage, renderProjects, renderTasks, renderProjectTasks, switchTaskStatus, shiftPriority,
        submitTask, submitProject, deleteEntry};
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
    
    const _createDelBtn = function() {
        const deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("type", "button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.textContent = "Remove";
        deleteBtn.onclick = displayController.deleteEntry;

        return deleteBtn;
    };

    const projectList = function(projects) {
        let list = document.createElement("ul");
        list.setAttribute("id", "project-list");
        projects.forEach((project, index) => {
            let item = document.createElement("li");
            item.setAttribute("index", `${index}`)
            item.classList.add("entry");
            item.onclick = displayController.renderProjectTasks;
            list.appendChild(item);

            let projectName = document.createElement("p");
            projectName.textContent = project.name;
            projectName.classList.add("entry-title");

            let projectDescription = document.createElement("p");
            projectDescription.textContent = project.description;

            _appendChildren(item, projectName, projectDescription);
            if (index !== 0) {
                let delBtn = _createDelBtn();
                delBtn.classList.add("delete-project");
                delBtn.setAttribute("index", index);
                item.appendChild(delBtn);
            }
        });
        return list;
    };

    const projectInputForm = function() {
        const container = document.createElement("form");
        container.setAttribute("id", "add-project");
        container.setAttribute("action", "");
        container.setAttribute("method", "get");
        container.classList.add("entry");
        //container.classList.add("project-form")
        container.addEventListener("submit", displayController.submitProject);

        const title = document.createElement("input");
        title.setAttribute("type", "text");
        title.setAttribute("placeholder", "Title");
        title.setAttribute("required", "");
        title.classList.add("entry-title");

        const description = document.createElement("input");
        description.setAttribute("type", "text");
        description.setAttribute("placeholder", "Description (optional)");
        description.classList.add("description");

        const btnsCont = document.createElement("ul");
        btnsCont.classList.add("project-btns");

        const saveBtn = document.createElement("button");
        saveBtn.setAttribute("type", "submit");
        saveBtn.setAttribute("form", "add-project");
        saveBtn.textContent = "Save";
        btnsCont.appendChild(saveBtn);

        _appendChildren(container, title, description, btnsCont);
        return container;
    };

    const taskInputForm = function() {
        const taskList = document.getElementById("task-list");
        const taskIndex = State.activeProject.tasks.length;

        if (taskIndex === 0) {taskList.innerHTML = "";}

        const container = document.createElement("form");
        container.setAttribute("id", "add-task");
        container.setAttribute("action", "");
        container.setAttribute("method", "get");
        container.classList.add("entry");
        container.classList.add("task-form")
        container.addEventListener("submit", displayController.submitTask);

        const title = document.createElement("input");
        title.setAttribute("type", "text");
        title.setAttribute("placeholder", "Title");
        title.setAttribute("required", "");
        title.classList.add("entry-title");

        const description = document.createElement("input");
        description.setAttribute("type", "text");
        description.setAttribute("placeholder", "Description (optional)");
        description.classList.add("description");

        const details = document.createElement("ul");
        details.classList.add("task-details");

        const dueDateCont = document.createElement("li");
        dueDateCont.classList.add("due-container");
        const dueDate = document.createElement("input");
        dueDate.classList.add("due");
        dueDate.setAttribute("type", "date");
        dueDate.setAttribute("id", `date${taskIndex}`);
        dueDate.setAttribute("required", "");
        const calendarImage = new Image();
        calendarImage.src = calendarSrc;
        const dateInputLabel = document.createElement("label");
        dateInputLabel.setAttribute("for", `date${taskIndex}`);
        dateInputLabel.appendChild(calendarImage);
        _appendChildren(dueDateCont, dateInputLabel, dueDate);
        
        const priorityCont = document.createElement("li");
        priorityCont.classList.add("priority");
        const priorityTag = document.createElement("p");
        priorityTag.classList.add("tag");
        priorityTag.textContent = "Priority";
        const priority = document.createElement("select");
        priority.setAttribute("index", taskIndex);
        const highOption = document.createElement("option");
        highOption.textContent = "High";
        const medOption = document.createElement("option");
        medOption.textContent = "Medium";
        const lowOption = document.createElement("option");
        lowOption.textContent = "Low";
        _appendChildren(priority, highOption, medOption, lowOption);
        _appendChildren(priorityCont, priorityTag, priority);

        const saveBtn = document.createElement("button");
        saveBtn.setAttribute("type", "submit");
        saveBtn.setAttribute("form", "add-task");
        saveBtn.textContent = "Save";

        _appendChildren(details, dueDateCont, priorityCont, saveBtn);

        _appendChildren(container, title, description, details);
        return container;
    };

    const _includeTaskContent = function(container, task) {
        const taskIndex = State.activeProject.tasks.indexOf(task);

        container.classList.add("entry");

        const title = document.createElement("p");
        title.classList.add("entry-title");
        title.textContent = task.title;

        const description = document.createElement("p");
        description.textContent = task.description;

        const details = document.createElement("ul");
        details.classList.add("task-details");

        const dueDateCont = document.createElement("li");
        const dueDate = document.createElement("p");
        const calendar = new Image();
        dueDateCont.classList.add("due-container");
        dueDate.classList.add("due");
        dueDate.textContent = task.dueDateHuman;
        calendar.src = calendarSrc;
        _appendChildren(dueDateCont, calendar, dueDate);

        const priorityCont = document.createElement("li");
        const priorityTag = document.createElement("p");
        const priority = document.createElement("button");
        priorityTag.classList.add("tag");
        priority.classList.add(task.priority.toLowerCase());
        priority.setAttribute("index", taskIndex);
        priority.setAttribute("type", "button");
        priority.onclick = displayController.shiftPriority;
        priorityTag.textContent = "Priority";
        priority.textContent = task.priority;
        _appendChildren(priorityCont, priorityTag, priority);

        const doneContainer = document.createElement("li");
        const doneTag = document.createElement("p");
        const done = document.createElement("button");
        doneTag.classList.add("tag")
        if (task.done) {done.classList.add("done")};
        done.setAttribute("index", taskIndex);
        done.setAttribute("type", "button");
        done.onclick = displayController.switchTaskStatus;
        doneTag.textContent = "Completion";
        done.textContent = task.doneString;
        _appendChildren(doneContainer, doneTag, done);

        const delBtn = _createDelBtn();
        delBtn.classList.add("delete-task");
        delBtn.setAttribute("index", taskIndex);
        _appendChildren(details, dueDateCont, priorityCont, doneContainer);

        _appendChildren(container, title, description, details, delBtn);
    };

    const taskList = function(project) {
        let list = document.createElement("ul");
        list.setAttribute("id", "task-list");
        if (project.tasks.length === 0) {
            const item = document.createElement("li");
            item.classList.add("entry");
            list.appendChild(item);

            const noTaskElement = document.createElement("p");
            noTaskElement.textContent = "No tasks have been added";
            noTaskElement.classList.add("empty-task");
            item.appendChild(noTaskElement);
        }
        else {
            project.tasks.forEach(task => {
                let item = document.createElement("li");
                _includeTaskContent(item, task);

                list.appendChild(item);
            });
        }
        return list;
    };

    return {header, projectList, taskList, taskInputForm, projectInputForm};
})();

const State = (function() {
    let _activeProjectIndex = 0;

    let _projects = [];

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
        new Date(),
        "Low"
    ));

    const agency = Project(
        "Agency",
        "Along with my colaborators get this amazing project get going"
    );
    
    _projects.push(gettingStarted);
    _projects.push(agency);

    const addProject = function(project) {
        _projects.push(project);
    }
    
    const api = {addProject};

    Object.defineProperty(api, "activeProject", {
        get() {
            return _projects[_activeProjectIndex];
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

    Object.defineProperty(api, "projects", {
        set(array) {
            _projects = array;
        },
        get() {
            return _projects;
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

const storageController = (function() {
    const populate = function() {
        window.localStorage.setItem("projects", JSON.stringify(State.projects));
    };

    const retrieveStorage = function() {
        if (!window.localStorage.getItem("projects")) {
            populate();
        }
        const storedProjects = JSON.parse(window.localStorage.getItem("projects"));
        State.projects = storedProjects.map(_restoreProject);
    };

    const _restoreProject = function(project) {
        const restoredProject = Project(project.name, project.description);
        restoredProject.tasks = project.tasks.map(_restoreTask);
        return restoredProject;
    };

    const _restoreTask = function(task) {
        task.dueDate = _restoreDate(task.dueDate);
        const restoredTask = Task(task.title, task.description, task.dueDate, task.priority);
        return restoredTask;
    };

    const _restoreDate = function(dateStringUTC) {
        return new Date(dateStringUTC);
    };

    return {populate, retrieveStorage};
})();

storageController.retrieveStorage();
displayController.loadPage();
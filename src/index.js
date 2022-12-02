import "./style.css";

const Project = function(name, description) {
    return {name, description};
}

const div = document.createElement("div");
div.textContent = "Hello world!";
document.body.appendChild(div);
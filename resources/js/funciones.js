var interval = null;

const fechaNace = new Date("1994-05-23");
const fechaActual = new Date();
const edad = Math.floor(((fechaActual - fechaNace) / (1000 * 60 * 60 * 24) / 365));

const about = "Hi. I'm " + edad + " years old and this web page is my portofolio. About my i have to say that i like to develop in backend more than frontend but have both experiences. Personally i want my skill grow up and get more knowledge doing new IT projects."
const degree = "Here show the degrees courses and studies that I made";
const experience = "..."

var selectedNode = "about";

const node_about = document.getElementById("about");
const node_degree = document.getElementById("degree");
const node_experience = document.getElementById("experience");

setSelected(node_about);
handleMenu(node_about.id);

function setSelected(node) {
    node_about.setAttribute("class", "");
    node_degree.setAttribute("class", "");
    node_experience.setAttribute("class", "");
    selectedNode = node.id;
    node.setAttribute("class", " activado");
}

function completeContent(classOne, classTwo, list_of_text, list_of_img, list_of_url) {
    var first_div_node = document.createElement("div");
    first_div_node.setAttribute("class", classOne);

    for (i = 0; i < list_of_text.length; i++) {
        var child = document.createElement("div");
        child.setAttribute("class", classTwo);
        var child_text = document.createTextNode(list_of_text[i]);
        var child_url = document.createElement("a");
        var child_div = document.createElement("div");
        child_url.setAttribute("href", list_of_url[i]);
        child_url.appendChild(child_text);
        child_div.appendChild(child_url);

        var child_img = document.createElement("img");
        child_img.src = list_of_img[i];
        child.appendChild(child_img);
        child.appendChild(child_div);

        first_div_node.appendChild(child);
    }

    document.getElementById("content").appendChild(first_div_node);
}

function handleMenu(id) {

    switch (id) {
        case "about":
            if (setSelected === "about") {
                return;
            }
            clearInterval(interval);
            document.getElementById("content").innerHTML = "";
            setSelected(node_about);
            var node = document.createElement("h5");
            var textNode = document.createTextNode("About Me");
            var node2 = document.createElement("p");
            node2.setAttribute("class", "texto_content");
            var textNode2 = document.createTextNode(about);
            node.appendChild(textNode);
            document.getElementById("content").appendChild(node);
            document.getElementById("content").appendChild(node2);
            printLetterByLetter(node2, textNode2.data, 50);
            break;
        case "degree":
            if (selectedNode === "degree") {
                return;
            }
            clearInterval(interval);
            document.getElementById("content").innerHTML = "";
            setSelected(node_degree);
            var node = document.createElement("h5");
            var textNode = document.createTextNode("My Degrees");
            node.appendChild(textNode);
            var node2 = document.createElement("p");
            node2.setAttribute("class", "texto_content");
            var textNode2 = document.createTextNode(degree);
            document.getElementById("content").appendChild(node);
            document.getElementById("content").appendChild(node2);
            printLetterByLetter(node2, textNode2.data, 50);
            completeContent("degrees", "degree",
                ["Primary School", "Secodary School Bachelor and Electronic Technician",
                    "University: System Analyst Degree", "Invest and Study: Libro React+MongoDB+Node...",
                    "Course: API Rest With Spring Boot", "Course: NestJS", "Course: Ionic Framework with React and MongoDB"],
                ["./img/book-bookmark-svgrepo-com.svg", "./img/book-bookmark-svgrepo-com.svg", "./img/square-academic-cap.svg",
                    "./img/book-2-svgrepo-com.svg", "./img/diploma-svgrepo-com.svg", "./img/diploma-svgrepo-com.svg", "./img/diploma-svgrepo-com.svg"],
                ["https://www.facebook.com/escuelasecundariasanjorgejunin/", "https://www.facebook.com/eest1junin/?locale=es_LA",
                    "https://unnoba.edu.ar", "https://reactiveprogramming.io/books/aplicaciones-reactivas-con-react-nodejs-mongodb/es",
                    "https://drive.google.com/file/d/1qR7Cycrs5LR31dQpJAb2Zgvqao09HVRP/view?usp=sharing", "https://ariel0000.github.io/NestJS-course", "https://drive.google.com/file/d/1jF5ej3Gl4aLrSzvdrrSNz7DcCSMbM1-F/view?usp=sharing"]
            );
            break;
        case "experience":
            if (selectedNode === "experience") {
                return;
            }
            clearInterval(interval);
            document.getElementById("content").innerHTML = "";
            setSelected(node_experience);
            var node = document.createElement("h5");
            var textNode = document.createTextNode("Experiences");
            node.appendChild(textNode);
            document.getElementById("content").appendChild(node);
            break;
    }
}

function printLetterByLetter(element, message, speed) {
    var i = 0;
    interval = setInterval(function () {
        element.innerHTML += message.charAt(i);
        i++;
        if (i > (message.length / 2)) {
            element.scrollIntoView();
        }
        if (i > message.length) {
            element.scrollIntoView();
            clearInterval(interval);
        }
    }, speed);
}

function onClose(evt) {

    document.getElementById("content").disabled = true;
}

function onMessage(evt) {
    var area = document.getElementById("footer")
    area.innerHTML += evt.data + "\n";
}

function enviarTexto(event) {
    event.preventDefault();
    var campo = event.target.texto;
    doSend(campo.value);
    campo.value = "";
}



let HTML = "";
const listaObjetos = [];

//questionario se escribe igual en español que en inglés
class cuestionarioSubsection {

    constructor(type, title, questions) {
        this.type = type;
        this.title = title;
        this.questions = questions;
    }

}

let cuestionarioSubsections = [];

inputType = parseInt(prompt("Ingrese el tipo de entrada que desea añadir al cuestionario(escribir el número correspondiente): \n 1-Multiple choice sin repetición \n 2-Multiple choice con repetición \n 3-Textfield"));
while (inputType != NaN) {
    switch (inputType) {
        case 1:
            MC1();
            break;
        case 2:
            MC2();
            break;
        case 3:
            Textfield();
            break;

        default:
            break;
    }
    inputType = parseInt(prompt("Ingrese el tipo de entrada que desea añadir al cuestionario(escribir el número correspondiente): \n 1-Multiple choice sin repetición \n 2-Multiple choice con repetición \n 3-Textfield"));
    console.log(inputType);
}


function MC1() {
    let titulo = prompt("Ingrese el título de la sección del cuestionario");
    HTML = HTML + "<h3>" + titulo + "</h3> \n"
    let valor = "";
    let i = 1;
    let valores = [];
    valor = prompt("Ingrese el texto de la opción" + i);
    while (valor != null) {
        i++
        valores.push(valor);
        HTML = HTML + "<input type='radio' value='" + valor + "'>" + valor + " <br> \n"
        valor = prompt("Ingrese el texto de la opción " + i);
    }
    cuestionarioSubsections.push(new cuestionarioSubsection("MC1", titulo, valores));
    console.log(cuestionarioSubsections);
    alert(HTML);
}

function MC2() {
    HTML = HTML + "<h3>" + prompt("Ingrese el título de la sección del cuestionario") + "</h3> \n"
    let valor = "";
    let i = 1;
    valor = prompt("Ingrese el texto de la primera opción");
    while (valor != null) {
        i++
        HTML = HTML + "<input type='checkbox' value='" + valor + "'>" + valor + " <br> \n"
        valor = prompt("Ingrese el texto de la opción " + i);
    }

    alert(HTML);
}

function Textfield() {
    HTML = HTML + "<h3>" + prompt("Ingrese el título de la sección del textfield") + "</h3> \n"
    let valor = "";

    HTML = HTML + "<input type='textfield' value='" + valor + "'>" + valor + " <br> \n"
    valor = prompt("Ingrese el texto");

    alert(HTML);
}
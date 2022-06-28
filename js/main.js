
let HTML = "";

//questionario se escribe igual en español que en inglés
class cuestionarioSubsection {

    constructor(type, title, questions) {
        this.type = type;
        this.title = title;
        this.questions = questions;
    }

}

let cuestionarioSubsections = [];

inputType = parseInt(prompt("Ingrese el tipo de entrada que desea añadir al cuestionario(escribir el número correspondiente): \n 1-Multiple choice sin repetición \n 2-Multiple choice con repetición \n 3-Textfield \n cancelar-salir del bucle"));
while (inputType !== NaN) {
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
    inputType = parseInt(prompt("Ingrese el tipo de entrada que desea añadir al cuestionario(escribir el número correspondiente): \n 1-Multiple choice sin repetición \n 2-Multiple choice con repetición \n 3-Textfield \n cancelar-salir del bucle"));
    console.log(inputType);
}


function MC1() {
    let title = prompt("Ingrese el título de la sección del cuestionario");
    HTML = HTML + "<h3>" + title + "</h3> \n"
    let value = "";
    let i = 1;
    let values = [];
    value = prompt("Ingrese el texto de la opción" + i);
    while (value !== null) {
        i++
        values.push(value);
        HTML = HTML + "<input type='radio' value='" + value + "'>" + value + " <br> \n"
        value = prompt("Ingrese el texto de la opción " + i);
    }
    cuestionarioSubsections.push(new cuestionarioSubsection("MC1", title, values));
    console.log(cuestionarioSubsections);
    alert(HTML);
}

function MC2() {
    let title = prompt("Ingrese el título de la sección del cuestionario");
    HTML = HTML + "<h3>" + title + "</h3> \n"
    let value = "";
    let i = 1;
    let values = [];
    value = prompt("Ingrese el texto de la primera opción");
    while (value != null) {
        i++
        values.push(value)
        HTML = HTML + "<input type='checkbox' value='" + value + "'>" + value + " <br> \n"
        value = prompt("Ingrese el texto de la opción " + i);
    }
    cuestionarioSubsections.push(new cuestionarioSubsection("MC1", title, values));
    console.log(cuestionarioSubsections);

    alert(HTML);
}

function Textfield() {
    let title = prompt("Ingrese el título de la sección del textfield")
    HTML = HTML + "<h3>" + title + "</h3> \n"
    let value = "";

    cuestionarioSubsections.push(new cuestionarioSubsection("MC1", title, null));
    console.log(cuestionarioSubsections);


    HTML = HTML + "<input type='textfield' value='" + title + "'>" + title
     + " <br> \n"
    value = prompt("Ingrese el texto");

    alert(HTML);
}
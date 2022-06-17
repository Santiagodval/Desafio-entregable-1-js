inputType = parseInt(prompt("Ingrese el tipo de entrada que desea añadir al cuestionario(escribir el número correspondiente): \n 1-Multiple choice sin repetición \n 2-Multiple choice con repetición \n 3-Textfield"));
let HTML = "";

while(inputType!=null){
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
}


function MC1() {
    HTML = HTML + "<h3>" + prompt("Ingrese el título de la sección del cuestionario") + "</h3> \n"
    let valor = "";
    valor = prompt("Ingrese el texto de la primera opción");
    while (valor != null) {

        HTML = HTML + "<input type='radio' value='" + valor + "'>" + valor + " <br> \n"
        valor = prompt("Ingrese el texto de la primera opción");
    }

    alert(HTML);
}

function MC2() {
    HTML = HTML + "<h3>" + prompt("Ingrese el título de la sección del cuestionario") + "</h3> \n"
    let valor = "";
    valor = prompt("Ingrese el texto de la primera opción");
    while (valor != null) {

        HTML = HTML + "<input type='checkbox' value='" + valor + "'>" + valor + " <br> \n"
        valor = prompt("Ingrese el texto de la primera opción");
    }

    alert(HTML);
}

function Textfield() {
    HTML = HTML + "<h3>" + prompt("Ingrese el título de la sección del textfield") + "</h3> \n"
    let valor = "";

    HTML = HTML + "<input type='textfield' value='" + valor + "'>" + valor + " <br> \n"
    valor = prompt("Ingrese el texto de la primera opción");

    alert(HTML);
}
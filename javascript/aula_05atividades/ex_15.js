let num1 = 63;
let num2 = 67;
let operador = "/";

switch (operador) {
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        if (num2 !== 0) {
            console.log(num1 / num2);
        } else {
            console.log("Divisão por zero não permitida");
        }
        break;
    default:
        console.log("Operador invalido");
}
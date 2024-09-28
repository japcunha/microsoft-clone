//lógica de programação
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
function obterInteiro(valor) {
    do {
        valor = readline.question("digite um valor(inteiro): ")
    } while (!isNaN(valor) || !Number.isInteger(isNaN(valor)));
    return valor;

}
readline.question("digite o primeiro valor: ", valor1 => {

    readline.question("digite o segundo valor: ", valor2 => {

        let Soma = Number(valor1) + Number(valor2);

        console.log(`o resultado é: ${Soma}`);
        readline.close();
    });

});


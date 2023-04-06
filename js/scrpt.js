//ler e imprimir em relação a 10
var num = prompt("Informe um Número e direi se é maior, menor ou igual a 10:","Digite Aqui");
if(num<10){
    document.writeln("O número digitado "+num+" é menor que 10!");
} else if(num>10){
    document.writeln("O número digitado "+num+" é maior que 10!");
} else{
    document.writeln("O número digitado é igual a 10!");
}

//soma entre os valores
alert("SOMA!");
var val1 = parseInt(prompt("Digite um valor: "));
var val2 = parseInt(prompt("Digite outro valor: "));
document.write("<br><br> A soma entre "+val1+" e "+val2+" é igual a: "+(val1+val2));

//operações
alert("OPERAÇÃO");
var num1 = parseInt(prompt("Informe o primeiro valor: "));
var num2 = parseInt(prompt("Informe o segundo valor: "));
var op = prompt("Selecione a operação desejada: ' + ', ' - ', ' * ', ' / '");
switch(op){
    case '+':
        document.write("<br><br>"+num1+" + "+num2+" = "+(num1+num2));
        break;
    case '-':
        document.write("<br><br>"+num1+" - "+num2+" = "+(num1-num2));
        break;
    case '*':
        document.write("<br><br>"+num1+" * "+num2+" = "+(num1*num2));
        break;
    case '/':
        document.write("<br><br>"+num1+" / "+num2+" = "+(num1/num2));
        break;
}

//nome multiplicado
alert("NOME");
var nome = prompt("Digite o nome: ");
var n = parseInt(prompt("Digite um número: "));
for(var i=1;i<=n;i++){
    document.write("<br>"+nome);
}
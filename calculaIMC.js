
/*
O código define uma variável para a altura e outra para o peso. Em seguida, ele define uma função chamada calculoImc que recebe a altura 
e o peso como argumentos. A função verifica se a altura e o peso são números e se foram fornecidos exatamente dois argumentos. Em seguida,
 ela calcula o IMC dividindo o peso pela altura ao quadrado e retorna o valor do IMC.

A função classificaImc é definida a seguir. Ela recebe o IMC como argumento e verifica se ele é um número e se foi fornecido um argumento. 
Em seguida, ela classifica o IMC em uma das categorias mencionadas anteriormente, utilizando uma série de declarações if e else if. Por fim, 
o código chama a função classificaImc com o resultado do cálculo do IMC e imprime a categoria em que a pessoa se enquadra.

*/




let altura = 1.64
let peso = 78


function calculoImc (altura,peso){
    if (typeof altura !== "number" || typeof peso !== "number"){
        throw new Error ("Somente números são permitidos")
    }
    else if (arguments.length !== 2){
        throw new Error ("É necessário passar parâmetro")
    }
    else{
        let imc = peso/(altura*altura)
        return imc
    }
    
}

function classificaImc(imc){
    if (typeof imc !== "number"){
        throw new Error ("Somente números")
    }
    else if(arguments.length < 1){
        throw new Error ("É necessário passar parâmetro")
    }
    else if  (imc<17){
        return "Muito abaixo do peso";
    }
    else if (imc<18.5) {
        return "abaixo do peso";
    }
    else if (imc<25){
        return "Peso normal";
    }
    else if (imc<30){
        return "Acima do peso";
    }
    else if (imc<35){
        return "Obesidade grau I";
    }
    else if (imc<41){
        return "Obesidade grau II";
    }
    else{
        return "Obesidade grau III";
        }
}



console.log(classificaImc(calculoImc(altura,peso)))
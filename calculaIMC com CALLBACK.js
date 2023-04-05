
/*
Esse código é uma função chamada "calculoImc" que calcula o índice de massa corporal (IMC) com base na altura e peso passados como parâmetros. 
Ele também recebe uma função de retorno de chamada (callback) como parâmetro, que é usada para retornar o resultado do cálculo e a classificação do IMC.

O IMC é calculado dividindo o peso (em kg) pela altura (em metros) ao quadrado. A função começa verificando se os parâmetros altura e peso são do tipo número. 
Se um ou ambos os parâmetros não forem um número, a função lançará um erro com a mensagem "Somente números são permitidos". Caso contrário, 
a função prossegue para calcular o IMC.

Depois que o IMC é calculado, a função compara seu valor com diferentes limites pré-definidos para determinar a classificação do IMC. 
Se o valor do IMC estiver abaixo de 17, a classificação será "Muito abaixo do peso". 
Se o valor estiver entre 17 e 18,5, a classificação será "Abaixo do peso". 
Se o valor estiver entre 18,5 e 25, a classificação será "Peso normal". etc.


Por fim, a função retorna o valor do IMC e a classificação, usando a função de retorno de chamada que foi passada como parâmetro.

*/






function calculoImc (altura,peso,cb){
    if (typeof altura !== "number" || typeof peso !== "number"){
        throw new Error ("Somente números são permitidos")
    }
    else if (arguments.length < 3){
        throw new Error ("É necessário passar parâmetro")
    }
    else{
        let imc = peso/(altura*altura)


        if  (imc<17){
            return cb(imc,"Muito abaixo do peso");
        }
        else if (imc<18.5) {
            return cb(imc,"abaixo do peso");
        }
        else if (imc<25){
            return cb(imc,"Peso normal");
        }
        else if (imc<30){
            return cb(imc,"Acima do peso");
        }
        else if (imc<35){
            return cb(imc,"Obesidade grau I");
        }
        else if (imc<41){
            return cb(imc,"Obesidade grau II");
        }
        else{
            return cb(imc,"Obesidade grau III");
            }
    }
    
}


let altura = 1.64
let peso = 78
calculoImc(altura,peso, (imc, classificacao)=> console.log (imc.toFixed(2), classificacao));
/* calcula a média de um conjunto de números passados como argumentos para a função media(), 
e se não houver argumentos, retorna 0. Se houver algum argumento que não seja um número, a função lançará um erro.

Observe que, neste exemplo, media() é chamada sem nenhum argumento. 
Portanto, o valor de arguments será um objeto vazio e a função retornará 0 porque arguments.length é menor que 1. 
Se você deseja calcular a média de um conjunto de números, você precisa passá-los como argumentos para a função media(). 
Por exemplo: console.log(media(1, 2, 3))*/

function media (){
    console.log(arguments)
    let soma = 0
    
    if (arguments.length < 1){
        return 0
    }

    else{
    for (let i=0;i<arguments.length;i++){
        if (typeof arguments[i] !== "number"){
            throw new Error ("Todos os parametros devem ser numeros.")
         }
        soma+=arguments[i];
    }
    }
    let media=soma/arguments.length

    return media
}

console.log (media())
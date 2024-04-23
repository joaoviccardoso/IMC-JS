function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}   

function mensagemNaTela(){
    exibirTexto('.titulo__imc', 'Calculadora IMC');
}

mensagemNaTela()

function calcularImc(){
    let massa = document.querySelector('.peso').value;
    let altura = document.querySelector('.altura').value
    
    let valorIMC = (massa  / (altura * altura)).toFixed(2);

    if (valorIMC <= 18.5){
        exibirTexto('#IMC__aviso','voce esta abaixo do peso')
    } else if ( valorIMC >= 18.6 && valorIMC <= 24.9){
        exibirTexto('#IMC__aviso','Peso ideal (parabéns)')
    } else if ( valorIMC >= 25.0 && valorIMC <= 29.9){
        exibirTexto('#IMC__aviso','Levemente acima do peso')
    } else if ( valorIMC >= 30.0 && valorIMC <= 34.9){
        exibirTexto('#IMC__aviso','Obesidade grau 1')
    } else if ( valorIMC >= 35.0 && valorIMC <= 39.9){
        exibirTexto('#IMC__aviso','obesidade grau 2 (severa)')
    } else if ( valorIMC >= 40){
        exibirTexto('#IMC__aviso','obesidade 3 (mórbida)')
    }


    let mensagemImc = (`${valorIMC}`);
    exibirTexto('#IMC', mensagemImc);
}

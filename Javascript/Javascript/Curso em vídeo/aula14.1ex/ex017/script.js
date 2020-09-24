function gerarTabuada(){
    let i = 1;
    let h1 = window.document.querySelector('h1#h1T');
    let botao = window.document.querySelector('input#gerarTabuada');
    let selectDaTabuada = window.document.getElementById('selectTabuada'); 
    let resultado = window.document.querySelector('div.resultado');
    var valueOfInputNumber = window.document.querySelector('input#numero');

    
    if(valueOfInputNumber.value.length == 0){
        window.alert('[ERRO:404]: Digite um número, porfavor!');
    }else{
        let number = Number(valueOfInputNumber.value);
        selectDaTabuada.innerHTML = "";

        while(i <= 12)
        {
            let newOption = window.document.createElement('option');
            newOption.text = `${number} x ${i} = ${number * i}`;
            newOption.value = `tab${c}`;
            selectDaTabuada.appendChild(newOption);
            i++;
        }
        i = 1;
    }
}


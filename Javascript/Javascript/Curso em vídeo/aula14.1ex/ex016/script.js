var inicio = window.document.getElementById('inicio');
var fim = window.document.getElementById('fim');
var resultado = window.document.querySelector('div#resultado');
var passo = window.document.getElementById('passo');

function main() {
     validarCampos();
}

function contar() {
    resultado.innerHTML = '';
    var i = Number(inicio.value);
    var f = Number(fim.value);
    var p = Number(passo.value);
    var imagem = document.createElement('img');
    imagem.setAttribute('id', 'emoji');

    if(p <= 0){
        window.alert('Passo inválido! Considerando {[Passo]: 1}');
        passo.value = 1;
    }

   /*  resultado.innerHTML += `\u{1F449}, \u{1F3C1}`; //Emojis Unicode */
   if(i < f){
        for (var c = i; c <= f; c += p) {   

            resultado.innerHTML += `${c} &nbsp;&nbsp;&nbsp;`;

            if(c == i){
                imagem.setAttribute('src', 'vai_48px.png');
                resultado.appendChild(imagem);
            }
            else if(c <= f)
            {
                imagem.setAttribute('src', 'Right_48px.png');
                resultado.appendChild(imagem);
            }
        }
    }
    else{
        for (var c = i; c >= f; c -= p) {   

            if(c == i){
                imagem.setAttribute('src', 'vai_48px.png');
                resultado.appendChild(imagem);
            }
            else if(c <= i)
            {
                imagem.setAttribute('src', 'Right_48px.png');
                resultado.appendChild(imagem);
            }

            resultado.innerHTML += `${c} &nbsp;&nbsp;&nbsp;`;
        }
    }

    imagem.setAttribute('src', 'Fim_48px.png');
    resultado.appendChild(imagem);    
}

function validarCampos(){
 
    resultado.innerHTML = ''; 
    if ((inicio.value.length == 0) || (fim.value.length == 0) || (passo.value.length == 0)){
        resultado.innerHTML += 'Impossível contar!';
    }else{
        contar();
    }
}
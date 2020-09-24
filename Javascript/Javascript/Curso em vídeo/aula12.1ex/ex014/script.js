
/* document.body.addEventListener('onload', carregar); -> Porque não funciona.*/

function carregar(){
    var mensagem = window.document.getElementById('mensagem');
    var imagem = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    mensagem.innerHTML = `Agora são ${hora} horas`;

    if((hora >= 0) && (hora < 12)){
        imagem.src = 'morning.jpg';
        document.body.style.background = 'rgb(0, 142, 242)';
    }else if ((hora >= 12) && (hora < 18)){ 
        imagem.src = 'afternoon.jpg';
        document.body.style.background = 'rgb(195, 155, 94)';
    }
    else{
        imagem.src = 'nigth.jpg';
        document.body.style.background = 'rgb(5, 36, 59)';
    }
}

/* var botao = window.document.querySelector('input#botao');
botao.addEventListener('onclick', verificar); */

function verificar() {
   var data = new Date();
   var anoActual = data.getFullYear();
   var anoDigitado = window.document.getElementById('textoAno');
   var resultado = window.document.querySelector('div#resultado');

   if((anoDigitado.value.length == 0) || (anoDigitado.value > anoActual)){
      window.alert('[ERRO]: Verifique os dados e tente novamente');
   }else{
      var sexo = window.document.getElementsByName('radioSexo');
      var idade = anoActual - anoDigitado.value;
      var genero = '';
      var imagem = document.createElement('img');
      imagem.setAttribute('id', 'fotografia');

      imagem.style.width = '250px';
      imagem.style.height = '250px';
      imagem.style.borderRadius = '100%';
      
      if(sexo[0].checked){
         genero = 'Homem';

         if((idade >= 0) && (idade < 10)){
            /* Crianca */
            imagem.setAttribute('src', 'homem1.jpg');
         }else if(idade < 21){
            /* Jovem */
            imagem.setAttribute('src', 'homem2.jpg');
         }else if(idade < 50){
            /* Adulto */
            imagem.setAttribute('src', 'homem3.jpg');
         }
         else{
            /* Idoso */
            imagem.setAttribute('src', 'homem4.jpg');
         }
      }
      else if(sexo[1].checked){
         genero = 'Mulher';

         if((idade >= 0) && (idade < 10)){
            /* Crianca */
            imagem.setAttribute('src', 'mulher1.jpg');
         }else if(idade < 21){
            /* Jovem */
            imagem.setAttribute('src', 'mulher2.jpg');
         }else if(idade < 50){
            /* Adulta */
            imagem.setAttribute('src', 'mulher3.jpg');
         }
         else{
            /* Idosa */
            imagem.setAttribute('src', 'mulher4.jpg');
         }
      }
      
      resultado.style.textAlign = 'center';
      resultado.innerHTML =  `Detectamos ${genero} com ${idade} anos.`;
      resultado.appendChild(imagem);
   }

}
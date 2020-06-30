var idade = 66;

console.log(`Voce tem ${idade} de idade.`);
if (idade < 16){
    console.log(`Nao vota`);
}else if(idade < 18 || idade > 65){
    console.log(`Voto opcional`);
}else{
    console.log(`Voto obrigatorio`);
}
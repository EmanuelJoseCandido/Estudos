var xhr = new XMLHttpRequest();


xhr.open('GET', 'https://api.github.com/users/EmanuelJoseCandido');
xhr.send(null);

xhr.onreadystatechange = function () {
    if(xhr.readyState === 4){
        //console.log(JSON.parse(xhr.responseText));
        var array = JSON.parse(xhr.responseText);
        var box = document.querySelector('.box');
        var p = document.createElement('p'); 
        var text = '';

        p.innerHTML = `Your name is:  ${array.name} <br><br>You livi in: ${array.location}`;

        box.appendChild(p);

        console.log(array);

    }
}


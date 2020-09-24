var ulElement = document.querySelector('.box ul');
var inputElement = document.querySelector('.box .inputs input');
var buttonElement = document.querySelector('.box .inputs button');

var allLearn = JSON.parse(localStorage.getItem('list_learn')) || [];

function renderLearn(){
    ulElement.innerHTML = '';

    allLearn.forEach(element => {
        var liElement = document.createElement('li');
        liElement.textContent = element + ' - ';
        

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        linkElement.textContent = 'Delete';

        
        var position = allLearn.indexOf(element);
        linkElement.setAttribute('onclick', 'deleteLearn('+ position + ')');

    
        liElement.appendChild(linkElement);
        ulElement.appendChild(liElement);
    });

}

function deleteLearn(position){
    allLearn.splice(position, 1);
    renderLearn();
    saveToStorage();
}

buttonElement.onclick = function addLearn() {
    if(inputElement.value.length != 0){
        allLearn.push(inputElement.value);
        inputElement.value = '';
        renderLearn();
        saveToStorage();
    }else{
        alert('Insert text in input please.');
    }
}

function saveToStorage(){
    localStorage.setItem('list_learn', JSON.stringify(allLearn));
}


renderLearn();
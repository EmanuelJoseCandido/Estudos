var valuesArrays = [];

//Function main for buttin add
function addValues() {
    var selectNumbers = window.document.getElementById('selectNumbers');
    var number = window.document.getElementById('number');

    if(validateAddValues(Number(number.value))){
        if(number.value.length != 0){
            let alterNumber = Number(number.value)
            valuesArrays.push(alterNumber);
            selectNumbers.appendChild(addInSelect(alterNumber));
        }else{
            alert(`Insert one number please.`);
        }
    }
    else{
        alert(`This number already add.`)
    }
}

function validateAddValues(number) {
    if(valuesArrays.indexOf(number) == -1){
        return true;
    }
    else{
        return false
    }
}

//Function main for button finish
function showResult() {
    var text = window.document.getElementsByClassName('text')[0];
    if(valuesArrays.length != 0){
        text.innerHTML = 
                        `Add ${valuesArrays.length} numbers <br>
                        The big number is ${bigNumber()} <br>
                        The small number is ${smallNumber()} <br> 
                        The sum of all numbers is ${toAddUpOfAllNumbers()} <br>
                        The average is ${average()}`;
    }
    else{
        alert(`Add number before finished.`);
    }
}

//Function for search the small number
function average() {
    return toAddUpOfAllNumbers() / valuesArrays.length;
}

//Function for search the big number
function bigNumber() {
    var big;

    for (let i = 0; i < valuesArrays.length; i++) {
        if (i == 0) {
           big = valuesArrays[i]; 
        }
        else if(valuesArrays[i] > big){
            big = valuesArrays[i];
        }  
    }
    return big;
}

//Function for search the small number
function smallNumber() {
    var small;
    for (let i = 0; i < valuesArrays.length; i++) {
        if (i == 0) {
            small = valuesArrays[i]; 
        }
        else if(valuesArrays[i] < small){
            small = valuesArrays[i];
        }  
    }
    return small;
}

//Function for to add up
function toAddUpOfAllNumbers() {
    var sum = 0;
    for (let i = 0; i < valuesArrays.length; i++) {
        sum += valuesArrays[i]; 
    }
    return sum;
}

//Function for add the option in select
function addInSelect(number) {
    let item = window.document.createElement('option');
    item.text = `Value ${number} add.`;
    return item;
}

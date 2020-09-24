var myPromise = function () {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.covid19api.com/summary');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                }
                else{
                    reject('Error in the requisition');
                }
            }
        }
    })
    
}

myPromise()
    .then(function(response){
        var box = document.querySelector('.box');
        var text = '';
        var paragraph = document.createElement('p');
        
        /* text += `<br>Confirmed: ${response.Global.TotalConfirmed}`; 
        text += `<br>Deaths: ${response.Global.TotalRecovered}`;
        text += `<br>Recovered: ${response.Global.TotalDeaths}`;
        var totalActive = response.Global.TotalConfirmed - (response.Global.TotalDeaths + response.Global.TotalRecovered);
        text += `<br>Active: ${totalActive}`;

        paragraph.innerHTML = text; */
        
       
        box.appendChild(paragraph);
        for (let i = 0; i < response.Countries.length; i++) {
            var country = response.Countries[i].Country;
            var countryCode = response.Countries[i].CountryCode;
            var totalConfirmed = response.Countries[i].TotalConfirmed;
            var totalDeaths = response.Countries[i].TotalDeaths;
            var totalRecovered = response.Countries[i].TotalRecovered;
            var totalActive = totalConfirmed - (totalRecovered + totalDeaths);
            var text = ''; 
            var container = document.createElement('div');
            text += `<p>${country} - ${countryCode}</p>`;
            text += `<p>Confirmados: ${totalConfirmed}</p>`;
            text += `<p>Recuperados: ${totalRecovered}</p>`;
            text += `<p>Óbitos: ${totalDeaths}</p>`;
            text += `<p>Ativos: ${totalActive}</p>`;

            container.innerHTML = text;
            box.appendChild(container);
        }
    })
    .catch(function(reject){
        console.warn(reject);
    });
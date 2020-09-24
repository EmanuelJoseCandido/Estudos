axios.get('https://api.github.com/users/EmanuelJoseCandido')
    .then(function(response){
        //console.log(response.data.avatar_url);
        console.log(response);
    })
    .catch(function(reject){
        console.warn(reject);
    })
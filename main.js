var getlocation = "";
function checkweather()
 {
    var location = document.querySelector("#cityname").value;
    getlocation = location;
    let searchURL = "http://localhost:3000/" + location;
    fetch(searchURL)
    .then(function(response){
        return response.json();
    })
    .then(function(result){
        displayLocationResult(result);
    })
    .catch(function(error){
        console.log(error.message);
    });
}   
    
function displayLocationResult(result){
    let msgDiv = document.querySelector("#message");
    let div = document.querySelector("#result");
    
    console.log(result);
    
}

    

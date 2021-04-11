let userIP = "";
let userLat = 0;
let userLon = 0;

//gets the users ip then passes that data the findLocation function
const getLocation = function(){
    fetch("https://api.ipify.org/?format=json").then(function(response) {
        if(response.ok){
            response.json().then(function(data){
                userIP = data.ip 

                //uses ip address to get physical location data
                return fetch("https://ipapi.co/" + userIP + "/json")
            }).then(function(response){
                if(response.ok){
                    response.json().then(function(data){
                        //save location data for future use
                        userLat = data.latitude;
                        userLon = data.longitude;
                        console.log(userLat, userLon)
                    });
                }
            });
        }
    })
};

$(".direc-btn").on('click', function(){
    //get restaurant location
    //restaurant api
    let address = this.value;
    console.log(address)
    
    fetch(`/api/directions/${address}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
    .then(function(response) {
        if(response.ok) {
            response.json().then(function(data){
                fetch(data).then(function(response){
                    if(response.ok){
                        response.json().then(function(data){
                            const restLat = data.data[0].latitude;
                            const restLong = data.data[0].longitude;
                            console.log(restLat,restLong)
                        })
                    }
                })
            })
        }
    });
});

//directions api
/* let apiUrl = "https://api.tomtom.com/routing/1/calculateRoute/" + userLat + "," + userLon + ":" + parkLat + "," + parkLon + "/json?instructionsType=text&language=en-US&vehicleHeading=90&sectionType=traffic&travelMode=car&vehicleMaxSpeed=120&key=" + process.env.TOMTOM_API;

fetch(apiUrl).then(function(response){
    if(response.ok){
        response.json().then(function(data){
            //clear directions list to prevent duplicates
            let directionsList = $("#directionsList").empty()
            for(let i=0; i < data.routes[0].guidance.instructionGroups.length; i++){
                //create list item of each direction
                let direction = $("<li>").textContent = (i+1) + ") " + data.routes[0].guidance.instructionGroups[i].groupMessage + '<br>'
                directionsList.append(direction)
            }   
        });
    }
}); */


getLocation();
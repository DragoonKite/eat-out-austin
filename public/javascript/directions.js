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
                    });
                }
            });
        }
    })
};

$(".direc-btn").on('click', function(){
    //address stored in Model
    let address = this.value;
    
    //send address to get url for lat/lon fetch
    fetch(`/api/directions/${address}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
    .then(function(response) {
        if(response.ok) {
            response.json().then(function(data){
                //send url to get lat/lon
                fetch(data).then(function(response){
                    if(response.ok){
                        response.json().then(function(data){
                            const restLat = data.data[0].latitude;
                            const restLong = data.data[0].longitude;
                            //send usr&restaurant lat/lon to get url fro directions
                            fetch(`/api/directions/latlon/${restLat},${restLong},${userLat},${userLon}`, {
                                method: 'GET',
                                headers: {'Content-Type': 'application/json'}
                            }).then(function(response) {
                                if(response.ok) {
                                    response.json().then(function(data) {
                                        //send url to api to get directions
                                        fetch(data).then(function(response) {
                                            if(response.ok){
                                                response.json().then(function(data){
                                                    //parse out data and pull out higher level direction group
                                                    let iGroups = data.routes[0].guidance.instructionGroups
                                                    console.log(iGroups)
                                                    iGroups.forEach(instruction => {
                                                        console.log(instruction.groupMessage)
                                                    });
                                                })
                                            }
                                        })
                                    })
                                }
                            })
                        })
                    }
                })
            })
        }
    });
});

/*
    //clear directions list to prevent duplicates
    let directionsList = $("#directionsList").empty()
    for(let i=0; i < data.routes[0].guidance.instructionGroups.length; i++){
        //create list item of each direction
        let direction = $("<li>").textContent = (i+1) + ") " + data.routes[0].guidance.instructionGroups[i].groupMessage + '<br>'
        directionsList.append(direction)
    }   
 */


getLocation();
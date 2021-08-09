import PARKS_API_KEY from "./apikey.js";

console.log('huh');

function onGenerateClick(){
    $('#generate-btn').click(e => {
        console.log(e);
        console.log('clicked!')
        callAPI()
    });
}

function callAPI(){
    console.log('api key: ' + PARKS_API_KEY);
    fetch(`https://developer.nps.gov/api/v1/parks?&api_key=${PARKS_API_KEY}`)
        .then(response => response.json())
        .then(res => {
            randomizePark(res);
        })
        .catch(err => console.log(err));
    console.log('fetch done')
}

function randomizePark(parks){
    console.log("------------ parks ------------")
    let parksArr = parks.data;
    let randomPark = parksArr[Math.floor(Math.random()*parksArr.length)];
    displayPark(randomPark);
}

function displayPark(parkGenerated){

    $("#generate-btn").html("another one!");
    let parkName = parkGenerated.fullName;
    let parkDesc = parkGenerated.description;
    let images = parkGenerated.images;
    let imgUrl = images.map(img => {
         return `<img src="${img.url}" height="150px" class="col"/>`;
    });
    $('#park-container').html("");
    $('#park-container').append(`
        <h2>${parkName}</h2>
        <p>${parkDesc}</p>
        <div class="container">${imgUrl}</div>
    `)

}

onGenerateClick();

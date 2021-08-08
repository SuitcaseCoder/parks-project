import PARKS_API_KEY from "./js/apikey";

console.log('huh');

function onGenerateClick(){
    $('#generate-btn').click(e => {
        console.log('clicked!')
        callAPI()
    });
}

function callAPI(){
    console.log('api key: ' + PARKS_API_KEY);
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=${PARKS_API_KEY}`)
        .then(response => response.json())
        .then(res => console.log(res))
        .catch(err => console.log(err));
    console.log('fetch done')
}


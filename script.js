let button = document.getElementsByTagName('button')[0];

let img = document.getElementsByTagName('img')[0];

const URL = 'https://api.thecatapi.com/v1/images/search'

function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

async function foo() {
    try {
        console.log('click')

        if(img.complete)
        {
        let response = await fetch(URL);
        let data = await response.json();
        img.src=data[0].url;
        }
    
    }
    catch
    {
        console.error('2381705');
    }
}

button.onclick=()=>{
    foo();
}

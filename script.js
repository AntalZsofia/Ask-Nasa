
//the sites we need the data from
const url = 'https://api.nasa.gov/planetary/apod?api_key=';
const apiKey = config.NASA_API_KEY;

const urlArchive = 'https://apod.nasa.gov/apod?api_key=';


//setting up the site
const root = document.getElementById('root');
const mainElement = document.createElement('main');
mainElement.classList.add('container');
root.appendChild(mainElement);

const h1Element = document.createElement('h1');
h1Element.textContent = 'NASA Picture of the Day';
h1Element.classList.add('container')
root.appendChild(h1Element);


//getting the Data
async function fetchData(url) {
    try {
        const response = await fetch(`${url}${apiKey}`)
        const data = await response.json()
        console.log('NASA APOD Data', data)
        displayData(data)
    }
    catch (error) {
        console.log(error);
    }
}


//functin to load the data on the site
function displayData(data) {
    root.appendChild(h1Element)

    const h2Element = document.createElement('h2');
    h2Element.textContent = data.title;
    h2Element.classList.add('container')
    root.appendChild(h2Element);

    const pElement = document.createElement('p');
    pElement.textContent = data.date;
    pElement.classList.add('container');
    root.appendChild(pElement);
    
    
    const sectionElement = document.createElement('section');
    sectionElement.classList.add('picture-explanation-container');
    root.appendChild(sectionElement);
    
    
    const imgElement = document.createElement('img');
    imgElement.src = data.hdurl;
    imgElement.id = 'picture';
    sectionElement.appendChild(imgElement);
    
    const p2Element = document.createElement('p');
    p2Element.textContent = data.explanation
    p2Element.id = 'explanation'
    sectionElement.appendChild(p2Element)
    
    mainElement.appendChild(inputElement)
}

fetchData(url);

//get an image from the Archive Data
const inputElement = document.createElement('input')
inputElement.type = 'date';
inputElement.id = 'input';
mainElement.appendChild(inputElement);



inputElement.addEventListener('change', event => {
    const value = event.target.value;
    root.innerHTML = '';
    fetcArchiveData(value);

})

async function fetcArchiveData(value) {
    try {
        const response = await fetch(`${url}${apiKey}&date=${value}`)
        const data = await response.json()
        console.log('NASA APOD Archive Data', data)
        displayData(data)
    }
    catch (error) {
        console.log(error);
    }
}
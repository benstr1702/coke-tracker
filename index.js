
document.addEventListener("DOMContentLoaded", () => {
  const jsonData = {"Finland": 2.47, "Denmark": 2.39, "Norway": 2.38, "Israel": 2.23, "Australia": 2.08, "New-Zealand": 2.06, "Ireland": 2.04, "United-Kingdom": 1.95, "Sweden": 1.82, "Italy": 1.54, "Netherlands": 1.46, "Switzerland": 1.46, "Canada": 1.44, "South-Korea": 1.39, "Austria": 1.39, "France": 1.38, "Puerto-Rico": 1.29, "Uruguay": 1.29, "Belgium": 1.23, "Germany": 1.23, "Luxembourg": 1.23, "Costa Rica": 1.22, "Latvia": 1.18, "Hong-Kong": 1.15, "Cyprus": 1.14, "Czech-Republic": 1.13, "Chile": 1.12, "Macao": 1.11, "Spain": 1.1, "Singapore": 1.09, "Portugal": 1.08, "Lithuania": 1.07, "Japan": 1.04, "Saudi-Arabia": 1.04, "Greece": 1.02, "Kazakhstan": 0.98, "Hungary": 0.98, "Slovakia": 0.96, "United-Arab-Emirates": 0.95, "Argentina": 0.89, "Poland": 0.89, "Qatar": 0.88, "South-Africa": 0.87, "Bulgaria": 0.87, "Guatemala": 0.85, "Romania": 0.85, "Slovenia": 0.85, "Oman": 0.82, "Panama": 0.79, "Uganda": 0.77, "USA": 0.76, "Paraguay": 0.74, "Bolivia": 0.72, "Peru": 0.72, "Colombia": 0.71, "Russia": 0.71, "Serbia": 0.71, "Mexico": 0.66, "Belarus": 0.63, "Dominican-Republic": 0.62, "Brazil": 0.6, "Morocco": 0.6, "Ecuador": 0.59, "Angola": 0.59, "Zambia": 0.59, "Ghana": 0.56, "Bahrain": 0.56, "Thailand": 0.56, "Jordan": 0.55, "Malaysia": 0.54, "Azerbaijan": 0.51, "Ukraine": 0.48, "Turkey": 0.47, "Ivory-Coast": 0.46, "Kenya": 0.46, "Uzbekistan": 0.44, "Tanzania": 0.43, "Sri-Lanka": 0.42, "Philippines": 0.41, "Tunisia": 0.4, "Nigeria": 0.38, "Indonesia": 0.38, "Vietnam": 0.38, "Burma-Myanmar": 0.36, "China": 0.36, "Kuwait": 0.36, "Bangladesh": 0.32, "India": 0.32, "Pakistan": 0.23, "Iran": 0.21, "Egypt": 0.18};
  const keys = Object.keys(jsonData).map(key => key.toUpperCase());
  const price = Object.values(jsonData);
  const searchBar = document.getElementById('search-bar');
  const searchButton = document.getElementById('search-button');
  const cardText = document.getElementById('card-text');

  // disable button by default
  searchButton.disabled = true;
   
  // enable button if user inputs more than 4 letters
  searchBar.addEventListener('input', () => {
    searchButton.disabled = searchBar.value.length < 4;
  });


  //use flag api to get 

  // add event that listens to button click
  searchButton.addEventListener('click', async () => {
    const searchTerm = searchBar.value.toUpperCase();

    const index = keys.indexOf(searchTerm);
    if (index !== -1) {
      document.getElementById('warning').style.display = 'none';
      //console.log(`The price of coke in ${searchTerm} is ${price[index]} $`);
    } else {
      document.getElementById('warning').style.display = 'block';
    }

    try {
      const response = await fetch('https://flagcdn.com/en/codes.json');
      const countryCodes = await response.json();
      const flagImage = document.getElementById('flag-image');
      
      for (const key in countryCodes){
        if (countryCodes[key].toUpperCase() === searchTerm){
          console.log(`found it , the code is ${key}`)
          flagImage.src = `https://flagcdn.com/w160/${key}.png` ; 
          flagImage.srcset = `https://flagcdn.com/w320/${key}.png 2x`
        }
       }
    
      
     
        
      

    } catch (error) {
      console.error('Error fetching country codes:', error);
    }
  });

  searchBar.addEventListener('keydown', event => {
    if (event.keyCode === 13) {
      event.preventDefault();
      searchButton.click();
    }
  });
});
const allCountries = () => {
      fetch('https://restcountries.com/v2/all')
            .then(res => res.json())
            .then(data => displayCountries(data));
}

const displayCountries = countries => {
      console.log(countries);
      const allCountriesHTML = countries.map(country => getCountryHTML(country));
      // console.log(allCountriesHTML)
      const container = document.getElementById('countries');
      container.innerHTML = allCountriesHTML.join(' ');
}

// Original 
// const getCountryHTML = country => {

//       return `
//             <div class="country">
//                   <h2> ${country.name} </h2>
//                   <img src="${country.flags.png}">
//             </div>
//       `
// }

// optional 1 
// const getCountryHTML = country => {

//       const { name, flags } = country;
//       return `
//             <div class="country">
//                   <h2> ${name} </h2>
//                   <img src="${flags.png}">
//             </div>
//       `
// }

// optional 2 
const getCountryHTML = ({ name, flags, area, region }) => {

      return `
            <div class="country">
                  <h2 title="This is ${name}"> ${name} </h2>
                  <p> Area: ${area}</p>
                  <p> Continet: ${region}</p>
                  <img src="${flags.png}">
            </div>
      `
}

allCountries();
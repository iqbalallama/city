const loadCountry =() =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountry(data))
}
loadCountry();
const displayCountry =(count)=>{
    const container = document.getElementById('countries');
    for(const all of count){
        const div = document.createElement('div');
        div.classList.add('rom')
        div.innerHTML=`
            <h3>${all.name}</h3>
            <p>${all.capital}</p>
            <button onclick="countryDetails('${all.name}')">Details</button>
        `;
        container.appendChild(div);
    }
}
const countryDetails =city=>{
    const url=`https://restcountries.eu/rest/v2/name/${city}`;
    fetch(url)
    .then(res =>res.json())
    .then(data =>details(data[0]));
}
const details = all =>{
    // console.log(country);
    const section = document.getElementById('country-detail');
    section.innerHTML=`
        <h4>Name: ${all.name}</h4>
        <p>Population : ${all.population}</p>
        <img width="250px" src="${all.flag}">
    `;

}
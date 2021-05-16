const input = document.querySelector('.search');
const listEl = document.querySelector('.ul');
input.focus();
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
fetch(endpoint)
    .then(blob=>blob.json())
    .then(result=>cities.push(...result))
    .catch(err=>console.log(err));
console.log(cities);
//on submit of the input
function onSubmit(){
  e.preventDefault();
  getList();
}

const findMatches=(val)=>{
  const regex = new RegExp(val,'gi');
  return cities.filter(place=>
         place.city.match(regex) || place.state.match(regex));
}

//format numbers
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// filter the cities
const getList = () => {

  const val = input.value;
  const placesList = findMatches(val);
  // console.log(placesList);
  const html = placesList
                   .map(place=>{
                     const regex = new RegExp(val,'gi');
                     const cityName = place.city.replace(regex, `<span class="hl">${val}</span>`);
                     const stateName = place.state.replace(regex, `<span class="hl">${val}</span>`);
                     console.log(stateName);
                     return (`<li>
                            <span>${cityName}, ${stateName}</span>
                            <span>${numberWithCommas(place.population)}</span>
                              </li>`);
                  }).join('');
  listEl.innerHTML = html;
}
input.addEventListener('change',getList);
input.addEventListener('keyup',getList);
import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;

export const refs = {
  input: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

refs.input.addEventListener(
  'input',
  debounce(e => {
    fetchCountries(e.target.value.trim());
  }, DEBOUNCE_DELAY)
);

//
//
//

// import './css/styles.css';
// import debounce from 'lodash.debounce';
// import { Notify } from 'notiflix';

// const DEBOUNCE_DELAY = 300;
// const NOTIFY_DELAY = 5000;

// const refs = {
//   input: document.querySelector('#search-box'),
//   countryList: document.querySelector('.country-list'),
//   countryInfo: document.querySelector('.country-info'),
// };

// function clearContryList() {
//   refs.countryList.innerHTML = '';
// }
// function clearContryInfo() {
//   refs.countryInfo.innerHTML = '';
// }

// refs.input.addEventListener(
//   'input',
//   debounce(e => {
//     fetchCountries(e.target.value.trim());
//   }, DEBOUNCE_DELAY)
// );

// function fetchCountries(name) {
//   return fetch(
//     `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
//   )
//     .then(response => {
//       return response.json();
//     })
//     .then(countryObj => {
//       if (countryObj.status === 404) {
//         Notify.failure(`OOps, there is no country with that name`, {
//           timeout: NOTIFY_DELAY,
//         });
//         clearContryList();
//         clearContryInfo();
//       } else if (countryObj.length > 10) {
//         Notify.info(
//           `Too many matches found. Please enter a more specific name.`,
//           { timeout: NOTIFY_DELAY }
//         );
//         clearContryList();
//         clearContryInfo();
//       } else {
//         createAllMarkup();
//       }
//       function createAllMarkup() {
//         if (countryObj.length > 1) {
//           const countryNamesListMarkup = countryObj
//             .map(
//               item =>
//                 `<li class = "country-item">
//                   <img class="country-flags"
//                   src=${item.flags.svg}
//                   alt=${item.name.official}
//                   width="20px"/>
//                 ${item.name.official}</li>`
//             )
//             .join('');
//           refs.countryList.innerHTML = countryNamesListMarkup;
//           clearContryInfo();
//         } else {
//           const countryInfoMarkup = countryObj
//             .map(
//               item =>
//                 `<p class="country-name">
//                     <img class="country-flag"
//                       src=${item.flags.svg}
//                       alt=${item.name.official}
//                       width="30px" height="20px"/>
//                   <h2>${item.name.official}</h2>
//                   </p>
//                   <p class="country-info">Capital: ${item.capital}</p>
//                   <p class="country-info">Population: ${item.population}</p>
//                   <p class="country-info">languages: ${Object.values(
//                     item.languages
//                   )}</p>`
//             )
//             .join('');
//           refs.countryInfo.innerHTML = countryInfoMarkup;
//           clearContryList();
//         }
//       }
//     })
//     .catch();
// }

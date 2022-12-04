import { createAllMarkup } from './createAllMarkup';
import { clearContryList } from './clearMarkup';
import { clearContryInfo } from './clearMarkup';
import { Notify } from 'notiflix';
const NOTIFY_DELAY = 5000;

export function fetchCountries(name) {
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
  )
    .then(response => {
      return response.json();
    })
    .then(countryObj => {
      if (countryObj.status === 404) {
        Notify.failure(`OOps, there is no country with that name`, {
          timeout: NOTIFY_DELAY,
        });
        clearContryList();
        clearContryInfo();
      } else if (countryObj.length > 10) {
        Notify.info(
          `Too many matches found. Please enter a more specific name.`,
          { timeout: NOTIFY_DELAY }
        );
        clearContryList();
        clearContryInfo();
      } else {
        createAllMarkup(countryObj);
      }
    })
    .catch();
}

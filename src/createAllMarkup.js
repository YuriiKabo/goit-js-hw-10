import { refs } from './index';
import { clearContryList } from './clearMarkup';
import { clearContryInfo } from './clearMarkup';

export function createAllMarkup(countryObj) {
  if (countryObj.length > 1) {
    const countryNamesListMarkup = countryObj
      .map(
        item =>
          `<li class = "country-item">
<img class="country-flags"
src=${item.flags.svg}
alt=${item.name.official}
width="30px" height="20px"/>
<p>${item.name.official}</p></li>`
      )
      .join('');
    refs.countryList.innerHTML = countryNamesListMarkup;
    clearContryInfo();
  } else {
    const countryInfoMarkup = countryObj
      .map(
        item =>
          `<div class="country-name"> 
<img class="country-flags"
src=${item.flags.svg}
alt=${item.name.official}
width="30px" height="20px"/>
<h2 class="title">${item.name.official}</h2></div>
<p class="country-info"><b>Capital:</b> ${item.capital}</p>
<p class="country-info"><b>Population:</b> ${item.population}</p>
<p class="country-info"><b>languages:</b> ${Object.values(item.languages)}</p>`
      )
      .join('');
    refs.countryInfo.innerHTML = countryInfoMarkup;
    clearContryList();
  }
}

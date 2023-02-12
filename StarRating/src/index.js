import _ from 'lodash';
import check from "./App.js";
function component() {
  const element = document.createElement('div');

  // Lodash, currently is included via a script, 
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.textContent= 'hello hello androo';
  return element;
}
document.body.appendChild(component());
document.body.appendChild(check());

import _ from 'lodash';
function component() {
  const element = document.createElement('div');

  // Lodash, currently is included via a script, 
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

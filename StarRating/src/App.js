import React from 'react';
import jsxobj from 'jsxobj';
import {FaStar} from 'react-icons/fa';

function StarRating(){
    return (<FaStar color = 'red' />);
}
function menu () {
    ReactDOM.render(
        // React.createElement('p', {className: 'Menu'}, 'Schrei nach Liebe')
       StarRating(), document.getElementById("WebPack"));
    }
export default function check (){  
return menu();
};


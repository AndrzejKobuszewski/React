import React from "react";
import Book from './Book.jsx';
import booksData from '../src/data/Books.json';
import codeLanguageToNumber from "./codeLanguageToNumber";


const Books = ({number=codeLanguageToNumber(), page={page}}) => 
<div className="libraryContainer" >
<div>
<h4>{booksData[0].recommendedBooksIntro[number]}</h4>
</div>
<div>
    

<article><Book/></article>
</div>
</div>
export default Books;
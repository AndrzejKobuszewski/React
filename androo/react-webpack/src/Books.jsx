import React from "react";
import data from '../src/data/VisitCardPageData.json';
import Book from './Book.jsx';
import booksData from '../src/data/Books.json';
import codeLanguageToNumber from "./codeLanguageToNumber";


const Books = ({number=codeLanguageToNumber(), page={page}}) => 
<>
<h3>{page}</h3>
<h4>{booksData[0].recommendedBooksIntro[number]}</h4>
<article><Book/></article>
</>
export default Books;
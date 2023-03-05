import React from "react";
import data from '../src/data/VisitCardPageData.json';
import Book from './Book.jsx';

const Books = () => 
<>
<h3>{data[0].menu[3]}</h3>
<h4>{data[0].recommendedBooksIntro}</h4>
<article><Book/></article>
</>
export default Books;
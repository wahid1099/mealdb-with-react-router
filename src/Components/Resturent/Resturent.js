import React, {useState} from 'react';
import Header from "../Header/Header";
import Meals from "../Meals/Meals";

const Resturent = () => {
 const [searchText,SetText]=useState('');

    const handlesearch=e=>{
        const searchtextValue=e.target.value;
       SetText(searchtextValue);
    }
    return (
        <div>
            <Header
              seractext={handlesearch}></Header>

            <Meals
               serchtext={searchText}></Meals>
        </div>
    );
};

export default Resturent;
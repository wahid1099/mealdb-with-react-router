import React, {useEffect, useState} from 'react';
import {Card, Col, Row} from "react-bootstrap";
import Meal from "./Meal";
import data from "bootstrap/js/src/dom/data";

const Meals = (props) => {

    const[meals,SetMeals]=useState([]);
    const searchtext=props.serchtext;
    useEffect(()=>{

        const url=`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchtext}`;

        fetch(url)
             .then(res=>res.json())
            .then(data=> SetMeals(data.meals));


    },[searchtext])
    return (
        <div>
            <Row xs={1} md={4} className="g-4 m-4">

                {
                    meals.map(meal=><Meal
                        key={meal.idMeal}
                    meal={meal}
                    >

                    </Meal>)
                }

                    {/*<Col>*/}
                    {/*    <Meal>*/}

                    {/*    </Meal>*/}
                    {/*</Col>*/}


            </Row>
            
        </div>
    );
};

export default Meals;
import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Button, Card} from "react-bootstrap";

const MealDetails = () => {
    const {mealid}=useParams();
    const [mealdetails,setMealDetails]=useState({});
    useEffect(()=>{
        const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`;
        fetch(url)
            .then(res=>res.json())
            .then(data=>setMealDetails(data.meals[0]));
    },[])

 console.log(mealdetails);
    return (
        <div>

            <h2 className="ml-4">MealDetailts id of meal : {mealdetails.idMeal}</h2>
            <div className="mx-auto w-25" >
            <Card style={{ width: '32rem' }}>
                <Card.Img variant="top" src={mealdetails.strMealThumb} />
                <Card.Body>
                    <Card.Title>Title: {mealdetails.strMeal}</Card.Title>
                    <Card.Text>
                        <h2> Instruction:</h2>  {mealdetails.strInstructions}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            </div>
        </div>
    );
};

export default MealDetails;
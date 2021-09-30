import React from 'react';
import {Button, Card, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const Meal = (props) => {
   // console.log(props.meal);
   const {strMeal, strMealThumb, strCategory,strInstructions,strTags,idMeal }=props.meal || {};
   const mealdetails=`/resturent/${idMeal}`;


    return (

            <Col>
            <Card>
                <Card.Img variant="top"  src={strMealThumb} />
                <Card.Body>
                    <Card.Title>Meal Name :{strMeal}</Card.Title>
                    <Card.Text>
                        Meal catogery : {strCategory}
                        <p>Tags : {strTags}</p>
                    </Card.Text>
                   <Link to={mealdetails}> <Button variant="primary">See details</Button></Link>
                </Card.Body>
            </Card>
            </Col>

    );
};

export default Meal;
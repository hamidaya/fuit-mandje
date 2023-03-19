import React from 'react';
import "./Button.css"
import Button from "./Button";

function Counter ({fruitCount, setFruitCount}) {

    return (
    <>
        <button
            className="button"
            type="button" onClick={() => setFruitCount(fruitCount +1)}>+</button>
        <p>{fruitCount}</p>
        <button className="button" type="button" disabled={fruitCount === 0} onClick={() => setFruitCount(fruitCount -1)}>-</button>
         </>

)};

export default Counter;


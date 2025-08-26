import React, {useEffect, useState} from "react";
import "./index.css";   

const data : { category: string, price: string, stocked: boolean, name: string  }[] =
             [
                { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
                { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
                { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
                { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
                { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
                { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
                ]
             ;

const Stock = () => {

    return (
        <>
        
        <div>
            <div>Name &nbsp; Price </div>
            <div> Fruits  </div>
             {data
             .filter ( (item) => item.category === "Fruits" ) 
             .map((item, index) => (
        <div key={index} className={item.stocked ? "instock padding"  : "outofstock padding"}>  {item.name} &nbsp; {item.price}</div>
      ))}
        </div></>
    );
}

export default Stock;
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

const [checked, setChecked] = useState(false);
const [ search, setSearch  ] = useState("");

const handleTextBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);     
  };

    // Filter function: checks stock based on checkbox
  const filterByStock = (item: typeof data[0]) => {
    return checked ? item.stocked : true;
  };

    return (
        <>
        <div className="padding-left-50">
            <input  type="text" onChange={handleTextBoxChange}></input>
        </div>
           <div className="padding-left-50">
      <label>
        <input type="checkbox" checked={checked} onChange={handleChange} />
       Only show products in stock
      </label>
     
    </div>

        <div>
            <div className="padding-left-100 font-bold">Name &nbsp; Price </div>
            <br></br>
            <div className="padding-left-100 font-bold"> Fruits  </div>
             {data
             .filter ( (item) => item.category === "Fruits" && filterByStock(item) ) 
             .map((item, index) => (
        <div key={index} className={item.stocked ? "instock padding-left-50"  : "outofstock padding-left-50"}>  {item.name} &nbsp; {item.price}</div>
      ))}

            <br></br>

        <div>
             <div className="padding-left-100 font-bold"> Vegetables  </div>
             {data
             .filter ( (item) => item.category === "Vegetables" && filterByStock(item) ) 
             .map((item, index) => (
        <div key={index} className={item.stocked ? "instock padding-left-50"  : "outofstock padding-left-50"}>  {item.name} &nbsp; {item.price}</div>
      ))}
        </div>

        </div>
      
        
        
        </>
    );
}

export default Stock;
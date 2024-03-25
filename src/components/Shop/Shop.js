import React from 'react';
import {useState, useEffect} from 'react';


const Shop = () => {
    const [data, setData] = useState(20);
  useEffect(()=>{

    fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
    .then(response => response.json())
    .then(json => setData(json))
    console.log(data);
    console.log(setData)
   

  }, []);

    return (
        <div>
           <h1>This is shop</h1> 
        </div>
    );
};

export default Shop;
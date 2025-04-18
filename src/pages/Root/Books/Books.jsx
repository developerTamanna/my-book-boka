import React, { useEffect, useState } from 'react';

const Books = () => {

    const [allBooks, setAllBooks]= useState([]);
       console.log(allBooks)
    useEffect(()=>{
      fetch('booksData.json').then(res=>res.json())
      .then(data=>setAllBooks(data))

    },[])
    return (
        <div>
            <h4>hello im books data</h4>
        </div>
    );
};

export default Books;
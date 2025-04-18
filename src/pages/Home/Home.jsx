import React from 'react';
import Banner from '../../components/Banner/Banner';
import Books from '../Root/Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
         <div>  <Banner></Banner>
         </div>
           <div>
            <Books
            data = {data}
            ></Books>
           </div>
        </div>
    );
};

export default Home;
import React from 'react';
import Banner from '../../components/Banner/Banner';
import Books from '../Root/Books/Books';

const Home = () => {
    return (
        <div>
         <div>  <Banner></Banner>
         </div>
           <div>
            <Books></Books>
           </div>
        </div>
    );
};

export default Home;
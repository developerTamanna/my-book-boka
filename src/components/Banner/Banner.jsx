import React from 'react';
import bookimage from '../../assets/books.jpg';

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen mt-10 rounded-md">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={bookimage}
            className="max-w-sm rounded-lg w-100 shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">books to freshen up your bookshelf!</h1>
            
            <button className="btn btn-primary">View the list</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;

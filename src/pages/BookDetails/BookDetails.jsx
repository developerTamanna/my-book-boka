import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDB } from '../../Utilities/addTODb';

const BookDetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id);

    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId);

    const { image, bookName, author, category, rating, tags,
        yearOfPublishing, publisher, totalPages, review } = singleBook;


        //button

const handleMarkAsRead =(id)=>{
    //store with id
    //where to store
    //array of collection
    //if book already exist show a alert
    //if book not exist then in the collection or array
    addToStoreDB(id)
}

    return (
<div className="w-4/5 mx-auto my-10 border-2 border-blue-300 p-6 rounded-xl flex gap-8">
{/* Book Image */}
<div className="flex justify-center items-center p-6 bg-white rounded-lg shadow-lg w-1/2 mx-auto">
    <div className="p-4 bg-gray-100 rounded-lg shadow-md flex-shrink-0">
        <img className="w-52 h-auto rounded-md" src={image} alt={bookName} />
    </div>
</div>

{/* Book Details */}
<div className="flex-1 space-y-3">
    <h2 className="text-2xl font-bold">{bookName}</h2>
    <p className="text-gray-600">By : <span className="font-medium">{author}</span></p>
    <p className="font-semibold text-gray-500">{category}</p>

    {/* Dynamic Review */}
    <div>
        <p><span className="font-bold">Review :</span> {review}</p>
    </div>

    {/* Dynamic Tags */}
    <div className="flex gap-2 my-2">
        {tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-green-100 text-green-700 rounded">#{tag}</span>
        ))}
    </div>

    {/* Other Book Info */}
    <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
        <p>Number of Pages: <span className="font-semibold">{totalPages}</span></p>
        <p>Publisher: <span className="font-semibold">{publisher}</span></p>
        <p>Year of Publishing: <span className="font-semibold">{yearOfPublishing}</span></p>
        <p>Rating: <span className="font-semibold">{rating}</span></p>
    </div>

    {/* Buttons */}
    <div className="flex gap-4 mt-4">
        <button onClick={()=>handleMarkAsRead(id)} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Read</button>
        <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">Wishlist</button>
    </div>
</div>
</div>
    );
};

export default BookDetails;

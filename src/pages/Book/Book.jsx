import React from 'react';
import { FaStar } from 'react-icons/fa';

const Book = ({ singleBook }) => {
    const { image, bookName, author, category, rating, tags,
        yearOfPublishing,publisher
    } = singleBook;

    return (
<div className="p-4">
<div className="border rounded-lg shadow-sm flex flex-col h-full p-2">

<figure className="h-60 flex items-center justify-center bg-gray-50 rounded-t-lg overflow-hidden">
<img 
src={image} 
alt="Book" 
className="h-full p-2 object-contain" 
/>
</figure>

<div className="p-4 flex-grow flex flex-col justify-between">
<div className="space-y-2">

<div className="flex gap-2 flex-wrap">
  {tags?.map((tag, index) => (
    <span 
      key={index} 
      className="bg-green-100 text-green-600 px-2 py-0.5 rounded-full text-xs"
    >
      {tag}
    </span>
  ))}
</div>

<div className=''>
    <div className='flex justify-between gap-2'>
    <h2 className="font-semibold text-lg">{bookName}</h2>
    <button className='border-1 px-1 rounded-full border-green-600 text-sm'>{
yearOfPublishing}</button>
    </div>
    <div className='flex justify-between items-center mt-4'>
  <p className="text-sm text-gray-500">By : {author}</p>

  {/* Vertical Line */}
  <div className="h-4 w-px bg-gray-400 mx-3"></div>

  <p className='text-sm text-gray-800'>Book by: {publisher}</p>
</div>
</div>
</div>

<div className="flex justify-between items-center pt-4 border-t mt-4 text-sm">
<span>{category}</span>
<span className="flex items-center gap-1">
    {rating.toFixed(2)} 
    <FaStar className="text-yellow-500" />
</span>
</div>

</div>
</div>
</div>
    );
};

export default Book;

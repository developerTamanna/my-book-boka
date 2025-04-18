import React, { Suspense } from 'react';
import Book from '../../Book/Book';

const Books = ({data}) => {

    // const [allBooks, setAllBooks]= useState([]);
    // //    console.log(allBooks)
    // useEffect(()=>{
    //   fetch('booksData.json').then(res=>res.json())
    //   .then(data=>setAllBooks(data))

    // },[])


    // const bookPromise = fetch('./booksData.json').then(res=>res.json());
    return (
    <div>
        <h4 className='text-3xl text-center'>Books</h4>
        <Suspense
        fallback={<span>Loading..</span>}>
          
           
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
    {data.map(singleBook => (
        <Book key={singleBook.bookId} singleBook={singleBook} />
    ))}
</div>
           
        </Suspense>
    </div>
    );
};

export default Books;
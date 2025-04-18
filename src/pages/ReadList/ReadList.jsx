import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreBook } from '../../Utilities/addTODb';
import Book from '../Book/Book';
const ReadList = () => {


    const [readList, setReadLIst]= useState([]);


    const data = useLoaderData()
    console.log(data)
    


    useEffect(()=>{
        const storedBookData = getStoreBook()
        // console.log(storedBookData)
        const convertedStoredBook = storedBookData.map(id=>parseInt(id))
        // console.log(convertedStoredBook)

        const myReadList = data.filter(book=> convertedStoredBook.includes(book.bookId))
        setReadLIst(myReadList)

    },[])


    return (
        <div>
            <Tabs>
    <TabList>
      <Tab>Read Book List</Tab>
      <Tab>My Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2>Book I Read {readList.length}</h2>

      <div>
        {
            readList.map(b=><Book
            
            key={b.bookID}
            singleBook={b}
            ></Book>)
        }
      </div>
    </TabPanel>
    <TabPanel>
      <h2>My Wish List</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ReadList;
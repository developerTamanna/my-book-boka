import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreBook } from '../../Utilities/addTODb';
import Book from '../Book/Book';
const ReadList = () => {


    const [readList, setReadLIst]= useState([]);
      

    //sort

    const [sort, setSort] = useState('')

    //next

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



    //sort function

   const handleSort = (type)=>{
        setSort(type)
        if(type==='pages'){
    const sortedByPage =[...readList].sort((a,b)=>a.totalPages-b.totalPages)
    setReadLIst(sortedByPage)
    console.log(sortedByPage)
        }
        if(type==='ratings'){
           const sortedByRatings =[... readList].sort((a,b)=>a.rating-b.rating)
           setReadLIst(sortedByRatings)
        }
    }

    //next

    return (
        <div>
            <div className="dropdown">
  <div tabIndex={0} role="button" className="btn m-1">sort by: {sort? sort: ''}</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li ><a onClick={()=>handleSort('pages')}>pages</a></li>
    <li><a onClick={()=>handleSort('ratings')}>ratings</a></li>
  </ul>
</div>
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
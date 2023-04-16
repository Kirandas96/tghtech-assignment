import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Dropdown from './Dropdown'
import { Navbar } from './Navbar'

export const Home = () => {
    useEffect(() => {
        // dataFetching()
        tagsFetching()
       
    }, [])
    
    const[quotes,setQuotes]=useState({})
    const[tags,setTags]=useState([])
    const dataFetching=()=>{
        axios.get("http://api.quotable.io/quotes/random")
        .then((data)=>{setQuotes(data.data)})
      }
      
      
      const tagsFetching=()=>{
        axios.get("http://api.quotable.io/tags")
        .then((data)=>{setTags(data?.data)})
      }
     
  return (
    <div className='home'>
        <Navbar/>
        <div className='container'>
        <div className='quote'>
            {/* <p>{quotes[0].content}</p> */}
            {/* <h3>-{quotes[0].author}</h3> */}
        </div>
        <div>
            <Dropdown arr={tags}/>
        </div>
        </div>
        
    </div>
  )
}

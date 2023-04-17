import React from 'react'
import { useNavigate } from 'react-router'

export const Navbar = ({weight1,weight2}) => {
  const navigate=useNavigate()
  const handleBook=()=>{
    navigate("/bookmark")
  }
  const handleHome=()=>{
    navigate("/")
  }
  const styles1={fontWeight:weight1}
  const styles2={fontWeight:weight2}
  return (
    <div className='nav'>
        <div onClick={()=>handleHome()} style={styles1}>Home</div>
        <div onClick={()=>handleBook()} style={styles2}>Bookmark</div>
    </div>
  )
}

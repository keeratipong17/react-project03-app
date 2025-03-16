
import React from 'react'
import NavBar from '../components/NavBar.jsx'
import PicCard from '../components/PicCard.jsx'
import pic1 from '../assets/pic1.png'
export default function HomePage() {
    return (
        <>
            <NavBar />
            <h4></h4>
            <h1>HomePage</h1>
            <PicCard showimg={pic1} wi={"200px"} />
        </>
    )
}
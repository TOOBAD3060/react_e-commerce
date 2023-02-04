import React from 'react'
import soccer from '../../../images/image1.png'
import './FirstSection.css'
const FirstSection = () => {
  return (
    <div className='first-section'>
        <article>
            <h1>Give your workout <br /> a new style</h1>
            <p>Success isn't always about greatness. 
                It's about consistency. Consistent <br /> hardwork gains
                success. Greatness will come
                </p>
             <button> Explore Now </button>   
        </article>
        <article id='display'>
            <img src={soccer} alt='soccer' width= '250px' />
        </article>
    </div>
  )
}

export default FirstSection
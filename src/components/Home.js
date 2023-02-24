import React from 'react'
import './Home.css'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div className='home'>

        {/* Container*/}
        <div className='bio'>
            <p>Hi, my name is</p>
            <h1 className='name'>Johnny Sanchez</h1>
            <h2>I'm an aspiring Web Developer</h2>
            <p>I am currently working to improve my skills by 
                building different types of projects.
            </p>
            <div>
                <button> View Work <HiArrowNarrowRight /></button>
            </div>
        </div>
    </div>
  )
}

export default Home
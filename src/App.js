
import './App.css';

import {BsFillMoonStarsFill} from "react-icons/bs"
import {BsSunFill} from "react-icons/bs"
import {GoMarkGithub} from "react-icons/go"
import {AiFillLinkedin} from "react-icons/ai"
import {MdMail} from "react-icons/md"

import Image from "./components/Image"
import userImgSrc from "./images/public/dev-ed-wave.png"
import movieImgSrc from "./images/public/movie.jpg"
import todoImgSrc from "./images/public/todo.jpg"

import gamer1 from "./images/public/favGamer1.jpg"
import projectdata from "./data/projectdata.json"
import projectData from './data/projectData';

import {useState} from "react"


function App() {
  //console.log(projectdata);

  const [darkMode,setDarkMode]=useState(false);

  return (
    <div className={darkMode? "dark": ""}>
      <header className=' px-10 dark:bg-gray-900'>
          <nav className='  flex justify-between items-center'>
            <h1 className=' font-karla text-4xl dark:text-white'>Saurav Singh</h1>
            <ul className='  flex justify-center items-center   '>
              {darkMode? <li className=' cursor-pointer ml-16 text-2xl dark:text-white '><BsSunFill
                onClick={()=>{
                  setDarkMode(prev=>!prev)
                }}
              
              /></li>
              : <li className=' cursor-pointer ml-16 text-2xl'><BsFillMoonStarsFill
                onClick={()=>{
                  setDarkMode(prev=>!prev)
                }}
              /></li>}
            </ul>
          </nav>
      </header>
      <main className=' text-center p-20 px-10 dark:bg-gray-900 '>
        <section>
          <h1 className=' text-4xl text-green-500'>Saurav Singh</h1>
          <h1 className=' text-2xl mt-2 text-gray-900 dark:text-white'>Front-End Developer</h1>
          <h1 className=' font-mono mt-2 dark:text-white '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h1>
           <ul className=' flex justify-center items-center gap-16 mt-8'>
             <li className=' text-4xl text-gray-600'><a href='https://www.google.com'><GoMarkGithub /></a></li>
             <li className=' text-4xl text-gray-600'><a href='https://www.google.com'><AiFillLinkedin /></a></li>
             <li className=' text-4xl text-gray-600'><a href='https://www.google.com'><MdMail /></a></li>
           </ul>
           <div className=' w-64 h-64 mx-auto mt-16 overflow-hidden   rounded-full  bg-gradient-to-b from-lime-600 to-white'>
              {/* <Image src={userImgSrc} /> */}
             { darkMode?<img  src={gamer1} className=" object-fill rounded-full " />:<img src={userImgSrc} className=" scale-150  pt-12"/> }
           </div>
           </section>

           <section className=' mt-16 mb-16'>
              <h1 className=' text-4xl mb-6  text-lime-500'>My Projects</h1>
              <div className=' md:flex gap-6 '>
                  {projectData.map(e=>{
                     return( <a href={e.link} key={e.title} target="blank" className=' w-auto h-auto md:w-1/3 p-10 mb-6 border shadow-2xl rounded-lg cursor-pointer transition ease-out delay-150 hover:scale-105 dark:border-lime-500 md:flex gap-6  flex flex-col ' >
                     <img  src={e.img} className=" rounded-lg md:min-w-40 outline  h-72 " />
                      <p className=' dark:text-yellow-50 font-mono text-xl'>{e.title}</p>
                      </a>)
                    
                  })}
              </div>
           </section>


           <h1 className=' text-2xl dark:text-gray-100 font-mono'>Have some questions for me? Or want a 1v1 in game?</h1>
              <h1 className=' text-2xl dark:text-gray-100 font-mono'>Write here!</h1>
           <section className=' md:flex justify-center mt-5 '>
              <form className='p-10  md:w-1/2   border dark:border-lime-400 rounded-lg shadow-2xl' action='https://formspree.io/f/xvoyqebk' method='POST' >
                <label htmlFor='name' className='font-mono text-lg dark:text-yellow-50 '>Name</label>
                <input className='mb-4 id="name"  w-full border rounded-xl p-2' type="text" placeholder='Your Name' name="username" autoComplete='off' required/>
                <label htmlFor='email' className='font-mono text-lg dark:text-yellow-50'>Email</label>
                <input className='mb-4 w-full id="email" border rounded-xl p-2 dark:outline-lime-500' type="email" placeholder='Your Email' name="email" autoComplete='off' required/>
                <label className=' font-mono text-lg dark:text-yellow-50'>Message</label>
                <textarea className='mb-4 w-full border rounded-xl p-2 ' rows={6} cols={30} autoComplete="off" name="message" placeholder='Your Message!' required/>
                <button className=' text-gray-900 font-karla w-24 h-12 bg-gradient-to-r from-green-500 via-lime-300 to-lime-500 hover:bg-gradient-to-br rounded-md' >Submit</button>
              </form>
           </section>

      </main>
      
      <footer></footer>
    </div>
  );
}

export default App;

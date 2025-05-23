import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import webreadsvideo from '../public/webreadsdemo.mp4';
import campuscrudvideo from '../public/campuscruddemo.mp4';
import musicplayerivdeo from '../public/musicplayerdemo.mp4';
import { useState } from 'react';
import Image from 'next/image';
import profilepic from '../public/profilepic2.png'
import ReactIcon from '../public/react-icon.png'
import CppIcon from '../public/cpp-icon.png'
import JsIcon from '../public/js-icon.png'
import PythonIcon from '../public/python-icon.png'
import SqlIcon from '../public/sql-icon.png'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ""}>
      <Head>
        <title>Chris Barwicki Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=' px-10 md:px-20 lg:px-40 dark:bg-gray-800'>
        <section className=" min-h-screen ">
          <nav className=' py-10 mb-12 flex justify-between'>
            <h1 className=' text-xl font-burtons dark:text-gray-300'>codedbychris</h1>
            <ul className=' flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className=' cursor-pointer text-xl dark:text-gray-300' />
              </li>
              <li>
                <a 
                  className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' 
                  href={'/Chris_Barwicki_Resume.pdf'}
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className=' text-center p-10'>
            <h2 className=' text-5xl py-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500 font-medium md:text-6xl'>
              Chris Barwicki
            </h2>
            <h3 className=' text-2xl py-2 md:text-3xl dark:text-white'>
              Developer and designer.
            </h3>
            <p className=' text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-300'>
              Detail-oriented, organized and meticulous developer. Enthusiastic team
              player ready to contribute to company success. Complex problem solver with analytical and driven mindset. Dedicated to achieving
              demanding development objectives according to tight schedules while
              producing impeccable code.
            </p>
          </div>
          <div className=' text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-300'>
            <a href='https://www.linkedin.com/in/chris-barwicki-a29285209/'>
              <AiFillLinkedin />
            </a>
            <a href='https://github.com/cbarwicki'>
              <AiFillGithub />
            </a>
          </div>
          <div className=' relative mx-auto mt-20 w-80 h-80'>
            <Image src={profilepic}  />
          </div>
        </section>

        <section className="py-10">
          <div>
            <h3 className=' text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500 py-1 text-center md:text-4xl'>
              Portfolio
            </h3>
          </div>
          <div>
            <video 
              src={webreadsvideo} 
              type='video/mp4' 
              controls 
              className=' max-w-xs py-5 mx-auto md:max-w-3xl' 
            />
            <p className=' text-md text-center py-5 leading-8 text-gray-800 md:text-xl max-w-3xl mx-auto dark:text-gray-300'>
              This application uses K-means Clustering, which is a type of machine learning algorithm, 
              to recommend books for the user based on their previous reading history.
              The user signs up with their name and email address, which saves their information in a
              mongoDB database. Upon sign up, the user is asked to fill out a survey about their
              favorite books, which is used to fuel the machine learning algorithm which suggests
              which books the user should read next. The user is able to customize their profile with 
              various themes as well as profile pictures.
            </p>
          </div>
          <div>
            <video 
              src={musicplayerivdeo} 
              type='video/mp4' 
              controls 
              className=' max-w-xs py-5 mx-auto md:max-w-3xl' 
            />
            <p className=' text-md text-center py-5 leading-8 text-gray-800 md:text-xl max-w-3xl mx-auto dark:text-gray-300'>
              This is an application made with Python, Django, and React.js that acts as a collaborative 
              music playing system. Through integration with Spotify API, the user can connect the 
              application to their Spotify account to control the music which is playing. The host user
              can create a room, which others using the application can join by entering the room code.
              Features include pausing or unpausing the music currently being played, as well as voting
              to skip the current song being played.
            </p>
          </div>
          <div>
            <video 
              src={campuscrudvideo} 
              type='video/mp4' 
              controls 
              className=' max-w-xs py-5 mx-auto md:max-w-3xl'
            />
            <p className=' text-md text-center py-5 leading-8 text-gray-800 md:text-xl max-w-3xl mx-auto dark:text-gray-300'>
              This application is a college campus managment system. The user can add colleges as 
              well as students, which are all stored in a Postgres database and displayed for the user
              to see. Then the user is free to edit any information about the students or colleges,
              such as their profile picture, the school&apos;s address, or the student&apos;s GPA and email
              address. The user is also free to delete any entry in the database they want.
            </p>
          </div>
        </section>

        <section className=' grid place-items-center'>
          <div>
            <h3 className=' text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500 py-1 text-center md:text-4xl'>
              Languages
            </h3>
          </div>
          <div className=' md:flex gap-10 py-8'>
            <div className=' py-5 px-5 shadow-lg rounded-xl grid place-items-center'>
              <Image 
                src={ReactIcon}
                width={125}
                height={125}
              />
              <h3 className=' text-xl pt-5 dark:text-white'>
                React.js
              </h3>
            </div>
            <div className=' py-5 px-5 shadow-lg rounded-xl grid place-items-center'>
              <Image 
                src={JsIcon}
                width={125}
                height={125}
              />
              <h3 className=' text-xl pt-5 dark:text-white'>
                JavaScript
              </h3>
            </div>
            <div className=' py-5 px-5 shadow-lg rounded-xl grid place-items-center'>
              <Image 
                src={PythonIcon}
                width={125}
                height={125}
              />
              <h3 className=' text-xl pt-5 dark:text-white'>
                Python
              </h3>
            </div>
            <div className=' py-5 px-5 shadow-lg rounded-xl grid place-items-center'>
              <Image 
                src={CppIcon}
                width={125}
                height={125}
              />
              <h3 className=' text-xl pt-5 dark:text-white'>
                C++
              </h3>
            </div>
            <div className=' py-5 px-5 shadow-lg rounded-xl grid place-items-center'>
              <Image 
                src={SqlIcon}
                width={125}
                height={125}
              />
              <h3 className=' text-xl pt-5 dark:text-white'>
                SQL
              </h3>
            </div>
          </div>
          
        </section>

      </main>

    </div>
  )
}

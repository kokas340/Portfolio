"use client"
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { styles } from './header.css'
import Link from 'next/link'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [navbar, setNavbar] = useState(false);
  return (
    < >
      <nav class="headerColor shadow-2xl shadow-cyan-500/50 px-2 sm:px-4 py-2.5 rounded  ">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <a href="https://flowbite.com/" class="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </a>
          <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
              </li>
              <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
              </li>
              <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
              </li>
              <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/*START black stars */}
      <div>
        <div class="starsec"></div>
        <div class="starthird"></div>
        <div class="starfourth"></div>
        <div class="starfifth"></div>
      </div>
      {/*END black stars */}



      {/*START PINK EFFECT */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/*END PINK EFFECT */}


      <main >
        {/* */}
        <div className="   "  >

        </div>

        <div class="  imageDiv">
          <div class="grid grid-cols-1 gap-6  lg:grid-cols-2" >
            <div class="flex justify-center lg:pt-20">
              <div className="">
                <p className="font-bold text-7xl text-white uppercase">Hi,</p>
                <p className="font-bold text-7xl text-white uppercase ">I'm jack</p>
                <div class="typewriter pt-3">
                  <p className="font-bold text-4xl uppercase text-sky-400 ">Software Developer 	&#128513; </p>
                </div>
              </div>
            </div>
            <div class="flex justify-center ">
              {/*START lamp */}
              <div class="lamp__wrap">
                <div class="lamp">
                  <div class="cable"></div>
                  <div class="cover"></div>
                  <div class="in-cover">
                    <div class="bulb"></div>
                  </div>
                  <div class="light"></div>
                </div>
                <div className=' flex flex-row h-10 gap-6  justify-center mt-16'>
                  <Image
                    src="/ld.png"
                    alt="linkedin"
                    width={40}
                    height={40}
                  />
                  <Image
                    src="/github.png"
                    alt="github"
                    width={40}
                    height={40}
                  />
                  <Image
                    src="/mail.png"
                    alt="email"
                    width={40}
                    height={40}
                  />
                  <Image
                    src="/whats.png"
                    alt="whatsApp"
                    width={40}
                    height={40}
                  />

                </div>
              </div>
              {/*END lamp */}

            </div>

          </div>
        </div>
        <hr></hr>
        <div className=' pt-16 '>
          <div class="wrapper">
            <div class="bg"> About Me </div>
            <div class="fg"> About Me </div>
          </div>
        </div>
       
          <div class="grid grid-cols-1 gap-6  lg:grid-cols-5  pt-16" >
            <div class="center col-span-3 ">
              <p className='font-mono text-2xl text-white '>
              My name is Jack, and I am a 20-year-old programmer currently living in Horsens, Denmark. I started programming in 2017, and I am currently working on a self-project using React. I have experience with other programming languages as well. I have a Technical Degree in programming and I am currently in my 3rd semester of Software Engineering, which I expect to complete in 2025. My objective is to obtain a challenging role as a Software Engineer where I can apply my programming skills and gain experience in the field.
              </p>
            </div>
            <div class="lg:pl-12 justify-center col-span-2">
              
            <Image
            className='rounded-lg hover:-translate-y-3  duration-200 myDIV'
                    src="/jack.jpeg"
                    alt="email"
                    width={350}
                    height={40}
                  />
                   <div class="hide lg:pl-14">
                    <p >Graduation from Technical Degree 2020.</p>
              
            </div>
            </div>

          </div>
        


      </main>






    </>

  )
}

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


      <main className='overflowy overflowx pb-12'>
        {/* */}


        <div class="  imageDiv ">
          <div class="grid grid-cols-1 gap-6  lg:grid-cols-2" >

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
                <a href="https://www.linkedin.com/in/jackspinola/" className='z-50'>
                  <Image
                    src="/ld.png"
                    alt="linkedin"
                    width={40}
                    height={40}
                  />
                  </a>
                  <a href="https://github.com/kokas340" className='z-50'>
                  <Image
                    src="/github.png"
                    alt="github"
                    width={40}
                    height={40}
                  />
                   </a>
                   <a href="mailto:jackspinola198@hotmail.com" className='z-50'>
                  <Image
                    src="/mail.png"
                    alt="email"
                    width={40}
                    height={40}
                  />
                   </a>
                   <a className='z-50' href="https://api.whatsapp.com/send/?phone=4591450703&text&type=phone_number&app_absent=0">
                  <Image
                    src="/whats.png"
                    alt="whatsApp"
                    width={40}
                    height={40}
                  />
                   </a>
                  

                </div>
              </div>
              {/*END lamp */}

            </div>
            <div class="flex justify-center lg:pt-20 pt-10 phoneView">
              <div className="">
                <p className="font-bold lg:text-7xl text-4xl text-white uppercase">Hi,</p>
                <p className="font-bold lg:text-7xl text-4xl text-white uppercase ">I'm jack</p>
                <div class="typewriter pt-3">
                  <p className="font-bold lg:text-4xl text-2xl uppercase text-sky-400 ">Software Developer 	&#128513; </p>
                </div>
              </div>
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

        <div class="grid grid-cols-1 gap-6  lg:grid-cols-5  pt-16 overflowy" >
          <div class="center col-span-3 ">
            <p className='font-mono text-lg lg:text-2xl text-white '>
              My name is Jack, and I am a 20-year-old programmer currently living in Horsens, Denmark. I started programming in 2017, and I am currently working on a self-project using React. I have experience with other programming languages as well. I have a Technical Degree in programming and I am currently in my 3rd semester of Software Engineering, which I expect to complete in 2025. My objective is to obtain a challenging role as a Software Engineer where I can apply my programming skills and gain experience in the field.
            </p>
          </div>
          <div class="lg:pr-12 pl-3  col-span-2 grid place-items-center">

            <Image
              className='rounded-lg hover:-translate-y-3 overflowy duration-200 myDIV '
              src="/jack.jpeg"
              alt="email"
              width={350}
              height={40}
            />
            <div class="hide ">
              <p >Graduation from Technical Degree 2020.</p>

            </div>
          </div>

        </div>


        <div class="grid grid-cols-1 gap-6  lg:grid-cols-6  pt-16 overflowy" >
          <div class="center col-span-3 ">
            <div class="wrapper lg:pb-5">
      
              <div class=" text-teal-400 fg1 text-center"> Education </div>
            </div>
            <div class="grid grid-cols-8 pt-10" >
              <div className='col-span-1 mr-1'>
                <Image
                  className='rounded-full '
                  src="/epcc.png"
                  alt="epcc"
                  width={70}
                  height={70}
                />
              </div>
              <div className='col-span-7'>
                <p className='text-teal-400 font-semibold text-xl'>Informatics & Programming</p>
                <div className='lg:flex lg:flex-row'>
                  <p className='text-lg text-white'>Cristóvão Colombo &nbsp; </p>
                  <p className='text-lg text-gray-700'>Technical Degree | 2017 - 2020</p>
                </div>

              </div>

              <div className='col-span-1 lg:pt-8 mr-1'>
                <Image
                  className='lg:rounded-lg '
                  src="/via.jpg"
                  alt="via"
                  width={70}
                  height={70}
                />
              </div>
              <div className='col-span-7 lg:pt-6'>
                <p className='text-teal-400 font-semibold text-xl'>Software Engineering</p>
                <div className='lg:flex lg:flex-row'>
                  <p className='text-lg text-white'>VIA University&nbsp; </p>
                  <p className='text-lg text-gray-700'>Bachelor's Degree | 2022 - 2025</p>
                </div>

              </div>
            </div>
          </div>
          <div class="center col-span-3 ">

            <div class="wrapper lg:pb-24">
             
              <div class="text-red-500 fg2 text-center"> Work Experience </div>
            </div>
            <div class="grid grid-cols-8 pt-10" >
              <div className='col-span-1 mr-1'>
                <Image
                  className='rounded-full '
                  src="/goclick.jfif"
                  alt="goclick"
                  width={70}
                  height={70}
                />
              </div>
              <div className='col-span-7'>
                <p className='text-red-500 font-semibold text-xl'>Full Stack Developer</p>
                <div className='lg:flex lg:flex-row'>
                  <p className='text-lg text-white '>GoClick &nbsp;</p>
                  <p className='text-lg text-gray-600 '>App Developer | January, 2020 - June, 2020</p>
                </div>

              </div>


            </div>
          </div>

        </div>
        <div className=' pt-16 '>
          <div class="wrapper">
            <div class="bg"> PROJECTS </div>
            <div class="fg"> PROJECTS </div>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-14 px-12 lg:grid-cols-12  pt-20 overflowy lg:px-24 " >
          <div className='col-span-4'>
            <div class="flex justify-center">
              <div
                class=" block hover:-translate-y-3  duration-200 rounded-lg bg-white ">
                <a href="https://rigacup.lv/" data-te-ripple-init data-te-ripple-color="light">
                  <img
                    class="rounded-t-lg "
                    src="/rigacup.png"
                    width={1000}
                    height={300}
                    alt="" />
                </a>
                <div class="p-6">
                  <h5
                    class="mb-2 text-xl font-medium leading-tight ">
                    Riga Cup
                  </h5>
                  <p class="text-base ">
                   I developed the backend for this system managing all the tournaments and teams.
                  </p>

                </div>
              </div>
            </div>

          </div>

          <div className='col-span-4'>
            <div class="flex justify-center">
              <div
                class="block  rounded-lg bg-white shadow-lg ">
                <a href="" data-te-ripple-init data-te-ripple-color="light">
                  <img
                    class="rounded-t-lg"
                    src="/chess.png"
                    width={1000}
                    height={300}
                    alt="" />
                </a>
                <div class="p-6">
                  <h5
                    class="mb-2 text-xl font-medium leading-tight ">
                    Chess
                  </h5>
                  <p class=" text-base ">
                  I took this on as a challenge, not being allowed to use any chess pre-built libraries.
                  </p>

                </div>
              </div>
            </div>
          </div>

          <div className='col-span-4'>
            <div class="flex justify-center">
              <div
                class="block  rounded-lg bg-white ">
                <a href="#!" data-te-ripple-init data-te-ripple-color="light">
                  <img
                    class="rounded-t-lg"
                    src="/messenger.png"
                    width={1000}
                    height={300}
                    alt="Messenger app" />
                </a>
                <div class="p-6">
                  <h5
                    class="mb-2 text-xl font-medium leading-tight ">
                    Messenger App
                  </h5>
                  <p class=" text-base">
                  I had too much time on my hands and decided to create a chat app with React Native and Firebase.
                  </p>
                 

                </div>
              </div>
            </div>
          </div>

        </div>

        <div className=' pt-16 pb-12 '>
          <div class="wrapper">
            <div class="bg"> SKILLS </div>
            <div class="fg"> SKILLS </div>
          </div>
        </div>

        <div className='flex flex-row justify-center'>
          <div className='lg:flex lg:justify-end md:flex md:justify-end '>
          <img
            class="rounded-full mx-2"
            src="/PHP.png"

            width={60}
            height={60}
            alt="php" />
          <img
            class="rounded-full mx-2"
            src="/html.png"
            width={60}
            height={60}
            alt="html" />
          <img
            class="rounded-full mx-2"
            src="/java.png"
            width={60}
            height={60}
            alt="java" />
          <img
            class="rounded-full mx-2"
            src="/js.png"
            width={60}
            height={60}
            alt="js" />
          </div>
          <div className='lg:flex lg:justify-start md:flex md:justify-start'>
          <img
            class="rounded-full mx-2"
            src="/csharp.png"
            width={60}
            height={60}
            alt="c#" />
          <img
            class="rounded-full mx-2"
            src="/sql.png"
            width={60}
            height={60}
            alt="sql" />
          <img
            class="rounded-full mx-2"
            src="/css.png"
            width={60}
            height={60}
            alt="css" />
          <img
            class="rounded-full mx-2"
            src="/python.png"
            width={60}
            height={60}
            alt="python" />
          </div>
          
        </div>
        <div className='flex flex-row justify-center pt-4'>
        <div className='lg:flex lg:justify-end md:flex md:justify-end'>
          <img
            class="rounded-full mx-2"
            src="/codeig.png"
            width={60}
            height={60}
            alt="codeIgniter" />
          <img
            class="rounded-full mx-2"
            src="/react.png"
            width={60}
            height={60}
            alt="react" />
        
          <img
            class="rounded-full mx-2"
            src="/bootstrap.png"
            width={60}
            height={60}
            alt="bootstrap" />
          </div>
          <div className='lg:flex lg:justify-start md:flex md:justify-start'>
         <img
            class="rounded-full mx-2"
            src="/tailwind.jpg"
            width={60}
            height={60}
            alt="tailwind" />
          <img
            class="rounded-full mx-2"
            src="/next.png"
            width={60}
            height={60}
            alt="next" />
          <img
            class="rounded-full mx-2"
            src="/jquery.png"
            width={60}
            height={60}
            alt="jquery" />
         </div>
          
        </div>




      </main>
      <footer>
        <div className='bg-slate-900	min-w-max'>
          <p className='text-center pt-6 pb-2 text-white'>
            JACK SPINOLA, 2023
          </p>
          <p className='text-center italic py-6 text-white px-2'>“First, solve the problem. Then, write the code.” – John Johnson</p>
        </div>
      </footer>






    </>

  )
}

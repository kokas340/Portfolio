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


      <main >
        {/* */}


        <div class="  imageDiv lg:height">
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
            <div class="flex justify-center lg:pt-20 pt-10">
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
          <div class="lg:pr-12  col-span-2 grid place-items-center">

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
          <div class="center col-span-3 justify-center">
            <div class="wrapper">
              <div class="bg1 text-center"> Education </div>
              <div class="fg1 text-center"> Education </div>
            </div>
            <div class="grid grid-cols-8" >
              <div className='col-span-2'>
              <Image
                    src="/whats.png"
                    alt="whatsApp"
                    width={70}
                    height={40}
                  />
              </div>
              <div className='col-span-6'>
                  <p>Informatics & Programming</p>
                  <div className='flex flex-row'>
                      <p>Cristovao Colombo</p>
                      <p>Technical Degree | 2017 - 2020</p>
                  </div>
                
              </div>

              <div className='col-span-2'>
              <Image
                    src="/whats.png"
                    alt="whatsApp"
                    width={70}
                    height={40}
                  />
              </div>
              <div className='col-span-6'>
                  <p>Software Engineering</p>
                  <div className='flex flex-row'>
                      <p>VIA University</p>
                      <p>Bachelor's Degree | 2022 - 2025</p>
                  </div>
                
              </div>
            </div>
          </div>
          <div class="center col-span-3 justify-center">

            <div class="wrapper">
              <div class="bg2 text-center"> Work Experience </div>
              <div class="fg2 text-center"> Work Experience </div>
            </div>
            <div class="grid grid-cols-8" >
            <div className='col-span-2'>
              <Image
                    src="/whats.png"
                    alt="whatsApp"
                    width={70}
                    height={40}
                  />
              </div>
              <div className='col-span-6'>
                  <p>Full Stack Developer</p>
                  <div className='flex flex-row'>
                      <p>GoClick</p>
                      <p>Technical Degree | January, 2020 - June, 2020</p>
                  </div>
                
              </div>

            </div>
          </div>

        </div>



      </main>






    </>

  )
}

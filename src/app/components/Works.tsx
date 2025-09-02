import { CardCarousel } from '@/components/ui/card-carousel'
import MaskedDiv from '@/components/ui/masked-div'
import { TextScroll } from '@/components/ui/text-scroll'
import React from 'react'

const Works = () => {
  const images = [
    { src: "/image_1.png", alt: "Image 1" },
    { src: "/image_2.png", alt: "Image 2" },
    { src: "/image_3.png", alt: "Image 3" },
    { src: "/image_4.png", alt: "Image 4" },
    { src: "/image_5.png", alt: "Image 5" },
  ]
  return (
    <section className='relative w-full min-h-screen flex flex-col items-center gap-12 bg-grey-900 py-20'>
            <TextScroll
               className="font-display text-center text-4xl font-semibold tracking-tighter 
                   bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent
                   md:text-7xl md:leading-[5rem]"
               text="Snap Speaks  "
               default_velocity={4}
            />
            {/* Left vignette */}
  <div className="pointer-events-none absolute left-0 top-0 h-full w-60 bg-gradient-to-r from-grey-900 to-transparent"></div>

{/* Right vignette */}
<div className="pointer-events-none absolute right-0 top-0 h-full w-60 bg-gradient-to-l from-grey-900 to-transparent"></div>
            <div className='font-ibm text-7xl text-yellow-300 lg:p-20 md:p-13 sm:p-7  font-black'>
              <h1 className='text-center'>Our Best Works</h1>
            </div>
            <div className="pr-8 pl-8 lg:p-1 md:p-4  items-between m-auto mt-13 flex max-w-4xl flex-wrap justify-between gap-15 lg:gap-25">
               
            <MaskedDiv maskType="type-3" className="my-4 ">
        <video
          className="cursor-pointer transition-all duration-300 hover:scale-105 "
          autoPlay
          loop
          muted
        >
          <source
            src="/Video_1.mp4"
            type="video/mp4"
          />
        </video>
      </MaskedDiv>
      <MaskedDiv maskType="type-4" className="my-4">
        <video
          className="cursor-pointer transition-all duration-300 hover:scale-105"
          autoPlay
          loop
          muted
        >
          <source
            src="/Video_2.mp4"
            type="video/mp4"
          />
        </video>
      </MaskedDiv>
      <MaskedDiv maskType="type-2" className="my-4">
        <video
          className="cursor-pointer transition-all duration-300 hover:scale-105"
          autoPlay
          loop
          muted
        >
          <source
            src="/Video_3.mp4"
            type="video/mp4"
          />
        </video>
      </MaskedDiv>
    </div>
    <div className='pt-20 sm:pt-8 relative sm:mt-5 sm:mb-5 md:mt-9 md:mb-9 lg:mt-20 lg:mb-15'>
      <h1 className='font-semibold font-ibm lg:text-8xl md:text-6xl  text-4xl sm:text-4xl align-center absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap'>The Amazing Designs</h1>
      <h1 className='font-semibold text-yellow-400 font-ibm lg:text-5xl md:text-3xl text-xl sm:text-2xl align-center absolute left-[70px] -bottom-[65px] lg:left-[210px] lg:-bottom-[145px] md:left-[145px] md:-bottom-[100px]  whitespace-nowrap'>Made By Us.</h1>
    </div>
    <div className="lg:pt-45 pt-30 sm:pt-30">
      <CardCarousel
        images={images}
        autoplayDelay={2000}
        showPagination={true}
        showNavigation={true}
      />
    </div>
    </section>
    
  )
}

export default Works
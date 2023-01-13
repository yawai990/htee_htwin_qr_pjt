import React from 'react'
import {Image,Content} from '../components/AboutUs/'  
import { motion } from 'framer-motion';
import { image_1,image_2,image_3,image_4,image_5,image_6,image_7,image_8 } from '../components/AboutUs/'
const AboutUs = () => {
  const content = {
    first:{
      Title:'Our Vision',
      Text:'"When we started this journey, we got this idea like if we create a systematic scanning system for high school then we can halt the attendance recording system that we still use in schools like by writing down on a note book ( record book) by respective teacher."'
    },
    second:{
      Title:'Our Mission',
      Text:'"When we started this journey, we got this idea like if we create a systematic scanning system for high school then we can halt the attendance recording system that we still use in schools like by writing down on a note book ( record book) by respective teacher."'
    }
  }
  return (
    <>
        <div className='w-10/12 m-auto text-justify content-around bg-secondary-color py-20 overflow-hidden'>
            <h1 className='grid justify-center text-5xl font-semibold'>About Us</h1>
            <p className='mt-2 grid justify-center text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos harum illum illo provident, quae modi eaque id nam dignissimos dolore!</p>
            <motion.div 
              initial={{
                y:200,
                opacity:0
              }}
              animate={{
                y:0,
                opacity:1
              }}
              transition={{delay:0.03,duration:0.8,type:'tween'}}
              className="mt-10 grid grid-cols-3 gap-0"
            >
              <Image img={image_1} name="image_1" />
              <Image img={image_2} name="image_2"/>
              <Image img={image_3} name="image_3"/>
            </motion.div>
            <div className="container flex flex-col lg:flex-row items-center gap-12 mt-14 lg:mt-28">
              {/* Image  */}
              <motion.div 
                initial={{
                  x:-200,
                  opacity:0
                }}
                animate={{
                  opacity:1,
                  x:0
                }}
                transition={{delay:0.8,duration:0.6,type:'tween'}}
                className="grid grid-cols-2 flex-1 lg:mb-0 mb-10 z-10"
              >
                <div>
                      <Image img={image_4} name={'image_4'}  />
                  </div>
                  <div>
                      <Image img={image_5} name={'image_5'} />
                  </div>
                  <div className="col-span-2">
                      <Image img={image_6} name={'image_6'} />
                  </div>
              </motion.div>
              <motion.div
                initial={{
                  x:200,
                  opacity:0
                }}
                animate={{
                  opacity:1,
                  x:0
                }}
                transition={{delay:0.8,duration:0.6,type:'tween'}}
                className="flex-[0.75] flex justify-center flex-col"
              >
                <Content context={content.first} />
              </motion.div>
              
            </div>
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12 py-20 lg:mt-28">
            <motion.div
                initial={{
                  x:-200,
                  opacity:0
                }}
                transition={{delay:0.3,duration:0.6,type:'tween'}}
                whileInView={{opacity:1,x:0}}
                className="flex-[0.75] flex justify-center flex-col"
              >
                <Content context={content.first} />
              </motion.div>
              <motion.div
                initial={{
                  scale:0.5,
                  opacity:0
                }}
                transition={{delay:0.3,duration:0.5,type:'spring'}}
                whileInView={{opacity:1,scale:1}}
                className="grid lg:grid-cols-2 sm:grid-cols-3 flex-1 relative lg:mb-0 mb-10 mr-5"
              >
                <div className='lg:w-80 lg:h-80 sm:w-60 sm:h-60 lg:z-10'>
                  <Image img={image_7} name={'image_7'} />
                </div>
                <div className='lg:w-80 lg:h-80 lg:absolute sm:w-60 sm:h-60  bottom-36 left-52'>
                  <Image img={image_7} name={'image_7'} />
                </div>
                <div className='lg:w-80 lg:h-80 lg:absolute sm:w-60 sm:h-60 top-40 left-48 lg:z-20'>
                  <Image img={image_8} name={'image_8'} />
                </div>
              </motion.div>
            </div>
            
        </div>
    </>
  )
}

export default AboutUs
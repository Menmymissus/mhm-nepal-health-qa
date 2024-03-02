import React from 'react'
import './Services.css'
// import Service1 from '../assets/images/service-one-image.webp'
import Chatbot from '../assets/images/chatbot2.jpg'
import Meditation from '../assets/images/meditation.jpeg'
import Stress from '../assets/images/stress.jpeg'
import { motion } from 'framer-motion'


const serviceImgAnimationVariants = {
    initial: (index) => ({
        opacity: 0,
        x: index,
    }),
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            delay: 0.5,
        }
    },
};

const serviceTextAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index) =>  ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        }
    }),
};

function Sevices() {
  return (

    <>
    <div id="services">

    <div className='service flex service1-radial-gradient'>
      {/* <p className='text-2xl'>Services</p> */}
          <div className='service-details m-2 p-4 mt-6 flex gap-24 '>

              <div className="info-text-one flex flex-col gap-4 w-1/2">

              <motion.h2
              variants={serviceTextAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={1}
              className='service-info-header'>AI powered health QA model that understands Nepali</motion.h2>
              <motion.p
              variants={serviceTextAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={5}
              className='service-info-subtext'>Now, Ask all your health related queries directly in Nepali language. Your conversation remains private.
              </motion.p>
              <motion.button
               variants={serviceTextAnimationVariants}
               initial="initial"
               whileInView="animate"
               viewport={{
                 once: true,
               }}
               custom={5}
               type="button" class="service-btn" >Learn More</motion.button>

              </div>

              <motion.div
              variants={serviceImgAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
                margin: "-200px",
              }}
              custom={80}
              className="info-text-one-image w-1/2">
                  <img src={Chatbot} className='service-img' alt="service one" />
              </motion.div>

              
          </div>

          

      </div>

      <div className='service flex service2-radial-gradient'>
      {/* <p className='text-2xl'>Services</p> */}
          <div className='service-details m-2 p-4 pt-11 mt-6 flex gap-24 '>

          <motion.div
          variants={serviceImgAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
            margin: "-200px",
            
        }}
          custom={-80}
          className="info-text-one-image w-1/2">
                  <img src={Stress} className='service-img' alt="service one" />
              </motion.div>

              <div 
              
              className="info-text-one flex flex-col gap-4 w-1/2">

              <motion.h2 
              variants={serviceTextAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={1}
              className='service-info-header'> Measure Your Stress Level by using AI</motion.h2>
              <motion.p 
              variants={serviceTextAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={5}
              className='service-info-subtext'>We use advanced Artificial Intelligence to measure your stress level. You just fill the form 
                and submit. Our AI model will then analyze the answer and predicts your stress level. 
              </motion.p>
              <motion.button 
              variants={serviceTextAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={5}
              
              type="button" class="service-btn" >Learn More</motion.button>

              </div>

             

              
          </div>

          

      </div>


      <div className='service flex service3-radial-gradient'>
      {/* <p className='text-2xl'>Services</p> */}
          <div className='service-details m-2 p-4 pt-11 mt-6 flex gap-24 '>

              <div className="info-text-one flex flex-col gap-4 w-1/2">

              <motion.h2 
              variants={serviceTextAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={1}
              className='service-info-header'>Your Meditation partner</motion.h2>
              <motion.p 
              variants={serviceTextAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={5}
              className='service-info-subtext'>Select the timer, choose the meditation music and go for it. We care for 
              your mental well-being and we will aid in your daily meditaion.
              </motion.p>
              <motion.button 
              variants={serviceTextAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={5}
              type="button" class="service-btn" >Learn More</motion.button>

              </div>

              <motion.div 
               variants={serviceImgAnimationVariants}
               initial="initial"
               whileInView="animate"
               viewport={{
                 once: true,
                margin: "-200px",

               }}
               custom={80}
               className="info-text-one-image w-1/2">
                  <img src={Meditation} className='service-img' alt="service one" />
              </motion.div>

              
          </div>

          

      </div>
</div>
      </>
  )
}

export default Sevices
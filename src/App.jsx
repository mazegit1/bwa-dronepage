import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import heromain from './images/heromain.webp'; 
import card1 from './images/card1.png'; 
import card2 from './images/card2.png'; 
import { motion } from 'framer-motion'; 
import whyimg from './images/whyimg.png'; 

const App = () => {
  const testimonials = [
    {
      name: "Hugo Adams",
      title: "Content Creator",
      feedback: "With high resolution camera, picture becomes clear and beautiful. It’s so easy to operate the drone.",
      imgSrc: "path_to_hugo_adams_image"
    },
    {
      name: "Jennie Obrien",
      title: "Director Film",
      feedback: "Taking high view video became easy and faster. Battery performance really helps when making films.",
      imgSrc: "path_to_jennie_obrien_image"
    },
    {
      name: "Lisa Millz",
      title: "Content WQCreator",
      feedback: "Making video content for my trip vlog was so powerful and wonderful. Love the video quality.",
      imgSrc: "path_to_lisa_millz_image"
    }
  ];
  return (
    <>
      <Navbar />

      <div 
        className="hero h-screen bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: `url(${heromain})` }}
      >
        <div className="absolute bg-black/20 backdrop-blur-md text-white p-8 rounded-md text-center max-w-2xl">
          <h1 className="text-5xl font-bold mb-6">Representing Drone Light</h1>
          <p className="text-lg mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, voluptatibus iusto quibusdam laborum velit hic ut, ullam, 
            sequi dolorem at culpa magnam facere ea. Illum sequi quod voluptate? Accusantium, velit nobis odio ullam asperiores obcaecati!
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md transition duration-300">
            GET NOW
          </button>
        </div>
      </div>

      <div className="droneinfo container mx-auto py-16 px-6">
        <div className="text-center mb-12">
          <motion.h1 
            className="text-5xl font-bold text-black" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }}
          >
            Discover Our Drones
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <motion.div 
            className="card relative group overflow-hidden"
            initial={{ opacity: 0, y: 100 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img src={card1} alt="Ultra Light Drone" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            
            <div className="absolute inset-0 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6 transition-opacity duration-300 group-hover:bg-black/60">
              <h1 className="text-4xl font-bold text-white mb-2">Ultra Light</h1>
              <h3 className="text-lg text-white">
                Drone moves faster with components weighing under 200g
              </h3>
            </div>
          </motion.div>

          <motion.div 
            className="card relative group overflow-hidden"
            initial={{ opacity: 0, y: 100 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img src={card2} alt="Best Resolution Drone" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            
            <div className="absolute inset-0 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6 transition-opacity duration-300 group-hover:bg-black/60">
              <h1 className="text-4xl font-bold text-white mb-2">Best Resolution</h1>
              <h3 className="text-lg text-white">
                Capture stunning views with a camera resolution up to 4K
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="info bg-[#F9FAFC] px-6 py-10 md:px-20 lg:px-44">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

    <motion.div
      className="info-left"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <img src={whyimg} alt="Why Drone Light?" className="w-full h-auto object-cover" />
    </motion.div>

    {/* Right Text Section */}
    <motion.div
      className="info-right text-center md:text-left"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h1 className="text-4xl font-bold mb-4">Why Drone Light?</h1>
      <p className="text-lg text-gray-600 mb-6">
        We provide the best self-operating drone that's easy to use. With auto-pilot,
        the device captures stunning views for an unparalleled flying experience.
      </p>

      <div className="wrapper grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="wrap flex flex-col items-center md:items-start">
          <h1 className="text-3xl font-bold text-black">4K</h1>
          <p className="text-gray-500">Camera Resolution</p>
        </div>
        <div className="wrap flex flex-col items-center md:items-start">
          <h1 className="text-3xl font-bold text-black">2 TB</h1>
          <p className="text-gray-500">Storage Capacity</p>
        </div>
        <div className="wrap flex flex-col items-center md:items-start">
          <h1 className="text-3xl font-bold text-black">60 m/s</h1>
          <p className="text-gray-500">Max Speed</p>
        </div>
        <div className="wrap flex flex-col items-center md:items-start">
          <h1 className="text-3xl font-bold text-black">30 mins</h1>
          <p className="text-gray-500">Flight Time</p>
        </div>
      </div>
    </motion.div>
  </div>
</div>
<div className="sertification  py-10 md:px-36 px-14 xl:px-36">
    <h1 className='text-center text-6xl font-semibold'>What Our "Pilots <br />Are Saying</h1>
    <div className="cards grid xl:flex items-center md:grid-cols-2 grid-rows-3 gap-16 pt-20">
      {testimonials.map((testimonial, index) => (
        <div className={`card${index + 1} border shadow-xl hover:bg-gray-100 hover:translate-x-[-5px] transition-all ease-in-out duration-300 hover:translate-y-[-5px] px-10 py-10 border-gray-500`} key={index}>
          <p>{testimonial.feedback}</p>
          <div className="information">
            <div className="information-left">
              <img src={testimonial.imgSrc} alt={testimonial.name} />
            </div>
            <div className="information-right">
              <h1>{testimonial.name}</h1>
              <h3>{testimonial.title}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
      <Footer />
    </>
  );
};

export default App;

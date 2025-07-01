import React, { useEffect} from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Mousewheel, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Sidebar from './components/Sidebar';
import './App.css'

function App() {
  useEffect(() => {
    const addRipple = (e) => {
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');

      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      ripple.style.width = ripple.style.height = '100px';
      ripple.style.marginLeft = '-50px';
      ripple.style.marginTop = '-50px';

      document.body.appendChild(ripple);

      ripple.addEventListener('animationend', () => {
        ripple.remove();
      });
    };

    document.addEventListener('click', addRipple);

    // Clean up when App unmounts
    return () => {
      document.removeEventListener('click', addRipple);
    };
  }, []);
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar 固定在左侧，高度撑满全屏，滚动不会动 */}
      <Sidebar />

      {/* 主内容区域可以滚动 */}
      <main className="ml-64 flex-1 overflow-y-auto p-6 bg-gray-200">
        {/* <h1 className="text-2xl font-bold mb-4">Welcome</h1> */}
        <section id="about" className="h-[150px] bg-gray-200 rounded-lg flex items-start justify-between">
          <div className="max-w-[60%]">
            <h2 className="text-2xl font-bold mb-6"> About Me</h2>
            <p className="ml-6 text-gray-700">
              Hello there,
              I am Gavin Na, a senior fullstack software engineer in the past 10 years contributing to technology, financial, 
              and OTA industries.
              I'm now located in Edison, New Jersey and seeking a Software Engineer position.
            </p>
          </div>
          <div className="w-80 h-80 rounded-full overflow-hidden">
            <img
              src="/myjobs/selfie.jpeg"
              alt="Gavin Na"
              className="w-full h-full object-cover"
            />
          </div>
        </section>
        <section id="projects" className="h-[470px] bg-gray-200">
          <h2 className="text-2xl font-bold mb-6">Projects</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-3"></span>
              <h3 className="text-lg font-semibold">Springboard route Optimization & Management software</h3>
            </div>
            <ul className="ml-6 text-gray-700 list-disc space-y-2">
              <li className="marker:text-black marker:font-bold">
                Designed and implemented an interactive map feature combining Leaflet for map rendering and Mapbox tiles for high-quality basemaps.
              </li>
              <li className="marker:text-black marker:font-bold">
                Added intuitive, visible map legends to help users understand interactive routes and markers.
              </li>
              <li className="marker:text-black marker:font-bold">
                Improved rendering performance for large datasets using marker clustering and polyline simplification techniques.
              </li>
              <li className="marker:text-black marker:font-bold">
                Optimized loading speed for millions of transportation schedules with lazy loading and React Redux for efficient state management.
              </li>
              <li className="marker:text-black marker:font-bold">
                Built an automated testing platform with Playwright, increasing missing defect detection coverage by 90%.
              </li>
            </ul>

            <div className="flex items-center">
              <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-3"></span>
              <h3 className="text-lg font-semibold">CUDA-Based Parallel Data Pipeline</h3>
            </div>
            <ul className="ml-6 text-gray-700 list-disc space-y-2">
              <li className="marker:text-black marker:font-bold">
                Developed a high-performance CUDA solution replacing single-core processing, slashing execution time from 2 hours to 2 minutes each run.
              </li>
              <li className="marker:text-black marker:font-bold">
                Optimized programs by processing datasets across distributed processors to utilize cores of CPU cluster.
              </li>
              <li className="marker:text-black marker:font-bold">
                Utilized ReactJS to assemble Python scripts on a website, eliminating the need for individual environment
configuration.
              </li>
            </ul>

            {/* Add more projects as needed */}
          </div>
        </section>
        <section id="jobs" className="h-[450px] bg-gray-200 mb-20">
          <h2 className="text-2xl font-bold mb-6">Educations</h2>
          <Swiper
            pagination={{ dynamicBullets: true, clickable:true }}
            modules={[Pagination, Mousewheel,Autoplay]}
            mousewheel={{forceToAxis:true}}
            loop={true}
            autoplay={{delay:3000, disableOnInteraction: false}}
            className="w-full h-full rounded-xl"
          >
          <SwiperSlide className="flex items-center justify-center text-4xl bg-gray-200">
            <img
              src="/myjobs/usst.jpeg"
              alt="University of Shanghai for Science and Technology"
              className="w-full h-full object-cover">
            </img>
            <div className="absolute inset-0 flex flex-col items-center justify-start text-white">
              <h3 className="text-5xl font-bold"> University Shanghai Science & Technology</h3>
              <div className="flex justify-between text-2xl w-xl font-bold mt-1">
                <span>Electronic Information Engineering</span>
                <span>2011 - 2015</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center text-4xl bg-gray-200">
            <img
              src="/myjobs/sit.jpeg"
              alt="Stevens Institute of Technology"
              className="w-full h-full object-cover">
            </img>
            <div className="absolute inset-0 flex flex-col items-center justify-start text-white -translate-x-6">
              <h3 className="text-5xl font-bold"> Stevens Institute of Technology</h3>
              <div className="flex justify-between text-2xl w-96 font-bold mt-1">
                <span>Computer Science</span>
                <span>2021 - 2023</span>
              </div>
            </div>
          </SwiperSlide>
          </Swiper>
        </section>
        <section id="educations" className="h-[1000px] bg-gray-400">Jobs...</section>
      </main>
    </div>
  );
}


export default App
"use client";
import { Navigation, Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
export default function Testimonial() {
  const [_, setInit] = useState();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <section className="testimonial-and-clients" style={{ overflowX: 'hidden' }}>
      <div className="container">
        <div className="testimonials">
          <Swiper
            // install Swiper modules
            className="swiper-container hero-slider"
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            loop={true}
            speed={900}
            /*using the refs instead of className*/
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            onInit={() => {
              setInit(true);
            }}
          >
            <SwiperSlide>
              <div className="swiper-slide text-center">
                <div className="row">
                  <div className="offset-lg-1 col-lg-10">
                    <div
                      className="test-img"
                      data-aos="fade-up"
                      data-aos-delay="0"
                      data-aos-offset="0"
                    >
                      <img src="sprc-images/testimonials/nabab.png" alt="Testimonial 1" />
                    </div>
                    <h5
                      data-aos="fade-up"
                      data-aos-delay="200"
                      data-aos-duration="600"
                      data-aos-offset="0"
                    >
                      Md Nabab
                    </h5>
                    <span
                      data-aos="fade-up"
                      data-aos-delay="400"
                      data-aos-duration="600"
                      data-aos-offset="0"
                    >
                      Patient
                    </span>
                    <p
                      data-aos="fade-up"
                      data-aos-delay="600"
                      data-aos-duration="600"
                      data-aos-offset="0"
                    >
                      বাংলাদেশে ফিজিওথেরাপি চিকিৎসায় ডা. শফিকুল ইসলাম একজন অন্যতম চিকিৎসক। এ যোগে ওনার মতো একজন ডাক্তার খুঁজে পাওয়া কঠিন। অনেক ক্ষেত্রে পরীক্ষা ছাড়াই সহজেই তিনি রোগ নিরূপণ করতে সক্ষম।এছাড়া ওনি একজন মানবিক ডাক্তারও।
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide text-center">
                <div className="row">
                  <div className="offset-lg-1 col-lg-10">
                    <div
                      className="test-img"
                      data-aos="fade-up"
                      data-aos-delay="0"
                      data-aos-offset="0"
                    >
                      <img src="sprc-images/testimonials/roshid.png" alt="Testimonial 1" />
                    </div>
                    <h5
                      data-aos="fade-up"
                      data-aos-delay="200"
                      data-aos-duration="600"
                      data-aos-offset="0"
                    >
                      Profssor Dr Mohammad Harun Or Roshid
                    </h5>
                    <span
                      data-aos="fade-up"
                      data-aos-delay="400"
                      data-aos-duration="600"
                      data-aos-offset="0"
                    >
                      Patient
                    </span>
                    <p
                      data-aos="fade-up"
                      data-aos-delay="600"
                      data-aos-duration="600"
                      data-aos-offset="0"
                    >
                     জনাব শফিকুল ইসলাম একজন চমৎকার ফিজিও থেরাপিস্ট। তার ম্যানুয়াল ফিজিওথেরাপি খুবই কার্যকর। আমার ফ্রোজেন শোল্ডার তার ম্যানুয়াল থেরাপি দ্বারা উন্নত হয়েছে।
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide text-center">
                <div className="row">
                  <div className="offset-lg-1 col-lg-10">
                    <div
                      className="test-img"
                      data-aos="fade-up"
                      data-aos-delay="0"
                      data-aos-offset="0"
                    >
                      <img src="sprc-images/testimonials/jasmin.png" alt="Testimonial 1" />
                    </div>
                    <h5
                      data-aos="fade-up"
                      data-aos-delay="200"
                      data-aos-duration="600"
                      data-aos-offset="0"
                    >
                      Jasmin Akter
                    </h5>
                    <span
                      data-aos="fade-up"
                      data-aos-delay="400"
                      data-aos-duration="600"
                      data-aos-offset="0"
                    >
                      Patient
                    </span>
                    <p
                      data-aos="fade-up"
                      data-aos-delay="600"
                      data-aos-duration="600"
                      data-aos-offset="0"
                    >
                      Best best best physiotherapy doctor Shafiqul Islam sir....
Ai situation a o oni ato valo kore jotno niya nijer hate rogi dekha ja khubi kom dekha jai....
Thank you Dr rogider ato vlo treatment dewar jnno.....
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="test-pagination"></div>
        </div>
        <div
          className="clients"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="600"
        >
          {/* <Swiper
            // install Swiper modules
            className="swiper-container  clients-slider"
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
            }}
            loop={true}
            speed={900}
            // slidesPerView={5}
            breakpoints={{
              1200: {
                width: 1200,
                slidesPerView: 5,
              },
              992: {
                width: 992,
                slidesPerView: 4,
              },
              576: {
                width: 576,
                slidesPerView: 2,
              },
              400: {
                width: 300,
                slidesPerView: 2,
              },
            }}
            modules={[Autoplay, Pagination, Navigation]}
          >
            <SwiperSlide>
              <div className="swiper-slide">
                <img className="img-fluid" src="sprc-images/testimonials/examination.png" alt="Client 1" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <img src="assets/images/client2.png" alt="Client 2" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <img src="assets/images/client3.png" alt="Client 3" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <img src="assets/images/client4.png" alt="Client 4" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <img src="assets/images/client5.png" alt="Client 5" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <img src="assets/images/client1.png" alt="Client 1" />
              </div>
            </SwiperSlide>
          </Swiper> */}
        </div>
      </div>
    </section>
  );
}

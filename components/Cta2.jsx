import React from "react";

export default function Cta2() {
  return (
    <section className="cta cta2" data-aos="fade-up" data-aos-delay="0"  style={{ overflowX: 'hidden' }}>
      <div className="container">
        <div className="cta-content d-xl-flex align-items-center justify-content-around text-center text-xl-left">
          <div className="content" data-aos="fade-right" data-aos-delay="200" >
            <h2>আপনি কি এখনই এপয়েন্টমেন্ট নিতে চাচ্ছেন ?</h2>
            <h6 className="text-start p-2"><i class="fa fa-hand-o-right" aria-hidden="true"></i> আমাদের রয়েছে পুরুষদের জন্য পুরুষ ফিজিওথেরাপিস্ট এবং স্বয়ং সম্পন্ন পুরুষ বিভাগ । 
            </h6>
            <h6 className="text-start p-2"><i class="fa fa-hand-o-right" aria-hidden="true"></i> মহিলাদের জন্য রয়েছে <span className="text-info">মহিলা ফিজিওথেরাপিস্ট</span> ও স্বয়ং সম্পন্ন   <span className="text-info"> আলাদা মহিলা বিভাগ </span>।</h6>
          </div>
          <div
            className="subscribe-btn"
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-offset="0"
          >
            <a href="/appointment" className="btn_custom btn_custom-primary">
            এপয়েন্টমেন্ট নিন
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

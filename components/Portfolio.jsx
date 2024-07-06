import React from "react";

const Portfolio = () => {
  return (
    <div>
    <section className="portfolio mt-4" style={{ overflowX: 'hidden' }}>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="image-text-container d-md-flex flex-md-row-reverse align-items-center">
          <div className="image text col-md-6"
          data-aos="fade-left"
          data-aos-delay="0"
          data-aos-duration="800">
            <img
              className="img-fluid rounded shadow img-thumbnail" 
              src="sprc-images/portfolio/single.jpg"
              alt="Image"
            />
          </div>
          <div className="text col-md-6 p-3"
          data-aos="fade-right"
          data-aos-delay="0"
          data-aos-duration="800">
            <h1 className="text-center color-red">
              শফিকুল ইসলাম <br /> 
            </h1>
            <h4 className="text-primary text-center" >(ফিজিওথেরাপি বিশেষজ্ঞ)</h4> 
            <p className="mb-2 degree-text"><i class="fa fa-circle" aria-hidden="true"></i> BPT, MSPT ( DU, CRP ) <br /><i class="fa fa-circle" aria-hidden="true"></i>&nbsp;Dip. in-Manipulation Therapy (Certified <a target="_blank" href="https://belgium.worldplaces.me/review/84930016-european-teaching-group-of-orthopaedic-medicine-cyriax.html">ETOMG-Belgium</a>) <br /><i class="fa fa-circle" aria-hidden="true"></i>&nbsp;PGT- <a target="_blank" href="https://mckenzieinstitute.org/
">McKenzie Concept</a> for disc problems solving (New Zealand) <br /><i class="fa fa-circle" aria-hidden="true"></i>&nbsp;Bobath Concept for stroke rehabilitation ( <a target="_blank" href="http://bbta.org.uk">BBTA</a> ,UK) <br /><i class="fa fa-circle" aria-hidden="true"></i>&nbsp;Mulligan Concept <a target="_blank" href="https://bmulligan.com/">(Mulligan institute,UK)</a><br /><i class="fa fa-circle" aria-hidden="true"></i>&nbsp;Manual therapy  (<a target="_blank" href="https://bmulligan.com/">Capri Institute</a>, Delhi) <br /><i class="fa fa-circle" aria-hidden="true"></i>&nbsp;Neuro Mobilisation ( <a target="_blank" href="https://www.linkedin.com/company/neuro-orthopaedic-institute/?originalSubdomain=au">NOI Group</a>, Australia )</p>
            <h5 className="">
                 তিনি দীর্ঘদিন যাবৎ চট্টগ্রাম শহরের প্রাণকেন্দ্র গোলপাহাড় মোড়ে 
              <span className="text-success"> (SPRC)শফিকুল ফিজিওথেরাপি এন্ড রিহ্যাবিলিটেশন সেন্টারে </span> চিফ ফিজিওথেরাপি কনসালটেন্ট হিসেবে আছেন।তিনি কর্মজীবনে ঢাকা মেডিকেল কলেজ হাসপাতালে যোগদান করে বর্তমানে চট্টগ্রাম মেডিকেল হাসপাতালে চিফ ফিজিওথেরাপিস্ট হিসেবে কর্মরত আছেন ।  তার এই দীর্ঘ প্রায় ২৫ বছরের  কর্মজীবনে <span className="text-success"> তিনি দুই লক্ষের অধিক</span> রোগীকে ফিজিওথেরাপি চিকিৎসা সেবা দিয়ে সন্তুষ্টি অর্জন করেছেন । তিনি আন্তর্জাতিক মানের <span className="text-success">ম্যানুয়াল ফিজিওথেরাপি</span>র উপর বিশেষভাবে  প্রশিক্ষণপ্রাপ্ত।তিনি তার  <span className="text-success">ম্যানুয়াল থেরাপির</span>  মাধ্যমে অনেক ক্রিটিক্যাল রোগীকে সুস্থতার পথ দেখিয়েছেন।
            </h5>
            <div className="text-center mt-4">
              <button className="btn_custom btn_custom-primary">
                আরো জানুন
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Portfolio;

import React from "react";
import Blog from "/components/Blog";
import Cta2 from "/components/Cta2";
import useGetAllBlogs from '../../hooks/useGetAllBlogs'

const page = async () => {
  const blogs1 = await useGetAllBlogs('')
  
   function parseDate(dateStr) {
    return new Date(dateStr);
  }

  const blogs = blogs1.sort((a, b) => {
    return parseDate(b?.postedDate) - parseDate(a?.postedDate);
  });


  return <div>
<div className="four-card ">
<div className="four-card-text container">
<h1 className="txt-color">নিয়মিত আমাদের <span>ব্লগ</span>&nbsp;পড়ার মাধ্যমে নিজের শারীরিক সুস্থতা নিয়ে আরো বেশী সচেতন হোন।</h1>
<h4 className="text-info"> ফিজিওথেরাপি বাংলা ব্লগ : সুস্থ জীবনের প্রথম ধাপ</h4>
</div>
</div>
    <Blog blogs={blogs} />
    <Cta2 />
  </div>;
};

export default page;

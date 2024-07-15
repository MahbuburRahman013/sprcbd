import Link from "next/link";
import React from "react";

const SocialLinks = () => {

  const data = [
    {
      icon: 'fa fa-youtube-play',
      color: 'bg-danger',
      title: 'Shafiqul Physiotherapy & Rehabilitation Centre',
      link:'https://www.youtube.com/@shafiqul8726'
    },
    {
      icon: 'fa fa-facebook',
      color: 'bg-primary',
      title: 'Shafiqul Physiotherapy & Rehabilitation Centre-SPRC',
      link:'https://www.facebook.com/Physio.bangla?mibextid=ZbWKwL'
    },
    {
      icon: 'fa fa-twitter',
      color: 'bg-info',
      title: 'Shafiqul Physiotherapy & Rehabilitation Centre',
      link:'https://twitter.com/shafiqu64815043?s=11'
    },
    {
      icon: 'fa fa-globe',
      color: 'bg-danger',
      title: 'www.sprcbd.com',
      link:'/'
    },
    {
      icon: 'fa fa-linkedin',
      color: 'bg-primary',
      title: 'Shafiqul Physiotherapy & Rehabilitation Centre',
      link:'#'
    },
  ]


  return <div className="container">
    
    <h1 className="container text-center fs-1 text-primary mb-3">Shafiqul Physiotherapy & Rehabilitation Centre</h1>
    <h1 className=" text-secondary container text-center fs-5">Click To Visit</h1>

    <div>
      <div
        className="single-widget subscribe-widget"
        data-aos="fade-up"
        data-aos-delay="800"
      >

        <div className="my-4 d-flex flex-column gap-3 ">
        {
          data.map((item, index) => {
            return (
              <Link key={index} style={{textDecoration:'none', fontWeight:'bold' }} className="d-flex gap-2 align-items-center" href={item?.link}>
                <i style={{ borderRadius: '0px 7px 0px 7px', padding: `${item.icon === 'fa fa-facebook' ? '10px 13px': '10px'}`}} className={`${item?.icon} ${item?.color} text-white`}></i>
                <span className="text-primary">{item?.title}</span>
              </Link>
            )
          })
        }
          
        </div>

       
      </div>
    </div>

  </div>;
};

export default SocialLinks;

"use client"
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Client, Databases, ID } from 'appwrite';
import Link from 'next/link';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('64935a13920799c1729f');

export default function Blog() {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const databases = new Databases(client);

    const promise = databases.listDocuments('64935a81b30d4699fbf3', '64935a92791b6004745c');

    promise
      .then(function (response) {
        console.log(response);
        setBlogs(response.documents);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    // <div className="four-card ">
// <div className="four-card-text container">
//     <h1>নিয়মিত আমাদের <span>ব্লগ</span>&nbsp;পড়ার মাধ্যমে নিজের শারীরিক সুস্থতা নিয়ে আরো বেশী সচেতন হোন।</h1>
//     <p> ফিজিওথেরাপি বাংলা ব্লগ: স্বাস্থ্যমন্দ জীবনের প্রথম ধাপ</p>
//   </div>
// </div>
    <div className="container">
      <div className="row">
        {blogs.map((item) => (
          <div className="col-sm-6 mb-3 mt-3" key={item.$id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-success">{item.title}</h5>
                <p className="card-text">{item.content.substr(0,100)}...</p>
                <Link href={"/blogpost/" + item.slug} className="btn btn-primary">
                  Read more.
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


  {/* <div className="col-sm-6 mb-3 mt-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title text-success">ম্যানুয়াল থেরাপি বোঝার গুরুত্ব: হাতের কাজের পদ্ধতি দিয়ে স্বাস্থ্যকর হোন।</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Read more</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6 mb-3 mt-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title text-success">ক্রীড়াবিদ্যার আঘাত প্রতিরোধ: ফিজিওথেরাপি আপনাকে খেলাযোগ্য রেখে রাখতে পারে।</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Read more</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6 mb-3 mt-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title text-success">ক্রোনিক ব্যথা পরিচালনা: দীর্ঘমেয়াদী ব্যথার জন্য ফিজিওথেরাপির শক্তি জানুন।</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Read more</a>
      </div>
    </div>
  </div> */}














// const Blog = () => {
//   return <div>
// <div className="four-card ">
// <div className="four-card-text container">
//     <h1>নিয়মিত আমাদের <span>ব্লগ</span>&nbsp;পড়ার মাধ্যমে নিজের শারীরিক সুস্থতা নিয়ে আরো বেশী সচেতন হোন।</h1>
//     <p> ফিজিওথেরাপি বাংলা ব্লগ: স্বাস্থ্যমন্দ জীবনের প্রথম ধাপ</p>
//   </div>
// </div>

// <div className="container">
// <div className="row">
//   <div className="col-sm-6 mb-3 mt-3">
//     <div className="card">
//       <div className="card-body">
//         <h5 className="card-title text-success">ফিজিওথেরাপির উপকার জানুন: আপনার পুনরুদ্ধার পথে সহায়তা করুন।</h5>
//         <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
//         <a href="#" className="btn btn-primary">Read more</a>
//       </div>
//     </div>
//   </div>

  
//   <div className="col-sm-6 mb-3 mt-3">
//     <div className="card">
//       <div className="card-body">
//         <h5 className="card-title text-success">ম্যানুয়াল থেরাপি বোঝার গুরুত্ব: হাতের কাজের পদ্ধতি দিয়ে স্বাস্থ্যকর হোন।</h5>
//         <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
//         <a href="#" className="btn btn-primary">Read more</a>
//       </div>
//     </div>
//   </div>
//   <div className="col-sm-6 mb-3 mt-3">
//     <div className="card">
//       <div className="card-body">
//         <h5 className="card-title text-success">ক্রীড়াবিদ্যার আঘাত প্রতিরোধ: ফিজিওথেরাপি আপনাকে খেলাযোগ্য রেখে রাখতে পারে।</h5>
//         <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
//         <a href="#" className="btn btn-primary">Read more</a>
//       </div>
//     </div>
//   </div>
//   <div className="col-sm-6 mb-3 mt-3">
//     <div className="card">
//       <div className="card-body">
//         <h5 className="card-title text-success">ক্রোনিক ব্যথা পরিচালনা: দীর্ঘমেয়াদী ব্যথার জন্য ফিজিওথেরাপির শক্তি জানুন।</h5>
//         <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
//         <a href="#" className="btn btn-primary">Read more</a>
//       </div>
//     </div>
//   </div>


// </div>
// </div>
// <Cta2 />
//   </div>;
// };

// export default Blog;


  // const promise = databases.createDocument(
    //     '6492052992e6a1900b7f',
    //     '64920548a6794540bb44',
    //     ID.unique(),
    //     {title: 'Hello World',content: 'How are you?'}
    // );
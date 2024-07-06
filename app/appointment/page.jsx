"use client"
import { useState } from 'react';
import emailjs from 'emailjs-com';

const MyComponent = () => {
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_yyvvcgi', 'template_jsrox3w', e.target, 'Pd44FMJUaBg23JBCt')
      .then(
        (result) => {
          console.log(result.text);
          setEmailSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <section className="four-card">
<div className="four-card-text container">
    <h1 className="txt-color"><span>শফিকুল ইসলাম ফিজিওথেরাপি সেন্টারে </span> <br/>আপনার এপয়েন্টমেন্ট নিশ্চিত করতে নিচের ফর্মটি সঠিক ভাবে পূরণ করুন  </h1>
    <p className='mt-4'> অভিজ্ঞ এবং ডিগ্রিধারী বিশেষজ্ঞ ফিজিওথেরাপিস্টদের মাধ্যমে রোগীদের সঠিক সেবা নিশ্চিত করতেই আমাদের এই অনলাইন প্লাটফর্ম ।</p>
  </div>


  


  </section>

  <div className='container col-md-6 border rounded p-4 mt-3 bg-secondary text-white'>
  <div className="text-center d-flex justify-content-center">
     <h2 className="col-5 rounded mb-4 text-light shadow-lg">এপয়েন্টমেন্ট ফর্ম</h2>
</div>
      {emailSent ? (
        <p>Appointment request sent successfully!</p>
      ) : (
        <form onSubmit={sendEmail}>
        <div className="form-group">
        <label>রোগীর নাম *</label>
          <input type="text" className="form-control" name="to_name" placeholder="এখানে রোগীর পূর্ণ নাম লিখুন  *" required />
        </div>
        <div className="form-group">
        <label className='mt-2'>মোবাইল নাম্বার *</label>
          <input type="text" className="form-control" name="phone" placeholder="রোগীর মোবাইল নাম্বার *" required />
        </div>
        <div className="form-group">
        <label className='mt-2'>ইমেইল এড্রেস (আবশ্যিক নয়)</label>
          <input type="email" className="form-control" name="to_email" placeholder="ইমেইল এড্রেস দিন"/>
        </div>
        <div className="form-group">
        <label className='mt-2'>এপয়েন্টমেন্টের তারিখ সিলেক্ট করুন  *</label>
          <input type="date" className="form-control"  name="date"  required />
        </div>
        <div className="form-group">
          <label htmlFor="selectOption" className='mt-2'>এপয়েন্টমেন্টের সময় সিলেক্ট করুন  *</label>
          <select className="form-control" name="selectOption" id="selectOption" required>
            <option value="">Choose appointment time</option>
            <option value="4.00pm">5.00pm</option>
            <option value="4.30pm">5.30pm</option>
            <option value="5.00pm">6.00pm</option>
            <option value="6.00pm">6.30pm</option>
            <option value="7.00pm">7.00pm</option>
          </select>
        </div>
        <div className="form-group">
        <label htmlFor="message" className='mt-2'>রোগীর সমস্যা *</label>
          <textarea className="form-control" name="message" placeholder="রোগীর সমস্যা লিখুন " required></textarea>
        </div>
        <div className="col-md-12 text-center mt-3">
        <button type="submit" className="btn_custom btn_custom-primary">এপয়েন্টমেন্ট কনফার্ম  করুন</button>
        </div>
      </form>
      )}
      </div>

      <div className="container text-center">
    <h3 className="text-danger mt-3">নির্দেশনা </h3>
  <ol className="list-group list-group-flush">
  <li className="list-group-item">অনুগ্রহ করে আপনার নামটি সঠিকভাবে দিন। </li>
  <li className="list-group-item">আপনার সঠিক ফোন নাম্বার দিন। </li>
  <li className="list-group-item">সঠিক ইমেইল এড্রেস দিন। </li>
  <li className="list-group-item">আপনার সমস্যাটি বিস্তারিত লিখুন। </li>
  <li className="list-group-item">এপয়েন্টমেন্ট কনফার্ম করার পূর্বে সবকিছু ভালোভাবে চেক করে নিন। </li>
</ol>
  </div>
    </div>
  );
};

export default MyComponent;














// import React from "react";


// const page = () => {
  
//   return <div>

// <section className="four-card">
// <div className="four-card-text container">
//     <h1 className="txt-color"><span>শফিকুল ইসলাম ফিজিওথেরাপি সেন্টারে </span> <br />আপনার এপয়েন্টমেন্ট নিশ্চিত করতে নিচের ফর্মটি সঠিক ভাবে পূরণ করুন  </h1>
//     <p> অভিজ্ঞ এবং ডিগ্রিধারী বিশেষজ্ঞ ফিজিওথেরাপিস্টদের মাধ্যমে রোগীদের সঠিক সেবা নিশ্চিত করতেই আমাদের এই অনলাইন প্লাটফর্ম ।</p>
//   </div>


//   <div className="container">
//      <h1 className="text-center">এপয়েন্টমেন্ট ফর্ম</h1>
    
//     <div className="row ">
//       <div className="col-lg-7 mx-auto">
//         <div className="card mt-2 mx-auto p-4 bg-light">
//             <div className="card-body bg-light">
       
//             <div class = "container">
//         <form action="https://formspree.io/f/mvojgnyz"
//   method="POST" id="contact-form" role="form">

            

//             <div className="controls">

//                 <div className="row">
//                     <div className="col-md-6">
//                         <div className="form-group">
//                             <label htmlFor="name">নাম  *</label>
//                             <input id="name" type="text" name="name" className="form-control" placeholder="এখানে আপনার পূর্ণ নাম লিখুন  *" required="required" data-error="Firstname is required."/>
                            
//                         </div>
//                     </div>

//                     <div className="col-md-6">
//                         <div className="form-group">
//                             <label htmlFor="phone">মোবাইল নাম্বার *</label>
//                             <input id="phone" type="text" name="phone" className="form-control" placeholder="এখানে আপনার ফোন নাম্বার দিন  *" required="required" data-error="Lastname is required."/>
//                                                             </div>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-md-6">
//                         <div className="form-group">
//                             <label htmlFor="email">ইমেইল  *</label>
//                             <input id="email" type="email" name="email" className="form-control" placeholder="ইমেইল এড্রেস টি দিন  *" required="required" data-error="Valid email is required."/>
                            
//                         </div>
//                     </div>
//                     <div className="col-md-6">
//                         <div className="form-group">
//                             <label htmlFor="date">এপয়েন্টমেন্টের তারিখ সিলেক্ট করুন  *</label>
//                             <input id="date" type="date" name="date" className="form-control" placeholder="ইমেইল এড্রেস টি দিন  *" required="required" data-error="Valid email is required."/>
                            
//                         </div>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-md-12">
//                         <div className="form-group">
//                             <label htmlFor="message">Message *</label>
//                             <textarea id="message" name="message" className="form-control" placeholder="এখানে আপনার সমস্যাটি এখানে লিখুন । " rows="4" required="required" data-error="Please, leave us a message."></textarea
//                                 >
//                             </div>

//                         </div>


//                     <div className="col-md-12 text-center mt-3">
                        
//                         <input type="submit" className="btn_custom btn_custom-primary" value="কনফার্ম  করুন " />
                    
//                 </div>
          
//                 </div>


//         </div>
//          </form >
//         </div>
//             </div>


//     </div>
     

//     </div>
 

// </div>
// </div>


//   </section>
//   <div className="container text-center">
//     <h3 className="text-danger">নির্দেশনা </h3>
//   <ol className="list-group list-group-flush">
//   <li className="list-group-item">অনুগ্রহ করে আপনার নামটি সঠিকভাবে দিন। </li>
//   <li className="list-group-item">আপনার সঠিক ফোন নাম্বার দিন। </li>
//   <li className="list-group-item">সঠিক ইমেইল এড্রেস দিন। </li>
//   <li className="list-group-item">আপনার সমস্যাটি বিস্তারিত লিখুন। </li>
//   <li className="list-group-item">অ্যাপয়েন্টমেন্ট কনফার্ম করার পূর্বে সবকিছু ভালোভাবে চেক করে নিন। </li>
// </ol>
//   </div>
//   </div>;
//   };

// export default page;
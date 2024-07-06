"use client";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import "bootstrap/dist/css/bootstrap.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";
// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

// ..

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i%7CRajdhani:400,600,700"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link rel="icon" href="favicon.ico" />
        <title>SPRCBD MANIPULATION THERAPY || BEST PHYSIOTHERAPY CENTER IN CHITTAGONG</title>
        <meta property="og:title" content="SPRCBD MANIPULATION THERAPY || BEST PHYSIOTHERAPY CENTER IN CHITTAGONG" />
        <meta property="og:description" content="আন্তরিক সেবা দানে প্রতিশ্রুতিবদ্ধ
শফিকুল ফিজিওথেরাপি এন্ড রিহ্যাবিলিটেশন সেন্টারে (SPRC)
অভিজ্ঞ এবং ডিগ্রিধারী বিশেষজ্ঞ ফিজিওথেরাপিস্টদের মাধ্যমে রোগীদের সঠিক সেবা নিশ্চিত করতেই আমাদের এই অনলাইন প্লাটফর্ম ।" />
        <meta property="og:image" content="https://i.ibb.co/52g30mV/preview-thumbnail.jpg" />
        <meta property="og:url" content="https://sprcbd.com" />
      </head>
      <body suppressHydrationWarning={true} className={inter.className}>
        
       
          {children}
       


        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" />
      </body>
    </html>
  );
}

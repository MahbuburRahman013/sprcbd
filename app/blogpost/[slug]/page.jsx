"use client"
import React from "react";
import { useEffect, useState } from 'react';
import { Client, Databases, ID, Query } from 'appwrite';
import Cta2 from "/components/Cta2";

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('64935a13920799c1729f');


const page = ({params}) => {
  const slug = params.slug;
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const databases = new Databases(client);

    const promise = databases.listDocuments('64935a81b30d4699fbf3', '64935a92791b6004745c',[Query.equal("slug",[slug,])]);

    promise.then(function (response) {
        console.log(response);
        setBlog(response.documents[0])
      },function (error) {
        console.log(error);
      });
  }, []);


  return <> 
  <div class="container">
    <div class="row">
      <div class="col-md-12 mt-4">
        <h1 className="text-center mb-4 text-primary">{blog.title}</h1>
        <p className="text-lg" dangerouslySetInnerHTML={{__html:blog?.content}}></p>
      </div>
    </div>
  </div>
  <Cta2 />
  </>;
};

export default page;

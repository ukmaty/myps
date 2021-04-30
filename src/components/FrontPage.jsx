import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import * as contentful from "contentful";
import PostList from "./PostList";

const FrontPage = () => {
  const [works, setWorks] = useState();

  const client = contentful.createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_CDA_TOKEN,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await client.getEntries({ content_type: "works" });
        setWorks(resp.items);
      } catch (error) {
        console.log("error: ", error);
      }
    };
    fetchData();
  }, [works, client]);
  return (
    <>
      <h1>Front Page Title</h1>
      <Nav />
      <PostList works={works} />
    </>
  );
};

export default FrontPage;

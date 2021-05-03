import { memo, useState, useEffect } from "react";
import * as contentful from "contentful";

import Cover from "../Cover";
import Nav from "../Nav";
import PostList from "../PostList";

const HomePage = memo(() => {
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
  }, []);

  return (
    <>
      <Cover />
      <Nav />
      <PostList works={works} />
    </>
  );
});

export default HomePage;

import React, { memo, useState, useEffect, useCallback } from "react";
import * as contentful from "contentful";

import Nav from "../Nav";
import PostList from "../PostList";

const WorksPage = memo(() => {
  const [works, setWorks] = useState();

  const client = contentful.createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_CDA_TOKEN,
  });

  const fetchData = useCallback( async () => {
      try {
        const resp = await client.getEntries({ content_type: "works" });
        setWorks(resp.items);
      } catch (error) {
        console.log("error: ", error);
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <h1>Works</h1>
      <Nav />
      <PostList works={works} />
    </>
  );
});

export default WorksPage;

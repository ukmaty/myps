import React, { useState, useEffect, useCallback } from "react";
import * as contentful from "contentful";
import './App.css';

function App() {
  const [works, setWorks] = useState();
  const client = contentful.createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_CDA_TOKEN 
  });

  useEffect(() => {
      fetchData();
    }, [works]
  );

  const fetchData = useCallback(
    async() => {
    try {
      const resp = await client.getEntries({content_type: "works"});
      setWorks(resp.items);
    } catch(error) {
      console.log("error: ", error);
    }
  });

  return (
    <div className="App">
      <PostList works={works}/>
    </div>
  );
}

const PostList = ({works}) => {
  return (
    <>
      <div>Post list</div>
      <ul>
        { works && 
          works.map((work, key) => {
            return (
              <li key={key}>
                <h2>{work.fields.title}</h2>
                <div>{work.fields.subtitle}</div>
                <div>{work.fields.slug}</div>
              </li>
            )
          })
        }
      </ul>
    </>
  )
};

export default App;

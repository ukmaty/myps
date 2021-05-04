import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import * as contentful from "contentful";

import DetailContent from "../DetailContent";

const DetailPage = () => {
  const client = contentful.createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_CDA_TOKEN,
  });
  const { slug } = useParams();
  const [work, setWork] = useState();

  
  const fetchData = useCallback( async () => {
      try {
        const resp = await client.getEntries({
          content_type: "works",
          "fields.slug[in]": slug,
        });
        setWork(resp.items[0].fields);
      } catch (error) {
        console.log("error: ", error);
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const resp = await client.getEntries({
  //         content_type: "works",
  //         "fields.slug[in]": slug,
  //       });
  //       setWork(resp.items[0].fields);
  //     } catch (error) {
  //       console.log("error:", error);
  //     }
  //   };
  //   fetchData();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return <DetailContent work={work} />;
};

export default DetailPage;

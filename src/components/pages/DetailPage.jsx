import { useState, useEffect } from "react";
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await client.getEntries({
          content_type: "works",
          "fields.slug[in]": slug,
        });
        setWork(resp.items[0].fields);
      } catch (error) {
        console.log("error:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <DetailContent work={work}/>
  );
};

export default DetailPage;

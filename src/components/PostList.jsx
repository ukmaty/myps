import { memo } from "react";
import { Link } from "react-router-dom";

const PostList = memo(({works}) => {
  return (
    <section>
      <h1>Post list</h1>
      <ul>
        {works &&
          works.map((work, key) => {
            return (
              <li key={key}>
                <Link to={`/works/${work.fields.slug}`}>
                  <h2>{work.fields.title}</h2>
                  <div>{work.fields.subtitle}</div>
                  <div>{<img src={work.fields.image.fields.file.url} alt="hoge" />}</div>
                </Link>
              </li>
            );
          })}
      </ul>
    </section>
  );
});

export default PostList;

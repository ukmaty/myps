const PostList = (props) => {
  const works = props.works;

  return (
    <>
      <div>Post list</div>
      <ul>
        {works &&
          works.map((work, key) => {
            return (
              <li key={key}>
                <h2>{work.fields.title}</h2>
                <div>{work.fields.subtitle}</div>
                <div>{work.fields.slug}</div>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default PostList;

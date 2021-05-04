import { memo } from "react";
import marked from "marked";

const DetailContent = memo(({ work }) => {
  return (
    <article>
      {work && (
        <>
          <section>
            <h1>{work.title}</h1>
            <div className="coverImage">
              <i>
                <img
                  src={work.image.fields.file.url}
                  alt={work.image.fields.title}
                  title={work.image.fields.title}
                />
              </i>
            </div>
            <p>{work.subtitle}</p>
          </section>
          <section>
            <ul>
              {work.images &&
                work.images.map((image, key) => {
                  return (
                    <li key={key}>
                      <img
                        src={image.fields.file.url}
                        alt={image.fields.title}
                        title={image.fields.title}
                      />
                    </li>
                  );
                })}
            </ul>
          </section>
          <section
            dangerouslySetInnerHTML={{ __html: marked(work.content) }}
          ></section>
        </>
      )}
    </article>
  );
});

export default DetailContent;

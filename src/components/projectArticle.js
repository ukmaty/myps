import React from "react";
import {css} from "@emotion/react";

const SSection = css`
h1 {
font-size: 2rem;
margin-top: 4rem;
margin-bottom: 1rem;
}
h2 {
font-size: 1.5rem;
margin-top: 3rem;
margin-bottom: .75rem;        
}
`;

const ProjectArticle = ({ image, content }) => {

    console.log(image)

    return (
        <>

            {
                image &&
                <div>
                    <img src={image.file.url} alt={image.title} />
                </div>
            }
            {
                content &&
                <section dangerouslySetInnerHTML={{ __html: content }} css={SSection}/>
            }
        </>
    )
};

export default ProjectArticle;

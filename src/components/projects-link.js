import React from "react";
import { Link } from "gatsby";

const ProjectsLink = ({ work }) => {
    const { title, slug } = work;
    const pageLink = `/projects/${slug}/`;

    return (
        <li>
            <Link to={pageLink}>
                <div>
                    <h2>{title}</h2>
                    <p>{slug}</p>
                </div>
            </Link>
        </li>
    )
};

export default ProjectsLink;

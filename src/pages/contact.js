import React from "react";
import {css} from "@emotion/react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import PageTitle from "../components/pageTitle";
import ContactForm from "../components/contactForm";

const SContactDescription = css`
grid-column: 1/-1;
`;

const ContactPage = () => {
    return (
        <Layout>
            <Seo title="CONTACT" description={`Gatsby site`} />
            <PageTitle>contact</PageTitle>
            <p css={SContactDescription}>ご相談、お見積りのご依頼など、お気軽にお問い合わせください。 確認の上、返信させていただきます。</p>
            <ContactForm />
        </Layout>
    )
};

export default ContactPage;

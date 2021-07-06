import React from "react";
import { css } from "@emotion/react";
import Layout from "../components/layout";
import PageTitle from "../components/pageTitle";

const SMessage = css`
grid-column: 1/-1;
`;

const Thanks = () => (
    <Layout>
        <PageTitle>Thank you for your message!</PageTitle>
        <p css={SMessage}>お問い合せありがとうございます。<br/>受け付けました。</p>
    </Layout>
)

export default Thanks;

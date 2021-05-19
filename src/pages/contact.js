import * as React from "react";
import Layout from "../components/layout";

const ContactPage = () => (
    <Layout>
        <h1>contact</h1>
        <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <label> Email <input type="email" name="email" /> </label>
            <label> Name <input type="text" name="name" /> </label>
            <label> Message <input type="text" name="message" /> </label>
        </form>
    </Layout>
);

export default ContactPage;

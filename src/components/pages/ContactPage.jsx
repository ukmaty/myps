import React, { useState, useEffect } from "react";
import Nav from "../Nav";

export default function Contact() {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
    }
  }, []);

  return (
    <section>
      <h1>CONTACT</h1>
      <Nav />
      <div>
        {success && <p style={{ color: "green" }}>Thanks for your message!</p>}
      </div>
      <div>
        <form
          name="contact"
          method="POST"
          action="/contact/?success=true"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />

          <ul>
            <li>
              <label htmlFor="name">Name</label>
              <div>
                <input id="standard-basic" label="name" name="name" /> <br />
              </div>
            </li>
            <li>
              <label htmlFor="email">Mail Addreess</label>
              <div>
                <input id="standard-basic" label="email" name="email" /> <br />
              </div>
            </li>
            <li>
              <label htmlFor="message">Message</label>
              <div>
                <textarea
                  multiline
                  id="standard-multiline-static"
                  label="message"
                  name="message"
                ></textarea>
              </div>
            </li>
          </ul>

          <div>
            <button type="submit">Send</button>
          </div>
        </form>

      </div>
    </section>
  );
}

// import ContactForm from "./ContactForm";

// const ContactPage = () => {
//     return (
//         <>
//           <h1>Contact Page</h1>
//           <div>
//               <ContactForm />
//           </div>
//         </>
//     )
// }

// export default ContactPage;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Final code
import React, { useState, useEffect } from "react";

export default function Contact() {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
    }
  }, []);

  return (
    <div>
      <h2>CONTACT</h2>
      {success && <p style={{ color: "green" }}>Thanks for your message! </p>}
      <div>
        <form
          name="contact"
          method="POST"
          action="/contact/?success=true"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input id="standard-basic" label="name" name="name" /> <br />
          <input id="standard-basic" label="email" name="email" /> <br />
          <textarea
            multiline
            id="standard-multiline-static"
            label="message"
            name="message"
          ></textarea>
          <div>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

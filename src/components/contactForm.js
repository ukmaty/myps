import React from "react";
import { css } from "@emotion/react";

const SForm = css`
grid-column: 1/-1;
display: grid;
padding: 2rem;
background-color: #8b9eff;
border-radius: 4px;

@media screen and (max-width: 600px) {
padding: 1.5rem;
}
`;

const SFormInput = css`
display: block;
margin-top: .25rem;
padding: 1rem;
width: 100%;
border-radius: 4px;
background-color: #ffffff;
transition: 0;
&:focus {
outline: none;
background-color: #E7F2FB; 
}
`;

const SFormTextarea = css`
display: block;
margin-top: .25rem;
padding: 1rem;
width: 100%;
background-color: #ffffff;
border-radius: 4px;
line-height: 1.6;

&:focus {
outline: none;
background-color: #E7F2FB;
}
`;

const SFormItem = css`
&:not(:first-of-type) {
margin-top: 2rem;
}
`;

const SButtonContainer = css`
display: flex;
justify-content: space-around;
margin-top: 2rem;
`;

const SOutlineButton = css`
border: solid 2px #fff;
padding: 1rem 2rem;
border-radius: 4px;
color: #ffffff;
background-color: transparent;
transition: .2s;

&:hover {
background-color: #5974fe;
filter: drop-shadow(0 4px 0 rgba(0, 0, 0, .25));
}

&:active {
filter: none;
}
`;

const SCancelButton = css`
&:hover {
background-color: #5974fe;
filter: drop-shadow(0 4px 0 rgba(0, 0, 0, .25));
}

&:active {
filter: none;
}
`;

const SFormLabel = css`
color: #ffffff;
`;

const ContactForm = () => {
    return (
        <>
            <form
                autoComplete="off"
                name="contact"
                method="post"
                data-netlify="true"
                netlify-honeypot="bot-field"
                action="/thanks/"
                css={SForm}
            >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="contact" value="contact" />
                <noscript><p>Won't work with JavaScript disabled...</p></noscript>

                <div css={SFormItem}>
                    <label htmlFor="name" css={SFormLabel}>Name</label>
                    <div>
                        <input type="text" id="name" name="name" placeholder="お名前" maxLength="30" minLength="2" required autoComplete="name" css={SFormInput} />
                    </div>
                </div>
                <div css={SFormItem}>
                    <label htmlFor="email" css={SFormLabel}>Email</label>
                    <div>
                        <input type="email" id="email" name="email" placeholder="メールアドレス" pattern="^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" required autoComplete="email" css={SFormInput} />
                    </div>
                </div>
                <div css={SFormItem}>
                    <label htmlFor="message" css={SFormLabel}>Message</label>
                    <div>
                        <textarea id="contact" name="message" rows="8" placeholder="メッセージをどうぞ" required css={SFormTextarea} /></div>
                </div>
                <div css={[SFormItem, SButtonContainer]}>
                    <button type="submit" css={SOutlineButton}>送信</button>
                    <input type="reset" value="Clear" css={[SOutlineButton, SCancelButton]} />
                </div>
            </form>

        </>
    )
};

export default ContactForm;

import * as React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  render() {
    return (
      <div>
        <Layout>
        <section className="section">
      <div className="container">
        <div className="content">
          <div className="center-wrapper">
          <h1>Let's talk</h1>
              <p className="intro">Hey there! If you need mentorship, are exploring freelance opportunities, or simply want to connect with me, I'm here for you. Although I'm passionate about my current role and not actively seeking full-time positions, I'm always open to sharing my knowledge and exploring exciting freelance projects. Let's have a chat and collaborate to create amazing things together. Looking forward to hearing from you!</p>
              <form
                name="connect"
                method="post"
                action="/connect/success"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
                className="intro"
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"first-name"}>
                    First Name
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={"text"}
                      name={"first-name"}
                      onChange={this.handleChange}
                      id={"first-name"}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"last-name"}>
                    Last Name
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={"text"}
                      name={"last-name"}
                      onChange={this.handleChange}
                      id={"last-name"}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"email"}>
                    Email
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={"email"}
                      name={"email"}
                      onChange={this.handleChange}
                      id={"email"}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"message"}>
                    Message
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={"message"}
                      onChange={this.handleChange}
                      id={"message"}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"freelance-request"}>
                    Freelance Opportunities
                  </label>
                  <div className="control">
                    <input
                      type={"checkbox"}
                      name={"freelance-request"}
                      id={"freelance-request"}
                      value={"Requested Freelance Info: True"}
                    />
                    <span style={{marginLeft: "1rem"}}>I'm interested in your work and would like more information about your freelance services and availability.</span>
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"update-availability"}>
                    Full-time Availability
                  </label>
                  <div className="control">
                    <input
                      type={"checkbox"}
                      name={"update-availability"}
                      id={"update-availability"}
                      value={"Requested Resume: True"}
                    />
                    <span style={{marginLeft: "1rem"}}>I'm a recruiter and would like to stay updated on your availability for future opportunities. Please send me your resume when you're open to new opportunities.</span>
                  </div>
                </div>
                <div className="field">
                  <button className="button-link" style={{marginTop: "1rem"}} type="submit">
                    Send
                  </button>
                </div>
              </form>
          </div>
        </div>
      </div>
     </section>
      </Layout>
      </div>
    );
  }
}

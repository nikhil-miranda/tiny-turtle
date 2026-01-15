import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [buttonText, setButtonText] = useState("Send Message");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!message.trim()) {
      newErrors.message = "Message is required";
    } else if (message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitError("");
    setSubmitSuccess(false);

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setButtonText("Sending...");

    try {
      const response = await fetch(
        "https://hunter.nikhilmiranda.com/arsenal/website-contact-message",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        },
      );

      if (response.ok) {
        setButtonText("Message Sent!");
        setSubmitSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
        setErrors({});
        setTimeout(() => {
          setButtonText("Send Message");
          setSubmitSuccess(false);
        }, 5000);
      } else {
        const errorData = await response.json().catch(() => ({}));
        setSubmitError(
          errorData.message || "Failed to send message. Please try again.",
        );
        setButtonText("Send Message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitError(
        "Network error. Please check your connection and try again.",
      );
      setButtonText("Send Message");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>
          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">E-Mail</h3>
              <span className="contact__card-data">
                nikhil.miranda@gmail.com
              </span>
              <a
                href="mailto:nikhil.miranda@gmail.com"
                className="contact__button"
                aria-label="Send email to Nikhil Miranda"
              >
                Write to me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bx-phone contact__card-icon"></i>
              <h3 className="contact__card-title">Contact Number</h3>
              <span className="contact__card-data">(+91) 897 172 3022</span>
              <a
                href="tel:+918971723022"
                className="contact__button"
                aria-label="Call Nikhil Miranda"
              >
                Talk to me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Send me a message</h3>

          {submitSuccess && (
            <div className="contact__success-message">
              Thank you! Your message has been sent successfully.
            </div>
          )}

          {submitError && (
            <div className="contact__error-message">{submitError}</div>
          )}

          <form onSubmit={handleSubmit} className="contact__form" noValidate>
            <div className="contact__form-div">
              <label htmlFor="contact-name" className="contact__form-tag">
                Name
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name) setErrors({ ...errors, name: "" });
                }}
                className={`contact__form-input ${errors.name ? "contact__form-input--error" : ""}`}
                placeholder="Insert your name"
                disabled={isLoading}
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <span id="name-error" className="contact__form-error">
                  {errors.name}
                </span>
              )}
            </div>

            <div className="contact__form-div">
              <label htmlFor="contact-email" className="contact__form-tag">
                E-mail
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors({ ...errors, email: "" });
                }}
                className={`contact__form-input ${errors.email ? "contact__form-input--error" : ""}`}
                placeholder="Insert your e-mail"
                disabled={isLoading}
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <span id="email-error" className="contact__form-error">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="contact__form-div contact__form-area">
              <label htmlFor="contact-message" className="contact__form-tag">
                Message
              </label>
              <textarea
                name="message"
                id="contact-message"
                cols="30"
                rows="10"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (errors.message) setErrors({ ...errors, message: "" });
                }}
                className={`contact__form-input ${errors.message ? "contact__form-input--error" : ""}`}
                placeholder="Ask me anything"
                disabled={isLoading}
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby={errors.message ? "message-error" : undefined}
              ></textarea>
              {errors.message && (
                <span id="message-error" className="contact__form-error">
                  {errors.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="button button--flex"
              disabled={isLoading}
              aria-busy={isLoading}
            >
              {buttonText}
              <svg
                className="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                  fill="var(--container-color)"
                ></path>
                <path
                  d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                  fill="var(--container-color)"
                ></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

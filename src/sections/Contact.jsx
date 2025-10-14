import React from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e)=>{
    e.preventDefault();
    setLoading(true);
    try {
    console.log("From submitted: ",formData);
    emailjs.send("service_hv7tvqx","template_utnk5iw", {
        from_name: formData.name,
        to_name: "Kelia",
        from_email: formData.email,
        to_email: "simbikelia@gmail.com",
        message: formData.message,
    }, "uiGSthxnRKhKu1qYE")
    setLoading(false);
    alert("Thank you. I will get back to you as soon as possible.");
    setformData({
        name: "",
        email: "",
        message: "",
      });
} catch (error) {
    setLoading(false);
    console.log(error);
    alert("Something went wrong.");
}
    //service_hv7tvqx
    //template_utnk5iw
  }
  return (
    <section className="relative flex items-center c-space section-spacing">
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's connect!</h2>
          <p className="font-normal text-neutral-400">
            I’m always excited to connect and collaborate! Whether you have a
            project idea, a question, or just want to say hi, feel free to reach
            out. Let’s create something amazing together.
          </p>
        </div>
        <form action="" className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Full names:{" "}
            </label>
            <input
              type="text"
              id="name"
              className="field-input field-input-focus"
              placeholder="Jane Doe"
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="field-label">
              Your Email:
            </label>
            <input
              type="text"
              id="email"
              className="field-input field-input-focus"
              placeholder="Jandoe@fmail.com"
              required
              name="email"
              onChange={handleChange}
              value={formData.email}
              autoComplete="email"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="field-label">
              Your message:{" "}
            </label>
            <textarea
              type="text"
              id="message"
              className="field-input field-input-focus"
              placeholder="Message...."
              required
              name="message"
              value={formData.message}
              rows="4"
              onChange={handleChange}
              autoComplete="message"
            />
          </div>
          <button type="submit" className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation" >
            {!loading ? "Send" : "sending...."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

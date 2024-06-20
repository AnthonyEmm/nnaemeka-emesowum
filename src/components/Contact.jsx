import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_KEY_SERVICE_ID,
        import.meta.env.VITE_KEY_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_KEY_USER_ID,
      )
      .then(
        () => {
          console.log("Email sent!");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          notify(); // Call notification function on success
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  const notify = () => {
    toast.success("Email sent Successfully", {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <section
      id="contact"
      className="contact flex justify-center items-center text-white min-h-screen"
    >
      <div className="w-full max-w-sm md:max-w-md lg:max-w-lg shadow-xl shadow-gray-500/40">
        <div className="py-8 px-6 shadow rounded-lg sm:px-10">
          <h2 className="text-5xl font-extrabold text-center">Get In Touch</h2>
          <form ref={form} onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label htmlFor="name" className="block text-xl font-bold">
                Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm
                   placeholder-gray-800 focus:outline-none sm:text-lg text-white font-bold bg-transparent"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-xl font-bold">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm
                   placeholder-gray-800 focus:outline-none sm:text-lg text-white font-bold bg-transparent"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-xl font-bold">
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm
                   placeholder-gray-800 focus:outline-none sm:text-lg resize-none text-white font-bold bg-transparent"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm 
                text-xl font-bold bg-gray-800 text-white focus:outline-none focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
};

export default ContactUs;

import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    messageReason: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phoneNumber ||
      !formData.message
    ) {
      alert("Please fill in all the required fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!/^\d+$/.test(formData.phoneNumber)) {
      alert("Please enter a valid phone number.");
      return;
    }

    try {
      const response = await fetch(
        "https://qwik-backend-sl24.onrender.com/api/submit-form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Your message has been submitted. We'll get back to you soon!");
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          messageReason: "",
          message: "",
        });
      } else {
        alert(data.message || "Error submitting form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your message. Please try again.");
    }
  };

  return (
    <div className="bg-[#F4F5F7] min-h-screen">
      <section className="container mx-auto py-16 px-4">
        <div className="flex flex-col mx-1">
          <h1 className="text-xl italic px-8 font-bold text-[#6C5E46] mb-2">
            Get In Touch With Us
          </h1>
          <p className="px-8 py-3 mb-3 font-semibold">
            Whether you have questions about our services,
            <br />
            need help planning your event, or just want to say hello,
            <br />
            we’d love to hear from you.
            <br />
            Reach out using the form below or contact us directly.
          </p>
        </div>

        <div className="p-8 rounded-lg mt-8">
          <form onSubmit={handleSubmit}>
            <div className="gap-4 space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-400 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C5E46]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-400 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#6C5E46]"
                />
              </div>

              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-400 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C5E46]"
                />
              </div>

              <div>
                <label
                  htmlFor="messageReason"
                  className="block text-sm font-medium text-gray-700"
                >
                  Reason for Message
                </label>
                <input
                  type="text"
                  id="messageReason"
                  name="messageReason"
                  placeholder="Reason for Message"
                  value={formData.messageReason}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-400 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C5E46]"
                />
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Send a message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="mt-1 p-2 w-full bg-gray-100 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C5E46]"
              />
            </div>

            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="bg-[#6C5E46] hover:bg-[#4e4432] text-white font-bold py-2 px-4 rounded-md"
              >
                Send a Message
              </button>
            </div>
          </form>
        </div>
        <div className="p-8 rounded-lg">
          <h1 className="text-2xl font-bold mb-4 italic">
            Direct Contact Information:
          </h1>
          <p className="text-lg mb-2 font-bold">
            Phone:
            <span className="text-sm">(123) 456-7890</span>
          </p>
          <p className="text-lg mb-2 font-bold gap-1">
            Email:
            <span className="text-sm"> hello@yourbusiness.com</span>
          </p>
          <p className="text-lg mb-2 font-bold">
            Address:
            <span className="text-sm">123 Event Lane</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;

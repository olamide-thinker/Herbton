"use client";
import SecondHero from "@/components/sharedUi/SecondHero";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

// A simple contact form component
const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formError, setFormError] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic form validation
    const errors = { name: "", email: "", message: "" };
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.message) errors.message = "Message is required";

    setFormError(errors);

    if (Object.values(errors).every((error) => error === "")) {
      // Form is valid, handle form submission (send data to server or something)
      console.log("Form data submitted:", formData);
      alert("Thank you for contacting us!");
    }
  };

  return (
    <div className="container space-y-8">
      {/* <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2> */}
      <SecondHero
        title={"Contact Us"}
        image={"/assets/delivery/delivery.jpg"}
      />

      {/* Contact Info Section */}
      <div className="mb-10 text-center">
        <p className="text-lg text-gray-700">
          Feel free to reach out to us using the form below or through the
          following contact information:
        </p>
        <div className="mt-6 flex gap-4 justify-center">
          <div className="text-left border p-4 rounded">
            <label className="text-left w-full">Email:</label>
            <p className="text-xl font-semibold"> support@herbton.africa</p>
          </div>
          <div className="text-left border p-4 rounded">
            <label className="text-left w-full">Phone:</label>
            <p className="text-xl font-semibold"> +123 456 7890</p>
          </div>
          <div className="text-left border p-4 rounded">
            <label className="text-left w-full">Address:</label>
            <p className="text-xl font-semibold">
              {" "}
              123 herbton , Lagos, Nigeria
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl border mb-8 mx-auto bg-white p-8 rounded-lg shadow-md"
      >
        <div className="mb-4">
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
            value={formData.name}
            onChange={handleChange}
            className="mt-2 p-3 w-full border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
          />
          {formError.name && (
            <p className="text-red-500 text-sm mt-2">{formError.name}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-2 p-3 w-full border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
          />
          {formError.email && (
            <p className="text-red-500 text-sm mt-2">{formError.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-2 p-3 w-full border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
            rows={5}
          />
          {formError.message && (
            <p className="text-red-500 text-sm mt-2">{formError.message}</p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full py-3 mt-4   font-semibold rounded-lg  focus:outline-none"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactUsPage;

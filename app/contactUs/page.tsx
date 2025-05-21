"use client";

import React from "react";
import SecondHero from "@/components/sharedUi/SecondHero"; // Adjust path as needed
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactUsPage = () => {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <SecondHero
        title="Contact Us"
        image="/assets/contact/contact.jpg" // Replace with your contact hero image
      />

      {/* Content Grid */}
      <div className="grid max-w-6xl grid-cols-1 gap-12 px-6 py-12 mx-auto md:grid-cols-2">
        {/* Contact Form */}
        <form className="flex flex-col gap-4 p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-[#034401]">
            Send Us a Message
          </h2>
          <Input placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <Input type="tel" placeholder="Phone Number" />
          <Textarea placeholder="Your Message" rows={6} required />
          <Button
            type="submit"
            className="mt-2 bg-[#034401] text-white hover:bg-[#026002]"
          >
            Send Message
          </Button>
        </form>

        {/* Contact Details */}
        <div className="flex flex-col gap-6 text-[#034401]">
          <h2 className="text-2xl font-semibold">Contact Information</h2>
          <p className="text-lg">
            <strong>Email:</strong> info@globalnewherballife.com
          </p>
          <p className="text-lg">
            <strong>Phone:</strong> +234 812 483 1039
          </p>
          <p className="text-lg">
            <strong>Address:</strong> 229, Herbert Macauley way,
            Alagomeji, Yaba.
          </p>
          <div>
            <h3 className="mt-4 text-lg font-semibold">Business Hours</h3>
            <p>Monday – Friday: 9:00 AM – 5:00 PM</p>
            <p>Saturday: 10:00 AM – 2:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;

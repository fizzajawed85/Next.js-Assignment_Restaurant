import React from 'react';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter, BsPinterest } from "react-icons/bs";

const Footer = () => {
    return (
      <div className="pt-40 container">
        <div className="grid md:grid-cols-3 gap-16">
          <div className="space-y-4">
            <h2 className="text-xl font-bold">About Us</h2>
            <p className="leading-[1.8]">
            At Epicurean Bliss, we are passionate about crafting unforgettable dining experiences. Our commitment to quality ingredients, innovative recipes, and exceptional service creates a culinary journey that delights the senses. Join us to savor the art of fine dining.
            </p>
          </div>

          <div className="space-y-4">
          <h2 className="text-xl font-bold">The Restaurant</h2>

          <ul className="space-y-2">
            <li>About Us</li>
            <li>Chefs</li>
            <li>Events</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <div className="flex gap-8 text-red text-2xl pt-16">
            <FaFacebookF />
            <BsTwitter />
            <BsPinterest />
            <FaLinkedinIn />
          </div>
        </div>
      </div>

      <div className="w-fit mx-auto pt-16 pb-8 text-[14px] sm:text-[16px]">
        &copy; Copyright 2024 All rights reserved
      </div>
    </div>
  );
};

export default Footer;
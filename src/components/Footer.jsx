import React from 'react';
import { MdMail } from "react-icons/md";
import { FaPhoneAlt, FaLinkedinIn } from "react-icons/fa";
import { CgFacebook } from "react-icons/cg";
import { AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";

function Footer() {
  return (
    <>
      <footer className="bg-primary text-white ">
        <div className="flex flex-col lg:flex-row justify-between px-10 md:px-16 lg:px-20">
          {/* Contact Us */}
          <div className="my-8 lg:my-10">
            <p className="text-xl font-normal uppercase mb-6">Contact Us</p>
            <div className="my-2 lg:my-4 flex items-center">
              <MdMail size="1.5em" />
              <p className="px-2 text-lg">customercare@teehtwin.org</p>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt size="1.5em" />
              <p className="px-2 text-lg">+1 916 462 1233</p>
            </div>
          </div>
          {/* Partner with us */}
          <div className="my-8 lg:my-10">
            <p className="text-xl font-normal uppercase mb-6">Partner With Us</p>
            <div className="my-2 lg:my-4 flex items-center">
              <MdMail size="1.5em" />
              <p className="px-2 text-lg">pr@teehtwin.org</p>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt size="1.5em" />
              <p className="px-2 text-lg">+1 916 462 1233</p>
            </div>
          </div>
          {/* Follow us */}
          <div className="my-8 lg:my-10">
            <p className="text-xl font-normal uppercase mb-6">Follow Us</p>
            <div className="my-2 lg:my-4 flex items-center">
              <div className="social-badge">
                <CgFacebook size="2em" />
              </div>
              <div className="social-badge">
                <AiFillYoutube size="2em" />
              </div>
              <div className="social-badge">
                <AiOutlineInstagram size="2em" />
              </div>
              <div className="social-badge">
                <FaLinkedinIn size="2em" />
              </div>
            </div>
          </div>
        </div>
        <p className="text-xl uppercase text-center py-5">COPY RIGHT @ 2022 ; TEE HTWIN</p>
      </footer>
    </>
  );
}

export default Footer;
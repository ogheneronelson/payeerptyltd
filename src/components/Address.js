import React from "react";

const Address = () => {
  return (
    <div style={{ marginBottom: "15px" }} className="contact-address">
      <iframe
        title="Head Office Adress"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.2525861488975!2d16.370235615060995!3d48.22101065332616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d07affa5ab857%3A0xf5c7e763b0a00aea!2sF%C3%B6rstergasse%2021%2C%201020%20Wien%2C%20Austria!5e0!3m2!1sen!2sng!4v1658566941266!5m2!1sen!2sng"
        width="100%"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Address;

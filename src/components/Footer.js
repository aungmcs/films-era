import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="flex justify-center items-center w-full bg-gray-700 py-3 mt-12 text-white">
      <p>&#169; {date.getFullYear()}</p>
      <div className="ml-3">
        <span className="mr-3">&bull;</span>
        <span className="mr-3">Created by</span>
        <i className="fab fa-twitter mr-1"></i>
        <a
          className="underline"
          href="https://twitter.com/aungmcs"
          target="_blank"
          rel="noopener noreferrer"
        >
          aungmcs
        </a>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-16">
  

      <div className="border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between text-xs text-slate-500">
          <span>
            © {new Date().getFullYear()}   All rights reserved.
          </span>
          <span>Terms · Privacy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-black text-txt py-4 px-6 flex flex-col md:flex-row items-center justify-between text-sm">
      <p>© {new Date().getFullYear()} SignFreePDF. All rights reserved.</p>

      <div className="flex gap-4 mt-2 md:mt-0">
        <a href="#" className="hover:text-logo transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-logo transition-colors">Terms</a>
        <a href="#" className="hover:text-logo transition-colors">Contact</a>
      </div>
    </footer>
  );
}

export default Footer;

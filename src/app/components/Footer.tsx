import React from "react";
import { MovieZLogo } from "./Button";
import { Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <div className=" bg-[#4338CA] flex gap-200  items-start py-10 px-20 h-60">
      <div className="flex flex-col gap-3 items-start">
        <MovieZLogo />
        <div className="text-xs">© 2024 Movie Z. All Rights Reserved.</div>
      </div>
      <div className="flex gap-24 text-sm">
        <div className="flex flex-col gap-3">
          <div>Contact information</div>
          <div className="flex gap-3">
            <div className="flex items-center">
              <Mail size={16} />
            </div>
            <div>
              <div>Email:</div>
              <div>support@movieZ.com</div>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex items-center">
              <Phone size={16} />
            </div>
            <div>
              <div>Phone:</div>
              <div>+976 (11) 123-4567</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div>Follow us</div>
          <div className="flex gap-3">
            <a href="">Facebook</a>
            <a href="">Instagram</a>
            <a href="">Twitter</a>
            <a href="">Youtube</a>
          </div>
        </div>
      </div>
    </div>
  );
};

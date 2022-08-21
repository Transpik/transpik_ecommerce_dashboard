import React from "react";
import { useLocation } from "react-router-dom";

function Location() {
  let location = useLocation();

  let pathnames = location.pathname.split("/");
  
  return (
    <div className="flex items-end font-roboto mt-8 mb-16">
      <div className="text-dark-gray text-3xl">{pathnames[1].charAt(0).toUpperCase()+pathnames[1].substring(1)}</div>
      <div className="text-base ml-4 text-secondary-dark_gray">{ pathnames[2] ? pathnames[2].charAt(0).toUpperCase()+pathnames[2].substring(1) : undefined}</div>
    </div>
  );
}

export default Location;
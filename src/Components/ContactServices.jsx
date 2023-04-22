import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWindowRestore,
  faBagShopping,
  faDiceD6,
} from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";


const ContactServices = () => {
  library.add(faWindowRestore, faBagShopping, faDiceD6, faReact);

  return (
    <div
      className="w-full sm:w-[40%] h-full flex flex-col gap-4 justify-center"
      style={{ fontFamily: "Poppins,sans-serif" }}
    >
      <div>
        <div className="w-full h-[50px] text-grayscale-100 flex items-center gap-4">
          <FontAwesomeIcon
            className="w-[50px] h-full text-primary-400"
            icon={faWindowRestore}
          />
          <span>Custom Web Development</span>
        </div>
      </div>
      <div>
        <div className="w-full h-[50px] text-grayscale-100 flex items-center gap-4">
          <FontAwesomeIcon
            className="w-[50px] h-full text-primary-400"
            icon={faReact}
          />
          <span>React Web Development</span>
        </div>
      </div>
      <div>
        <div className="w-full h-[50px] text-grayscale-100 flex items-center gap-4">
          <FontAwesomeIcon
            className="w-[50px] h-full text-primary-400"
            icon={faDiceD6}
          />
          <span>Webflow/Framer Website</span>
        </div>
      </div>
      <div>
        <div className="w-full h-[50px] text-grayscale-100 flex items-center gap-4">
          <FontAwesomeIcon
            className="w-[50px] h-full text-primary-400"
            icon={faBagShopping}
          />
          <span>Shopify Store Development</span>
        </div>
      </div>
    </div>
  );
};

export default ContactServices;

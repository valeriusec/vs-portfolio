import React from "react";
import SectionTitle from "../Components/SectionTitle";
import ContactServices from "../Components/ContactServices";
import ContactForm from "../Components/ContactForm";
import GlobeComponent from "../Components/GlobeComponent";

const Contact = () => {
  return (
    <div className="w-full overflow-hidden-web flex justify-center">
      <div className="w-full min-h-[800px] flex flex-col xl:w-[70%]">
        <div className="w-full">
          <SectionTitle title="CONTACT" subtitle="Get in touch" />
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-full sm:w-[90%] md:w-[80%] sm:h-[600px] rounded-xl border-4 border-primary-400 p-4 flex flex-col sm:flex-row gap-4">
            <ContactServices />
            <ContactForm />
          </div>
        </div>
        <GlobeComponent />
      </div>
    </div>
  );
};

export default Contact;

import { m, LazyMotion, domAnimation } from "framer-motion";
import SectionTitle from "../Components/SectionTitle";
import ContactServices from "../Components/ContactServices";
import ContactForm from "../Components/ContactForm";
import GlobeComponent from "../Components/GlobeComponent";
import SocialLinks from "../Components/SocialLinks";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full overflow-hidden-web flex flex-col items-center"
    >
      <div className="w-full min-h-[800px] flex flex-col xl:w-[70%]">
        <div className="w-full">
          <SectionTitle title="CONTACT" subtitle="Get in touch" />
        </div>
        <div className="w-full flex justify-center items-center">
          <LazyMotion features={domAnimation} strict>
            <m.div
              initial={{ x: 200 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="w-full sm:w-[90%] md:w-[80%] sm:h-[600px] rounded-xl border-4 border-primary-400 p-4 flex flex-col sm:flex-row gap-4"
            >
              <ContactServices />
              <ContactForm />
            </m.div>
          </LazyMotion>
        </div>
        <GlobeComponent />
      </div>
      <div className="w-full flex flex-col">
        <SocialLinks />
        <div className="bg-grayscale-950 flex justify-center pb-4 text-grayscale-400">
          <span>
            Created by <em>Valeriu Secrieru</em>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;

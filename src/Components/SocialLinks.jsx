import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../Constants/constants";

const SocialLinks = () => {
  return (
    <div className="w-full h-[100px] bg-grayscale-950 flex justify-center items-center gap-3 p-6">
      <FontAwesomeIcon
        className="text-3xl text-grayscale-50"
        icon={icons.faGithub}
      />
      <FontAwesomeIcon
        className="text-3xl text-grayscale-50"
        icon={icons.faYoutube}
      />
      <FontAwesomeIcon
        className="text-3xl text-grayscale-50"
        icon={icons.faTiktok}
      />
    </div>
  );
};

export default SocialLinks;

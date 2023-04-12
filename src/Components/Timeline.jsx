import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { journeys } from "../Constants/constants";

import Arrow from "./elements/Arrow";

const JourneyCard = ({ journey }) => {
  return (
    <div className="mb-4" style={{fontFamily: 'Poppins, sans-serif'}}>
      <VerticalTimelineElement
        contentStyle={{ background: "#064e36", color: "#d1fae2" }}
        contentArrowStyle={{ borderRight: "7px solid  #29c27f" }}
        date={journey.date}
        iconStyle={{ background: journey.iconBg }}
        icon={
          <div className="flex justify-center items-center w-full h-full">
            <img
              src={journey.icon}
              alt={journey.company_name}
              className="w-[60%] h-[60%] object-contain"
            />
          </div>
        }
      >
        <div>
          <h3 className="text-white text-[24px] font-bold">{journey.title}</h3>
          <div></div>
          <p
            className="text-primary-600 text-[16px] font-semibold"
            style={{ margin: 0 }}
          >
            {journey.company_name}
          </p>
        </div>

        <ul className="hidden mt-5 list-disc ml-5 space-y-2">
          {journey.points.map((point, index) => (
            <li
              key={`journey-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
        <div className="flex justify-end w-full">
            <button className="arrow-container">
                <Arrow />
            </button>
        </div>
      </VerticalTimelineElement>
      
    </div>
  );
};

const Timeline = () => {
  return (
    <div id="journey-scroll" className="w-full h-full overflow-y-scroll">
      <VerticalTimeline>
        {journeys.map((journey, index) => (
          <JourneyCard key={index} journey={journey} />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;

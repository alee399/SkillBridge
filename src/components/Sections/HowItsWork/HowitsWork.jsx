import React from "react";
import SectionTitle from "../SectionTitle";
import HowItsWorkCard from "./HowItsWorkCard";
import icon1 from "../../../assets/landingPage/worksIcon/icon1.png";
import icon2 from "../../../assets/landingPage/worksIcon/icon2.png";
import icon3 from "../../../assets/landingPage/worksIcon/icon3.png";
import icon4 from "../../../assets/landingPage/worksIcon/icon4.png";
import line from "../../../assets/landingPage/frames/line1.png";

const HowitsWork = () => {
  return (
    <section id="how-it-works" className="max-lg:px-8">
      <div>
        <SectionTitle
          title="How SkillBridge Works"
          description="Four simple steps to start your skill exchange journey."
        />
      </div>
      <div className="max-w-207.5 mx-auto mt-10 sm:mt-20 max-md:space-y-14">
        <HowItsWorkCard
          itemsCenter={"items-center"}
          frameHeight={"h-44.5"}
          line={line}
          icon={icon1}
          title="Create Your Profile"
          description="Sign up and list the skills you can teach and want to learn. Add certifications and set your availability."
          idx={1}
        />
        <HowItsWorkCard
          itemsCenter={"items-center"}
          frameHeight={"h-44.5"}
          line={line}
          icon={icon2}
          title="Get Matched by AI"
          description="Browse profiles of other users and connect with those whose skills match yours."
          idx={2}
        />
        <HowItsWorkCard
          itemsCenter={"items-center"}
          frameHeight={"h-44.5"}
          line={line}
          icon={icon3}
          title="Start Learning"
          description="Schedule sessions, connect via chat or video, and exchange knowledge using our credit-based system."
          idx={3}
        />
        <HowItsWorkCard
          icon={icon4}
          title="Rate & Grow"
          description="Leave feedback, and build your reputation as both a learner and mentor."
          idx={4}
        />
      </div>
    </section>
  );
};

export default HowitsWork;

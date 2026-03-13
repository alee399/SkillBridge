import React from "react";
import singleLogo from "../../assets/authAssets/singleLogo.png";
import group1 from "../../assets/authAssets/Group1.png";
import group2 from "../../assets/authAssets/group2.png";
import group3 from "../../assets/authAssets/group3.png";
import { Check } from "lucide-react";

const AuthSidebar = ({ variant = "login" }) => {
  // title="Start Learning Today" subTitle="Join SkillBridge. Your next breakthrough is just a connection away"
  const sidebarContent = {
    login: {
      title: "Start Learning Today",
      subTitle:
        "Join SkillBridge. Your next breakthrough is just a connection away",
    },
    signup: {
      title: "Start Learning Today",
      subTitle:
        "Create your account and start exchanging skills with a global community of learners and mentors.",
      points: [
        "AI-powered skill matching",
        "Credit based learning system",
        "Global community access",
        "Secure & verified accounts",
      ],
    },
  };
  return (
    <div className="bg-primary-from flex justify-center items-center text-white min-h-screen  relative">
      <div className=" ">
        <img src={group2} alt="" className="absolute w-25 h-25 left-0 top-0" />
        <img
          src={group3}
          alt=""
          className="absolute w-25 h-25 right-10 bottom-1"
        />
        <img
          src={group1}
          alt=""
          className="w-18 h-[92.19px] absolute top-[17vh] right-45.5"
        />
        <div className="max-w-132.25 mx-auto flex flex-col items-center text-center">
          <img
            src={singleLogo}
            alt="SkillBridge Logo"
            className="w-11.75 h-13.75 "
          />
          <h2 className="text-[40px] font-medium mt-14">
            {variant == "login" || variant == "otp"
              ? sidebarContent.login.title
              : sidebarContent.signup.title}
          </h2>
          <p className="text-xl font-medium mt-8">
            {variant == "login"
              ? sidebarContent.login.subTitle
              : sidebarContent.signup.subTitle}
            {}
          </p>
          {variant == "signup" ? (
            <div className="mt-10">
              {sidebarContent.signup.points.map((point, key) => {
                return (
                  <li
                    key={key}
                    className="list-none flex font-medium text-xl leading-[100%] gap-6 items-center mb-4"
                  >
                    <div className="w-6.5 h-6.5 bg-primary rounded-full flex justify-center items-center">
                      <Check size={20} strokeWidth={3} color="black" />
                    </div>
                    {point}
                  </li>
                );
              })}
            </div>
          ) : (
            " "
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthSidebar;

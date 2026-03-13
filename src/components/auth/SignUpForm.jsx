import React from "react";
import Header from "./Header";
import Input from "../../common/ui/Input";
import Button from "../../common/ui/Button";
import Divider from "../../common/ui/Divider";
import SocialButton from "../../common/ui/SocialButton";
import GoogleIcon from "../../assets/authAssets/google-flat-icon.png";
import FbIcon from "../../assets/authAssets/fb-flat-icon.png";
import AuthRedirect from "./AuthRedirect";

const SignUpForm = () => {
  return (
    <div>
      <div className="min-h-screen py-13.5 lg:px-25 px-10 flex items-center justify-center">
        <div className="w-full">
          <Header
            title={"Create your account"}
            subTitle={"Sign in to continue your learning journey."}
          />
          <form>
            <Input
              type={"text"}
              label={"Full Name"}
              placeholder={"Enter your Full Name"}
            />
            <Input
              type={"email"}
              label={"Email Address"}
              placeholder={"johndoe@gmail.com"}
            />
            <Input
              type={"password"}
              label={"Password"}
              placeholder={"Enter your password."}
              variant="signup"
            />

            <div className="mt-8">
              <Button
                variant="secondary"
                size="lg"
                className="w-full rounded-full"
              >
                Sign Up
              </Button>
            </div>
          </form>
          <div>
            <Divider />
            <div className="space-y-5 mb-8">
              <SocialButton icon={GoogleIcon}>Login with Google</SocialButton>
              <SocialButton icon={FbIcon}>Login with Facebook</SocialButton>
            </div>
            <AuthRedirect variant="signup" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;

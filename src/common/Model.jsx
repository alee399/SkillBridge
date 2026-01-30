import { useEffect } from "react";
import ProfileEditWrapper from "../components/Animation/ProfileEditWrapper";


const Modal = ({ children }) => {

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-[1px] bg-black/40">
        <ProfileEditWrapper>
          <div className="relative bg-white top-[5vw] rounded-xl w-[70vw] max-h-[80vh] h-full overflow-y-auto z-10">
            {children}
          </div>
        </ProfileEditWrapper>
    </div>
  );
};

export default Modal;

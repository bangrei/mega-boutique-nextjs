import { FaRegQuestionCircle } from "react-icons/fa";

const HelpButton = () => {
  return (
    <div className="help-button">
      <FaRegQuestionCircle className="w-5 h-5 text-white" />
      <span className="text-white font-bold hidden md:block">Help</span>
    </div>
  );
};
export default HelpButton;

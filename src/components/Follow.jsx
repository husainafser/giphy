import {FaGithub, FaLink, FaLinkedin} from "react-icons/fa6";

const Follow = () => {
  return (
    <div
      className="faded-text pt-2" //custom - faded-text
    >
      <span>Follow on:</span>
      <div className="flex gap-4 pt-3">
        <a href="https://www.linkedin.com/in/husain-afser/">
          <FaLinkedin size={20} />
        </a>
        <a href="https://github.com/husainafser">
          <FaGithub size={20} />
        </a>
        <a href="https://husain-portfolio.surge.sh/">
          <FaLink size={20} />
        </a>
      </div>
    </div>
  );
};

export default Follow;
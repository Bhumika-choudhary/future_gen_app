import "./SocialIcon.css";

const SocialIcon = () => {
  return (
    <div className="social-icon-bar">
      <a href="" className="icon phone" title="+91 7428623109">
        <i className="fa fa-phone"></i>
      </a>
      <a
        href=""
        className="icon facebook"
        target="_blank"
        rel="noopener noreferrer"
        title="FutureGenApps Facebook page"
      >
        <i className="fab fa-facebook"></i>
      </a>
      <a
        href=""
        className="icon instagram"
        target="_blank"
        rel="noopener noreferrer"
        title="FutureGenApps Instagram page"
      >
        <i className="fab fa-instagram"></i>
      </a>
      <a
        href=""
        className="icon youtube"
        target="_blank"
        rel="noopener noreferrer"
        title="FutureGenApps YouTube page"
      >
        <i className="fab fa-youtube"></i>
      </a>
      
    </div>
  );
};

export default SocialIcon;

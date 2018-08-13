import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.6482686137933!2d18.732951351625896!3d49.2261972792238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47145ea0af630cb5%3A0x112a8f018d2c69a!2sJ.+M.+Hurbana+244%2F21%2C+010+01+%C5%BDilina!5e0!3m2!1sen!2ssk!4v1534145300081"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
      />
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;

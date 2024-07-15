import React from "react";

const Prod = ({ img, title }) => {
  const single_title = title.split(",")[0];
  return (
    <div className="w-96 h-custom-length600">
      <div className="w-96 bg-bg-color-for-prod h-custom-length530 flex justify-center items-center">
        <img src={img} className="w-80 h-80 object-cover mix-blend-darken" />
      </div>
      <h4 className="text-center mt-4">{single_title}</h4>
    </div>
  );
};

export default Prod;

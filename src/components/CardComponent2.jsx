import React from "react";

const CardComponent2 = (workExperience) => {
  return (
    <>
      <div
        className="py-4 px-4 rounded-lg m-4 shadow-lg"
        style={{ backgroundColor: "#ffffff" }}
      >
        <h2 className="font-bold px-2 md:text-lg">
          {workExperience.workExperience.title}
        </h2>
        {workExperience.workExperience.list.map((item, index) => (
          <div className="flex justify-between" key={index}>
            <div>
              <p className="inline-flex p-2">
                <span className="px-1">
                  <img className="w-6 h-6" src={item?.logo} alt="Office" />
                </span>
                <span className="px-1">{item?.name}</span>
              </p>
              <p className="p-2">{item?.prop2}</p>
            </div>
            <div className="py-6">
              <img className="w-6 h-6" src={item?.next} alt="Arrow" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardComponent2;

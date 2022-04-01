import React from "react";

const CardComponent3 = () => {
  return (
    <>
      <div
        className="py-4 px-4 rounded-lg m-4 shadow-md"
        style={{ backgroundColor: "#ff6781" }}
      >
        <div className="flex justify-center align-middle items-center flex-wrap md:px-12">
          <div className="md:w-1/2">
            <h3 className="md:text-xl text-purple-800 py-1">Welcome,</h3>
            <h1 className="md:text-4xl text-purple-900 font-bold py-1">
              Mohit Patel
            </h1>
            <button className="py-1 md:pt-6 px-6 rounded-2xl text-white font-bold bg-orange-300 my-2">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/file/d/1V9gEc1RU_BN4mKJzFlnNepv8RzACvk4H/view?usp=sharing"
              >
                Resume
              </a>
            </button>
          </div>
          <div className="md:w-1/2">
            <img src="/assets/images/study.png" alt="Study" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardComponent3;

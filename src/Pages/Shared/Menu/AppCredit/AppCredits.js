import React from "react";

const AppCredits = () => {
  return (
    <div>
      {" "}
      <div>
        <div className="py-[3px]">
          <div className="rounded-t-[20px] w-full bg-rose-500 text-primary-content">
            <div className="card-body py-2 items-center text-center">
              <h2 className="card-title text-white">App Credits</h2>
            </div>
          </div>
        </div>

        <div className="card-body py-2 ">
          <h1 className="text-lg text-center">Develop By </h1>
          <h1 className="text-xl text-center">Team : BlueSpace Tech</h1>
          <h1 className=" text-center">Email : bluespacetech12@gmail.com</h1>
          <h1 className=" text-center">Kazi Tayeful Islam</h1>

          <p>For App UI we use Daisyui </p>

          <p className="text-center">App Version : 1.0.0</p>
        </div>
      </div>
    </div>
  );
};

export default AppCredits;

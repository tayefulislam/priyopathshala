import React from "react";
import ExamServer from "./ExamServer/ExamServer";

const Home = () => {
  return (
    <div>
      <div className="text-center text-xl font-semibold ">
        <h1>Welcome To Priyo Pathshala</h1>
      </div>
      <div className="text-center text-xl font-semibold pt-4">
        <h1>মেডিক্যাল , ভার্সিটি , ইঞ্জিনিয়ারিং ভর্তি প্রস্তুতি ২০২৩</h1>
      </div>
      <ExamServer></ExamServer>
    </div>
  );
};

export default Home;

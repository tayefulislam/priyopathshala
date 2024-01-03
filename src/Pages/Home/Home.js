import React from "react";
import ExamServer from "./ExamServer/ExamServer";
import PDFBooks from "./PDFBooks/PDFBooks";

const Home = () => {
  return (
    <div>
      <div className="text-center text-xl font-semibold ">
        <h1>Welcome To Priyo Pathshala</h1>
      </div>
      <div className="text-center text-xl font-semibold pt-4">
        <h1>
          "২০২৩ - এর মেডিক্যাল , ভার্সিটি , ইঞ্জিনিয়ারিং ভর্তি প্রস্তুতি নিন
          প্রিয় পাঠশালা তে"
        </h1>
      </div>
      <ExamServer></ExamServer>
      {/* PDF Book Category */}
      <PDFBooks></PDFBooks>
    </div>
  );
};

export default Home;

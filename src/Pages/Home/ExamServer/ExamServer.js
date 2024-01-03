import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const ExamServer = () => {
  const { isLoading, error, data } = useQuery("Exam-Server", () =>
    fetch(
      "https://raw.githubusercontent.com/tayefulislam/priyopathshalaJSON/main/ExamServer/ExamServerLinks.json"
    ).then((res) => res.json())
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-10">
        <div className="flex flex-col gap-4 w-52">
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      </div>
    );
  }

  console.log(data);

  return (
    <div>
      <div className="text-center text-xl py-2">
        <h1>পরীক্ষার তালিকা :</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-2 py-5">
        {data?.map((exam, index) => (
          <div className="card w-full bg-red-500 shadow-xl text-white">
            <div className="card-body items-center text-center">
              <h2 className="card-title">{exam?.name}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="flex justify-center items-center mt-12 gap-2 mx-2">
        <div class="card w-96 bg-red-500 shadow-xl text-white">
          <div class="card-body items-center text-center">
            <h2 class="card-title">রক্তদাতা হয়ে উঠুন</h2>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ExamServer;

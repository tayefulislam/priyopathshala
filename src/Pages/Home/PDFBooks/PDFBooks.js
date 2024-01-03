import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

const PDFBooks = () => {
  const navigate = useNavigate();
  const { isLoading, error, data } = useQuery("pdfbooksList", () =>
    fetch(
      "https://raw.githubusercontent.com/tayefulislam/priyopathshalaJSON/main/PDFBooks/Home/HomeList.json"
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

  // https://raw.githubusercontent.com/tayefulislam/priyopathshalaJSON/main/PDFBooks/Home/HomeList.json
  return (
    <div>
      <div className="text-center text-xl py-2">
        <h1>পিডিএফ বই সমূহ:</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-2 py-5">
        {data?.map((bookCategory, index) => (
          <div
            onClick={() =>
              navigate(
                `/bookCategory/${bookCategory?.bookCategoryRoute}/${bookCategory?.bookCategoryName}`
              )
            }
            className="card w-full bg-green-500 shadow-xl text-white"
          >
            <div className="card-body items-center text-center">
              <h2 className="card-title">{bookCategory?.bookCategoryName}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PDFBooks;

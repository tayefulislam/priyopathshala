import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const BooksByCategory = () => {
  const { bookCategory, bookCategoryName } = useParams();
  const { isLoading, error, data } = useQuery(
    `${bookCategory}-pdfbooksList`,
    () =>
      fetch(
        `https://raw.githubusercontent.com/tayefulislam/priyopathshalaJSON/main/PDFBooks/Home/${bookCategory}.json`
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

  return (
    <div>
      <div className="text-center text-xl font-semibold py-10 ">
        <h1>{bookCategoryName}</h1>
      </div>

      {!data?.length ? (
        <div className="text-center text-xl">No book found</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-2 py-5">
          {data?.map((book, index) => (
            <div className="card w-full bg-primary text-white">
              <div className="card-body">
                <h2 className=" text-center">{book.bookName}</h2>
                {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BooksByCategory;

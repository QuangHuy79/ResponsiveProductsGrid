import React from "react";
// import { useSearchParams } from "react-router-dom";

// const Pagination = ({ totalItems, itemsPerPage }) => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const category = searchParams.get("category");
//   const currentPage = parseInt(searchParams.get("page")) || 1;

//   const totalPages = Math.ceil(totalItems / itemsPerPage);

//   const handlePageChange = (page) => {
//     if (category) {
//       setSearchParams({ category, page });
//     } else {
//       setSearchParams({ page });
//     }
//   };

//   return (
//     <div className="d-flex justify-content-center my-4">
//       {Array.from({ length: totalPages }, (_, idx) => (
//         <button
//           key={idx}
//           className={`btn btn-sm mx-1 ${
//             currentPage === idx + 1 ? "btn-primary" : "btn-outline-primary"
//           }`}
//           onClick={() => handlePageChange(idx + 1)}
//         >
//           {idx + 1}
//         </button>
//       ))}
//     </div>
//   );
// };
const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null;

  return (
    <div className="d-flex justify-content-center mt-4">
      <nav>
        <ul className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <li
              key={i + 1}
              className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
            >
              <button className="page-link" onClick={() => onPageChange(i + 1)}>
                {i + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;

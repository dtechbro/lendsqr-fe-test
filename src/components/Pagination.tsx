import React from "react";
import { Table } from "@tanstack/react-table";
import "../styles/Pagination.scss";
import { User } from "../types";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

interface PaginationProps {
  table: Table<User>;
}

const Pagination: React.FC<PaginationProps> = ({ table }) => {
  const pageCount = table.getPageCount();
  const pageIndex = table.getState().pagination.pageIndex + 1;

  return (
    <div className="pagination">
      <div className="pagination-info">
        <span>Showing</span>

        <input
          type="number"
          defaultValue={table.getState().pagination.pageSize}
          onChange={(e) => {
            const pageSize = Number(e.target.value);
            table.setPageSize(pageSize);
          }}
          style={{ width: "50px" }}
        />

        <span> out of {table.getRowCount()}</span>
      </div>

      <div className="pagination-controls">
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="arrow-button"
        >
          <IoChevronBackOutline />
        </button>

        <div className="page-numbers">
          {pageCount > 7 ? (
            <>
              {Array.from({ length: 3 }, (_, i) => (
                <button
                  key={i}
                  onClick={() => table.setPageIndex(i)}
                  className={`page-number ${
                    pageIndex === i + 1 ? "active" : ""
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <span>...</span>
              {Array.from({ length: 3 }, (_, i) => (
                <button
                  key={pageCount - 3 + i}
                  onClick={() => table.setPageIndex(pageCount - 3 + i)}
                  className={`page-number ${
                    pageIndex === pageCount - 3 + i + 1 ? "active" : ""
                  }`}
                >
                  {pageCount - 3 + i + 1}
                </button>
              ))}
            </>
          ) : (
            Array.from({ length: pageCount }, (_, i) => (
              <button
                key={i}
                onClick={() => table.setPageIndex(i)}
                className={`page-number ${pageIndex === i + 1 ? "active" : ""}`}
              >
                {i + 1}
              </button>
            ))
          )}
        </div>

        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="arrow-button"
        >
          <IoChevronForwardOutline />
        </button>
      </div>
    </div>
  );
};

export default Pagination;

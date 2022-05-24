import React from "react";
import { PageList, PageListItem } from "./pagination.styled";

const Pagination = ({
    totalData,
    currentPage,
    dataPerPage,
    handlePaginate,
}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
        pageNumbers.push(i);
    }

    const firstPage = pageNumbers[0];
    const lastPage = pageNumbers[pageNumbers.length - 1]

    return (
        <nav>
            <PageList>
                <PageListItem
                    key='previous'
                    className={currentPage === firstPage ? "disabled" : "pagination"}
                    onClick={() => {
                        if (currentPage !== firstPage) handlePaginate(currentPage - 1)
                    }}
                >
                    &laquo; Prev
                </PageListItem>
                <PageListItem className="inactive">Page {currentPage}  of {lastPage}</PageListItem>
                {/* {pageNumbers.map((page) => (
                    <PageListItem
                        key={page}
                        className={currentPage === page ? "active" : "pagination"}
                        onClick={() => handlePaginate(page)}
                    >
                        {page}
                    </PageListItem>
                ))} */}
                <PageListItem
                    key='next'
                    className={currentPage === lastPage ? "disabled" : "pagination"}
                    onClick={() => {
                        if (currentPage !== lastPage) {
                            handlePaginate(currentPage + 1)
                        }
                    }}
                >
                    Next &raquo;
                </PageListItem>
            </PageList>
        </nav>
    );
};

export default Pagination;

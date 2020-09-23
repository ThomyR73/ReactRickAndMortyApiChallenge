import React from 'react';

const Pagination = ({ next, prev, onNext, onPrev, pages }) => {
    const getCurrentPage = () => {
        if (!prev && !next) return 1;
        return prev ? prev + 1 : next - 1;
    }
    const currentPage = getCurrentPage()

    return (
        <div className="row d-flex flex-row justify-content-center align-self-end w-100 mt-3">
            <nav className="align-self-end">
                <ul className="pagination align-self-end">
                    <li className={prev ? "page-item" : "page-item disabled"} ><a className="page-link" onClick={onPrev}>Previous</a></li>
                    <li className="page-item"><a className="page-link">{`${currentPage} of ${pages}`}</a></li>
                    <li className={next ? "page-item" : "page-item disabled"} ><a className="page-link" onClick={onNext}>Next</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
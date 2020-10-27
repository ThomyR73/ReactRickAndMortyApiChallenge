import React from 'react';

interface Props {
    next: number,
    prev: number,
    onNext: Function,
    onPrev: Function,
    toFirst: Function,
    toLast: Function,
    pages: number
}

const Pagination: React.FunctionComponent<Props> = ({ next, prev, onNext, onPrev, toFirst, toLast, pages }) => {
    const getCurrentPage = () => {
        if (!prev && !next) return 1;
        return prev ? prev + 1 : next - 1;
    }
    
    window.scrollTo(0, 0)

    return (
        <div className="row d-flex flex-row justify-content-center align-self-end col-12 mt-3">
            <nav className="align-self-end">
                <ul className="pagination align-self-end">
                    <li className={prev ? "page-item pageLabelSize hideButtons" : "page-item disabled pageLabelSize hideButtons"} ><a className="page-link" onClick={() => toFirst}>First</a></li>
                    <li className={prev ? "page-item pageLabelSize " : "page-item disabled pageLabelSize "} ><a className="page-link" onClick={() => onPrev}>Previous</a></li>
                    <li className="page-item text-dark"><a className="page-link">{`${getCurrentPage()} of ${pages}`}</a></li>
                    <li className={next ? "page-item pageLabelSize " : "page-item disabled pageLabelSize "} ><a className="page-link" onClick={() => onNext}>Next</a></li>
                    <li className={next ? "page-item pageLabelSize hideButtons" : "page-item disabled pageLabelSize hideButtons"} ><a className="page-link" onClick={() => toLast}>Last</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
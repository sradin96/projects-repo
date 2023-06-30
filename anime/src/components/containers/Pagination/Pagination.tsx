import "./index.scss";

const Pagination = ({ handleNext, handlePrev, handleFirst, page, onPageClick, inputValue }: any) => {
    const pageButtons = [];
    if(inputValue.length === 0) {
        const startPage = page === 1 ? page + 1 : page;
        for (let i = startPage; i <= Math.min(startPage + 3); i++) {
            pageButtons.push(
            <button
                key={i}
                onClick={() => onPageClick(i)}
                className={`pagination__number ${i === page ? "active" : ""}`}
            >
                {i}
            </button>
            );
        }
    }

  return (
    <div className="pagination">
      <button type="button" className="pagination__btn" onClick={handlePrev}>Prev</button>
      {
        inputValue ? null :
        <button type="button" className={`pagination__number ${page === 1 ? 'active' : ''}`} onClick={handleFirst}>1</button>
      }
        {pageButtons}
      <button type="button" className="pagination__btn" onClick={handleNext}>Next</button>
    </div>
  )
}

export default Pagination

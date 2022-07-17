import React from 'react';
import './style.css'

export  const Pagination = () => {
    return (
              <div className="pagination">
          <a href="/" className="pagination_btn" id="btn_prev">
            Prev
          </a>
          <ul  className="pagination_number">
          </ul>
          <a href="/" className="pagination_btn" >
            Next
          </a>
        </div>
       
    );
}



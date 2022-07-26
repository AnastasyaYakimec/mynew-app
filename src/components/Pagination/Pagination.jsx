import React from 'react';
import './style.css'

export  const Pagination = () => {
    return (
              <div className="pagination">
          <a href="/" className="pagination_btn" >
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



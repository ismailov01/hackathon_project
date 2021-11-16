import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { clientContext } from '../contexts/ClientContext';


const Pagination = () => {
    const { totalPosts, postsPerPage, handlePage, currentPage } = useContext(clientContext)
    const pageNumbers = []
    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i)
    }

    return (
        <div className="pagination">
            <ul>
                {
                    pageNumbers.map((page) => (
                        <li  key={page}>
                            <Button 
                            style={{background: page === currentPage ? 'darkblue' : 'lightblue', margin: '5px'}}
                            variant="contained" 
                            onClick={() => handlePage(page)}
                            
                            >{page}</Button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Pagination;
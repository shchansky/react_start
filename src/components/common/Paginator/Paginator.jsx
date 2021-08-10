import React, { useState } from 'react';
import styles from './Paginator.module.css';
import cn from "classnames"

let Paginator = ({ totalItemsCount, onPageChanged, pageSize, currentPage, portionSize = 10 }) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionNumber = portionNumber * portionSize

    return <div className={styles.paginator}>

        {portionNumber > 1 &&
            <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>}


        {pages
            .filter(pageNum => pageNum >= leftPortionNumber && pageNum <= rightPortionNumber)
            .map(pageNum => {
                return <span className={cn({
                    [styles.selectedPage]: currentPage === pageNum}, styles.pageNumber)}
                    key={pageNum}
                     onClick={() => {
                        onPageChanged(pageNum)
                    }}>{pageNum}</span>
            })}

        {portionCount > portionNumber &&
            <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>}

    </div>
}


export default Paginator;
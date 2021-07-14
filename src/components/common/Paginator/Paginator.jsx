import React, { useState } from 'react';
import styles from './Paginator.module.css';
import cn from "classnames"

//первый вариант
// let Paginator = (props) => {
//     let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
//     let pages = []
//     for (let i = 1; i <= pagesCount; i++) {
//         pages.push(i);
//     }
//     return <div>
//         {pages.map(pageNum => {
//             return <span className={props.currentPage === pageNum && styles.selectedPage}
//                 onClick={(e) => { props.onPageChanged(pageNum) }} >{pageNum}</span>
//         })}
//     </div>
// }




//в качвестве альтернативы прокидываю в аргумент деструктурированные props
// let Paginator = ({totalUsersCount,onPageChanged,pageSize,currentPage, ...props}) => {
//     let pagesCount = Math.ceil(totalUsersCount / pageSize);
//     let pages = []
//     for (let i = 1; i <= pagesCount; i++) {
//         pages.push(i);
//     }
//     return <div className={styles.pageNumbers}>
//         {pages.map(pageNum => {
//             return <span className={currentPage === pageNum && styles.selectedPage}
//                 onClick={(e) => { onPageChanged(pageNum) }} >{pageNum}</span>
//         })}
//     </div>
// }



//финал
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
                    [styles.selectedPage]: currentPage === pageNum
                }, styles.pageNumber)}
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
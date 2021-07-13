import React from 'react';
import styles from './Paginator.module.css';


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
let Paginator = ({totalUsersCount,onPageChanged,pageSize,currentPage, ...props}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div className={styles.pageNumbers}>
        {pages.map(pageNum => {
            return <span className={currentPage === pageNum && styles.selectedPage}
                onClick={(e) => { onPageChanged(pageNum) }} >{pageNum}</span>
        })}
    </div>
}







export default Paginator;
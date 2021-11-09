import * as React from "react";
import clsx from 'clsx';
import SearchStyle from './style';
const Search = () => {
    const ClassStyle = SearchStyle();
    return ( 
    <div className={clsx(ClassStyle.root)}>
        <div className="wrapper">
            <div className="search-box">
                <input type="text" placeholder="Search" className="input"/>
                <div className="btn">
                    <i className="fa fa-search" aria-hidden="true"></i>
                </div>
            </div>
            </div>
     </div>    
   
    )
}
export default Search;
import clsx from 'clsx';
import SearchStyle from './style';
import React,{useState} from 'react';
const Search = () => {
    const [strSearch,setStrSearch] = useState(" ");
    const inputRef = React.useRef();
    function handleChange(event) {
       setStrSearch(event.target.value);
    }
    const handleSearch = () => {
     const   input=strSearch;
        console.log(input)
    };
    const handleClear =()=> {
        setStrSearch("");
    }
    const ClassStyle = SearchStyle();
    return ( 
    <div className={clsx(ClassStyle.root)}>
        <div className="wrapper">
            <div className="search-box">
                <input type="text" value={strSearch} onChange={handleChange} placeholder="Search" className="input"/>
                <div className="btn cusor" onClick={handleSearch}>
                    <i className="fa fa-search" aria-hidden="true"></i>
                </div>
                <div className="btn btn-primary-delete cusor" onClick={handleClear}>
                   Clear
                </div>
            </div>
            </div>
     </div>    
   
    )
}
export default Search;
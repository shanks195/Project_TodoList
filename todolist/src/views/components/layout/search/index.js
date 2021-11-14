import clsx from 'clsx';
import SearchStyle from './style';
import React,{useState} from 'react';
const Search = (props) => {
    const [strSearch,setStrSearch] = useState(" ");
    const {onClickGo} =props;
    const ClassStyle = SearchStyle();
    const inputRef = React.useRef();
    const handleSearch = ()=>{
        const input = strSearch;
        onClickGo(strSearch)
        
        //console.log(input);
    }
    const handleClear = ()=> {
        setStrSearch('');
        onClickGo('');
    }
    
    const handleChange =(event)=> {
        setStrSearch(event.target.value);
    }
    return ( 
    <div className={clsx(ClassStyle.root)}>
        <div className="wrapper">
            <div className="search-box">
                <input
                value={strSearch}
                onChange={handleChange}
                 type="text"
                 placeholder="Search" 
                 className="input"
                 
                 />
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
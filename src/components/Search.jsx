import React from 'react'
const Search=({searchTerm,setSearchTerm,onSearch })=>{
    return(
<div className="search">
   <div>
    <img src="search.svg" alt="search">
    </img>
    <input type="text" placeholder="serach movies here"
    value={searchTerm} onChange={(event)=> setSearchTerm(event.target.value)} />
     <button onClick={onSearch}
    style={{
      padding: "0.5rem 1rem",
      backgroundColor: "#1c1a66ff",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    }}>Search</button>
    </div> 
   
</div>
    ) 
}
export default Search
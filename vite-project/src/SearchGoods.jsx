import React  from 'react'
import {useState , useEffect} from 'react'


const SearchGoods = () => {

  const [searchInput, setSearchInput] = useState('')
const [filteredItems,setFilteredItems] = useState([]);

  const handleChange = (event) => {
    setSearchInput(event.target.value)
  }

  

  useEffect(()=> {
    if (searchInput.trim() === '') {
      setFilteredItems([])
      return
    }


fetch(`http://localhost:5000/search-goods/${encodeURIComponent(searchInput)}`)
      .then(response => {
          return response.json();
      })
      .then(data => {
        setFilteredItems(data);
      });
  
  }, [searchInput]);


  return (
    <div>
      <input
        type="text" placeholder="search" value={searchInput} onChange={handleChange}
      />
      
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.product_name}</li>
        ))}
      </ul>
    </div>)
}



export default SearchGoods

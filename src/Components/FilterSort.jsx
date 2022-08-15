import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const FilterSort = () => {
    const [searchParams,setSearchParams] =useSearchParams();
    const initialGenreParams = searchParams.getAll('genre')
    const initialSortParams = searchParams.get('sortBy')
    const [category,setCategory]=useState(initialGenreParams || []);
    const [sortBy,setSortBy]=useState(initialSortParams || '')
    

    const handleGenreChange =(e)=>{
        const option =e.target.value; 
        //if the option is already present in the category, remove it
        //else add it in the category array
        let newCategory =[...category];
        if(category.includes(option)){
            //already there remove it
            newCategory.splice(newCategory.indexOf(option),1)
        }
        else{
            //add it
            newCategory.push(option);
        }
        setCategory(newCategory);
    }

    const handleSortBy = (e)=>{
        setSortBy(e.target.value)
    }

    useEffect(()=>{
        //if the category changes then reflect from the url search as well
        if(category || sortBy){
            const params = {};
            category && (params.genre =category);
            sortBy && (params.sortBy =sortBy);
            setSearchParams(params);
        }
    },[category,setSearchParams,sortBy]);

  return (
    <div>
        <h3>Filter</h3>
           <div>
            <input type="checkbox" value='K-Pop' defaultChecked={category.includes('K-Pop')}  onChange={handleGenreChange} />
            <label>K-Pop</label>
            </div> 
            <div>
            <input type="checkbox" value='Country' defaultChecked={category.includes('Country')} onChange={handleGenreChange} />
            <label>Country</label>
            </div> 
            <div>
            <input type="checkbox" value='Pop' defaultChecked={category.includes('Pop')} onChange={handleGenreChange} />
            <label>Pop</label>
            </div> 
            <div>
            <input type="checkbox" value='Holiday' defaultChecked={category.includes('Holiday')} onChange={handleGenreChange} />
            <label>Holiday</label>
            </div> 
            <div>
            <input type="checkbox" value='Heavy Metal' defaultChecked={category.includes('Heavy Metal')} onChange={handleGenreChange} />
            <label>Heavy Metal</label>
            </div> 

        <h3>Sort</h3>
        <div onChange={handleSortBy}>
            <div>
                <input type='radio' name='sortBy' value='asc' defaultChecked={sortBy==='asc'} />
                <label>Ascending</label>
            </div>
            <div>
                <input type='radio' name='sortBy' value='desc' defaultChecked={sortBy==='desc'} />
                <label>Descending</label>
            </div>
        </div>
    </div>
  )
}

export default FilterSort
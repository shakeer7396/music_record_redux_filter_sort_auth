import React from 'react'
import FilterSort from '../Components/FilterSort'
import MusicRecords from './MusicRecords'
import styled from "styled-components";

const Homepage = () => {
  return (
    <div>
        <HomepageWraper>
            <FilterSortWraper>
        <FilterSort />
        </FilterSortWraper>
        <MusicRecordsWraper>
        <MusicRecords />
        </MusicRecordsWraper>
        </HomepageWraper>
    </div>
  )
}

export default Homepage

const HomepageWraper=styled.div`
    display:flex;
    height:100%;
`;

const FilterSortWraper=styled.div`
    width:200px;
    border:1px solid red;
`;

const MusicRecordsWraper=styled.div`
    width:100%;
    border:1px solid blue;
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(300px,max-content));
    justify-content:center;
    gap:10px;
`;
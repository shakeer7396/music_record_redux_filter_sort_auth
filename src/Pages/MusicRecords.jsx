import React, { useEffect } from 'react';
import {useDispatch,useSelector }from 'react-redux';
import { getMusicRecords } from '../Redux/AppReducer/action';
import styled from "styled-components";
import { useLocation, useSearchParams,Link } from 'react-router-dom';


const MusicRecords = () => {
//calling api
const dispatch=useDispatch();
const musicRecords=useSelector((store)=>store.AppReducer.musicRecords)
const [searchParams]=useSearchParams();
const location =useLocation();

useEffect(()=>{
    if(location || musicRecords.length ===0){
        const sortBy = searchParams.get("sortBy")
        const queryParams ={
            params:{
                genre:searchParams.getAll('genre'),
                //json-server formate below
                _sort:sortBy && "year",
                _order:sortBy,
            },
        };
        dispatch(getMusicRecords(queryParams))
    }
   
},[location.search])
  return (
    <>
 {musicRecords?.length > 0 && musicRecords?.map((album)=>{
    return (
        <MusicRecorderWrapper key={album.id}>
            <Link to={`/music/${album.id}`}>
            <div>{album.name}</div>
            <div> <img src={album.img} alt={album.name} /></div>
            <div>{album.genre}</div>
            <div>{album.year}</div>
            </Link>
        </MusicRecorderWrapper>
    )
 })}
    </>
  )
}

export default MusicRecords

const MusicRecorderWrapper =styled.div`
    width:300px;
    border:1px solid green;
`
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import {useSelector,useDispatch} from "react-redux";
import { getMusicRecords } from '../Redux/AppReducer/action';
import {Link} from "react-router-dom";

const SingleMusicRecord = () => {
  const dispatch=useDispatch();
//Already some data in the params (get the id from the params) (Filter the music album based on the id)[get the album partaining to the particular id]
//[{*imp : anything before ? in browser isa parameter ,after ?is a search parameter *}]
const {id} = useParams();
const musicRecords =useSelector((store)=>store.AppReducer.musicRecords)
const [currentMusicAlbum,setCurrentMusicAlbum]=useState({});

useEffect(()=>{
  if(musicRecords.length ==0){
    dispatch(getMusicRecords());
  }
},[dispatch,musicRecords.length]);

useEffect(()=>{
  if(id){
    //filter the album based on the id
    const currentMusic = musicRecords.find((album)=>album.id === id );
    currentMusic && setCurrentMusicAlbum(currentMusic);
  }
},[id,musicRecords]);
console.log(currentMusicAlbum);



  return (
    <div>
      <h1>{currentMusicAlbum.name}</h1>
      {<img src={currentMusicAlbum.img} alt={currentMusicAlbum.name} />}
      <div>
        <Link to={`/music/${id}/edit`} >Edit</Link>
      </div>
    </div>
  )
}

export default SingleMusicRecord
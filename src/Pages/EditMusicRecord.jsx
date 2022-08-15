import React, { useEffect,useState } from 'react';
import {useParams} from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import { getMusicRecords, updateMusicRecord } from '../Redux/AppReducer/action';

const EditMusicRecord = () => {
  const {id} =useParams();
  const dispatch=useDispatch();
  const musicRecords =useSelector((store)=>store.AppReducer.musicRecords)
const [musicName,setMusicName]=useState("");
const [artistName,setArtistName]=useState('');

 const handleSubmit=(e)=>{
  e.preventDefault();
  if(musicName && artistName){
    const payload ={
      name:musicName,
      artist:artistName
    }
    dispatch(updateMusicRecord(id,payload))
    .then(()=>{
      dispatch(getMusicRecords());
    })
  }
 }

  useEffect(()=>{
    if(id){
      //filter the album based on the id
      const currentMusic = musicRecords.find((album)=>album.id === id );
      if(currentMusic){
        setMusicName(currentMusic.name)
        setArtistName(currentMusic.artist);
      }
    }
  },[id,musicRecords]);
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <h1>EDIT PAGE</h1>
      <div>
        <label>Edit Music Name : </label>
        <input type="text" value={musicName} onChange={(e)=>setMusicName(e.target.value)} />
      </div>
      <div>
        <label>Edit Artist Name : </label>
        <input type="text" value={artistName} onChange={(e)=>setArtistName(e.target.value)} />
      </div>
      <button type='submit'>Update</button>
      </form>
    </div>
  )
}

export default EditMusicRecord
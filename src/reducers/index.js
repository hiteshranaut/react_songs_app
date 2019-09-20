// import React from 'react';
import { combineReducers } from 'redux';

//Reducers

const songsReducer = () => {
  return [
    {title: 'first song' , duration: '4:00'} ,
    {title: 'second song' , duration: '3:00'} ,
    {title: 'third song' , duration: '2:00'} ,
    {title: 'fourth song' , duration: '4:50'}
  ];
};


const selectedSongReducer = (selectedSong = null , action) => {
  if(action.type === 'SONG_SELECTED'){
    return action.payload;
  }
  return selectedSong;
};


export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});

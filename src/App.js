/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { CssBaseline, } from '@material-ui/core';
import './app.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import {BrowserRouter , Route , Routes} from 'react-router-dom';
import Bookmark from './components/Bookmark/Bookmark';
import { db } from './firebase-config';
import { collection , getDocs , addDoc , updateDoc, doc } from '@firebase/firestore';
import Login from './components/Login/Login';
import Signup from './components/Signup';

const App = () => {

  const [coordinates, setCoordinates] = useState({});
  const bookmarkCollection = collection(db,"Bookmarks");
  const [ bookmarks , setBookmarks ] = useState([]);
  const [ dataBM, setDataBM ] = useState([]);
  const [userBookmarks, setUserBookmarks] = useState({});
  const currentUser = 'ayushShah123';
  const [currUser,setCurrUser] = useState(currentUser);
  const [placesBM,setPlacesBM] = useState({});
  const getUsers = async() => {
        const data = await getDocs(bookmarkCollection);
        const dataMap = data.docs.map(data => ({...data.data() , id: data.id}));
        setBookmarks(dataMap);
        const user = dataMap.filter((data) => data.userid === currUser)
        console.log(user);
        setUserBookmarks(user[0].places);
    }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
    getUsers();
  }, []);

  const addBM = (place) => {
    const newDataBM = [...dataBM, place];
    setDataBM(newDataBM);
    console.log("BM",newDataBM);
    localStorage.removeItem('bookmarks');
    addBookmark(newDataBM);
  }

const addBookmark = async(newDataBM) => {
    console.log(newDataBM);
    localStorage.setItem('bookmarks',JSON.stringify(newDataBM));
    const item = await newDataBM.map(data => data.location_id);
    console.log("Items:",item);
    const userData = bookmarks.filter(data => data.userid===currUser)
    // console.log(userData);
    if(userData.length > 0){
        const newData = userData[0].places;
        console.log(newData);
        const newField = {places: item};
        const user = doc(db , "Bookmarks" , userData[0].id);
        if(newField){
            await updateDoc(user , newField??null);}
        else{
            await updateDoc(user , null);}
    } else {
        await addDoc(bookmarkCollection , {userid: currUser , places: item , });
    }
    getUsers();
}

const deleteBookmark = async(place) => {
    console.log("before delete place:",place);
    const items = dataBM.filter(data => data.location_id !== place.location_id)
    // const items = localStorage.getItem('bookmarks').filter(data => data.location_id !== place.location_id)
    console.log("after delete items: ", dataBM, items);
    localStorage.removeItem('bookmarks');
    await addBookmark(items);
    setDataBM(items);
}

  return (
      <div className='app-image'>
      <BrowserRouter>
      <CssBaseline />
      {/* <Header setCoordinates={coordinates} /> */}
      <Header setCoordinates={setCoordinates} />
      <Routes>
        <Route path='/home' element={<Home setPlacesBM={setPlacesBM} addBM={addBM} coordinates={coordinates} setCoordinates={setCoordinates} deleteBookmark={deleteBookmark}/>} />
        <Route path='/bookmark' element={<Bookmark addBM={addBM} deleteBookmark={deleteBookmark} bookmarks={userBookmarks} />} />
        <Route path='/login' element={<Login setCurrUser={setCurrUser}/>} />
        <Route exact path='/' element={<Signup setCurrUser={setCurrUser}/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
};

export default App;

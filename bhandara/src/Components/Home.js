import React, { useEffect, useState } from "react";
import "./Home.css";
import Search from "./Search";
import Posts from "./Posts";
import AddPost from "./AddPost";
import Modal from "./Modal/Modal";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../Db/firebase";
function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [postsData, setPostsData] = useState();

  useEffect(() => {
    const q = query(collection(db, "BhandharaPosts"));
    
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setPostsData(todosArray);
    });
    return () => unsub();
  }, []);

  const openModal = (content) => {
    setIsModalOpen(true);
    setModalContent(content);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  // function CheckImage(){

  //   if(postsData != null)
  //   {
  //     let imagec = [];
  //     postsData.map((d)=>{
  //       imagec.push(<img src={d.image}/>)
  //     })
  //     return imagec;
  //   }
    
  // }
  return (
    <div className="home-main">
    {/* <img src={postsData[0].dataToSave.image}/> */}
      <Search openModal={openModal} />
      {/* <Post/> */}
      <Posts data={postsData}/>
      <Modal
        isModalOpen={isModalOpen}
        modalContent={modalContent}
        onClose={closeModal}
      />
    </div>
  );
}

export default Home;

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
  const [postsData, setPostsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  // let searching=false
  useEffect(() => {
    const q = query(collection(db, "BhandharaPosts"));

    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setPostsData(todosArray)
      setFilteredData(todosArray)
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
function filterDataBySearch(value) {
  // const searchTerm = e.target.value;
  // setSearchItem(searchTerm)
  const filteredItems = postsData.filter((item) =>
  item.dataToSave.city.toLowerCase().includes(value.toLowerCase())
  );

  setFilteredData(filteredItems);
}
  return (
    <div className="home-main">
      <Search openModal={openModal} searchByValue={filterDataBySearch} />
      <Posts data={filteredData} />
      <Modal
        isModalOpen={isModalOpen}
        modalContent={modalContent}
        onClose={closeModal}
      />
    </div>
  );
}

export default Home;

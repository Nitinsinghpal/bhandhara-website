import React, { useEffect, useState } from "react";
import "./AddPost.css";
import Modal from "./Modal/Modal";
function AddPost() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const openModal = (content) => {
    setIsModalOpen(true);
    setModalContent(content);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      {/* <article>
        <p onClick={() => openModal()}>Buy</p>
      </article> */}

      <section>
        <Modal
          isModalOpen={isModalOpen}
          modalContent={modalContent}
          onClose={closeModal}
        />
      </section>
    </div>
  );
}

export default AddPost;

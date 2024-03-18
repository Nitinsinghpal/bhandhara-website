import React from "react";
import "./Posts.css";
import PostsCard from "./PostsCard";
function Posts({ data }) {
  console.log(data);
  function posts() {
    let cards = [];
    data.map((d) => {
      cards.push(<PostsCard cardInfo={d} />);
    });
    console.log(cards);
    return cards;
  }
  return (
    <>
      {data.length !== 0 ? (
        <div className="posts-main">
          <PostsCard cardInfo={data} />
        </div>
      ) : (
        <div className="noPostAvailable-main">Post will display here</div>
      )}

      {/* <PostsCard/>
        <PostsCard/>
        <PostsCard/>
        <PostsCard/>
        <PostsCard/> */}
    </>
  );
}

export default Posts;

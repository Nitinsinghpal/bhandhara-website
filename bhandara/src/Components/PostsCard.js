import React from "react";
import "./PostsCard.css";
import pic2 from "../Images/Pic2.jpg";
function PostsCard(cardInfo) {
 
  
  function cardsFunc(params) {
    let cards = [];
    if(cardInfo != undefined && cardInfo.cardInfo != undefined){
      //  data = cardInfo.cardInfo[0].dataToSave;
      // console.log(d.dataToSave)
       
      
      cardInfo.cardInfo.map((d) =>{
        cards.push(

        )
       })
      // console.log(data)
    }
    else{
      return <h5>No Bhandhara's</h5>
    }
  }
  
  return (
    <div className="postsCard-main">
      <div className="card">
        <div className="card-left">
          
            <img src={pic2} className="card-img" />
        
        </div>
        <div className="card-right">
            <div className="card-right-content">
            <p className="address">Address :</p>
          <p className="location">Location : </p>
          <p className="status">Status : Outdated</p>

            </div>
            
        </div>
      </div>
    </div>
  );
}

export default PostsCard;

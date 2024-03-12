import React from "react";
import "./PostsCard.css";
import pic2 from "../Images/Pic2.jpg";
function PostsCard(cardInfo) {
  function cardsFunc(params) {
    let cards = [];
    if (cardInfo != undefined && cardInfo.cardInfo != undefined) {
      //  data = cardInfo.cardInfo[0].dataToSave;
      // console.log(d.dataToSave)

      cardInfo.cardInfo.map((d) => {
        if (d.dataToSave.verified === true) {
          cards.push(
            <div className="postsCard-main">
              <div className="card">
                <div className="card-left">
                  <img src={d.dataToSave.image} className="card-img" />
                </div>
                <div className="card-right">
                  {/* <div className="card-right-content">
                    <p className="address">Address : {d.dataToSave.address},{d.dataToSave.city},{d.dataToSave.state},{d.dataToSave.country}</p>
                    <p className="location">
                      Location : {d.dataToSave.locationLink}
                    </p>
                    <p className="desc">Description : {d.dataToSave.desc}</p>
                    <p className="date">
                      Date : {d.dataToSave.date}
                    </p>
                  </div> */}

                  <div className="card-right-content">
                    <div className="card-right-content-field">
                      <h5> Address : </h5>
                      <p className="address">
                        {d.dataToSave.address},{d.dataToSave.city},
                        {d.dataToSave.state},{d.dataToSave.country}
                      </p>
                    </div>
                    <div className="card-right-content-field">
                      <h5> Location : </h5>
                      <p className="location"><a href={d.dataToSave.locationLink} target="_blank" rel="noopener noreferrer">Check on google map</a></p>
                    </div>
                    <div className="card-right-content-field">
                      <h5> Description : </h5>
                      <p className="desc"> {d.dataToSave.desc}</p>
                    </div>
                    <div className="card-right-content-field">
                      <h5> Date : </h5>
                      <p className="date">{d.dataToSave.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      });
      // console.log(data)
      return cards;
    } else {
      return <h5>No Bhandhara's</h5>;
    }
  }

  return <>{cardsFunc()}</>;
}

export default PostsCard;

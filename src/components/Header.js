import React from "react";
import styled from "styled-components";

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 25vw;
  height: 50%;
  gap: 25%;
  color: white;
  border-bottom: 2px solid white;
  background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);

  button {
    display: flex;
    width: 3vw;
    height: 6vh;
    cursor: pointer;
    background-color: white;
    border: none;
    position: relative;
    top: 5px;
    align-items: center;
    border-radius: 50px;
    border: 2px solid blueviolet;
 
  }
  img {
    width: 2vw;
    border-radius: 10px;
    
  }
`;

const Header = (props) => {
  const ButtonRenderer = () => {
    switch (props.changePage) {
      case "App":
        return (
          <div>
            <button onClick={props.onClickChangePage}>
              <img
                src={
                  "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/emoji-one/98/heart-with-arrow_1f498.png"
                }
                alt="icone-userHeart"
              />
            </button>
          </div>
        );
      case "MatchesScreen":
        return (
          <div>
            <button onClick={props.onClickGoApp}><img
                src={
                  "https://media.istockphoto.com/illustrations/back-arrow-icon-special-purple-round-button-illustration-id945048938?k=6&m=945048938&s=170667a&w=0&h=_rlXNd_I862oiAFtePVg5u-uztKxScEd2P7PFtZt8bc="
                }
                alt="icone-userHeart"
              /></button>
          </div>
        );
      default:
        return "";
    }
  };

  return (
    <Title>
      <h2>astromatch</h2>
      {ButtonRenderer()}
    </Title>
  );
};

export default Header;

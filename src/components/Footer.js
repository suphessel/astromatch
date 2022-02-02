import React from "react";
import styled from "styled-components";


const ContainerChoice = styled.div`
  display: flex;
  flex-direction: row;
  width: 25vw;
  height: 10vh;
  background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
  justify-content: space-evenly;
  align-items: center;
  border-top: 2px solid white;
  

  button {
    display: flex;
    flex-direction: row;
    width: 4vw;
    height: 7vh;
    cursor: pointer;
    background: none;
    align-items: center;
    border: none;

    img {
      width: 3vw;
    }
  }
`;

const Footer = (props) => {
  return (
    <ContainerChoice>
      <button onClick={props.onClickChoiceNo}>
        <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Deletion_icon.svg/1024px-Deletion_icon.svg.png"} alt="icone-coração" />
      </button>

      <button onClick={props.onClickChoiceYes}>
        <img src={"https://www.freeiconspng.com/thumbs/yes-png/yes-png-9.png"} alt="icone-coração" />
      </button>
    </ContainerChoice>
  );
};

export default Footer;

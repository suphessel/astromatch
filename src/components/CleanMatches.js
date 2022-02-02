import React, { useEffect } from "react";
import axios from "axios";
import { url } from "../constants/BASE-URL";
import styled from "styled-components";


const ContainerClean = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 670px;
  right: 250px;
  width: 8vw;

  button {
      cursor: pointer;
      color: blueviolet;
      border-radius: 20px;
      border: 2px solid blueviolet;
      background-color: white;
      height: 8vh;
      
      :hover{
          background-color: lavender;
      }
  }
  
`;

const CleanMatches = (props) => {

    useEffect(() => {
      getClear();
    }, []);
  
    const getClear = () => {
      axios
        .put(`${url}/clear`)
        .then((response) => {
          console.log("CLEAR", response);
          
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const onClickClear = (id) => {
        getClear();
    };
  
    return (
      <ContainerClean>
          <button onClick={onClickClear}>Matches Reset</button>
      </ContainerClean>
    );
  };
  
  export default CleanMatches;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../constants/BASE-URL";
import styled from "styled-components";

const ContainerMatches = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 120px);
  width: 22vw;
  height: 480px;
  margin-top: 20px;
  margin-bottom: 40px;
  background-color: white;
  border-radius: 20px;
  justify-content: center;
  justify-items: center;
  text-align: center;
`;

const Avatar = styled.img`
  display: flex;
  position: relative;
  top: 15px;
  margin-left: 10px;
  width: 4vw;
  height: 8vh;
  border-radius: 40px;
  
 
`;

const MatchesScreen = (props) => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches();
  }, []);

  const getMatches = () => {
    axios
      .get(`${url}/matches`)
      .then((response) => {
        console.log("MATCHES", response);
        setMatches(response.data.matches);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ContainerMatches>
        {matches &&
          matches.map((profile) => {
            console.log(profile);
            return (
              <div>
                {" "}
                <Avatar src={profile ? profile.photo : "Sem foto"} />
                <p>{profile ? profile.name : "Sem nome"}</p>
              </div>
            );
          })}
    </ContainerMatches>
  );
};

export default MatchesScreen;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { url, headers } from "./constants/BASE-URL";
import MatchesScreen from "./components/MatchesScreen";
import ProfileCard from "./components/ProfileCard";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CleanMatches from "./components/CleanMatches";

const Container = styled.div`
  display: flex;
  background-color: pink;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  
`;

const ContainerApp = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  max-width: 25vw;
  max-height: 80vh;
  align-items: center;
  background-image: url(${"https://wallpaperaccess.com/full/1510313.jpg"});
`
const ButtonChoice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 25px;
  padding-bottom: 25px;
`;

const ButtonClear = styled.div`
  display: flex;
  height: 2vh;

`;



const App = (props) => {
  const [profile, setProfile] = useState({});
  const [changePage, setChangePage] = useState("App");

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = () => {
    axios
      .get(`${url}/person`)
      .then((response) => {
        console.log("RESPONSE PROFILE", response);
        setProfile(response.data.profile);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const postChoice = (choice) => {
    const body = {
      id: profile.id,
      choice: choice,
    };
    console.log("CHOICE", choice);
    console.log("BODY", body);
    axios
      .post(`${url}/choose-person`, body, headers)
      .then((response) => {
        console.log("RESPONSE DO CHOICE", response);
      })
      .catch((err) => {
        console.log(err);
      });
    getProfile();
  };

  const onClickChoiceNo = () => {
    postChoice(false);
  };

  const onClickChoiceYes = () => {
    postChoice(true);
  };

  const onClickChangePage = () => {
    console.log("ENTREI NO MATCHES");
    setChangePage("MatchesScreen");
  };

  const onClickGoApp = () => {
    console.log("Entrei no onclickGoApp");
    setChangePage("App");
  };
  const changeRender = () => {
    switch (changePage) {
      case "App":
        return (
          <div>
            <ProfileCard profile={profile} />
            <ButtonChoice>
              <Footer
                onClickChoiceNo={onClickChoiceNo}
                onClickChoiceYes={onClickChoiceYes}
              />
            </ButtonChoice>
          </div>
        );
      case "MatchesScreen":
        return <MatchesScreen onClickGoApp={onClickGoApp} profile={profile} />;
      default:
        return "";
    }
  };

  return (
    <Container>
      <ContainerApp>
        <Header
          changePage={changePage}
          onClickChangePage={onClickChangePage}
          onClickGoApp={onClickGoApp}
        />
        {changeRender()}
      </ContainerApp>
      <ButtonClear><CleanMatches/></ButtonClear>
      
    </Container>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import Member from "../../Component/Members/Member/Member";
import Navbar from "../../Component/Members/Navbar/Navbar";
import "./Members.css";
import Footer from "../../Component/Footer";
import Navigation from "../../Component/Navigation";

const Members = () => {
  const [teams, setTeams] = useState("");
  const [currentTab, setCurrentTab] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const changeCurrentTab = (tab) => {
    setCurrentTab(tab);
  };

  useEffect(() => {
    async function fetchAPI() {
      setIsLoading(true);
      const res = await fetch("https://gaurkrishna.pythonanywhere.com/team/");
      const data = await res.json();
      setTeams(data.Team);
      setIsLoading(false);
      /*------pre loading images------*/
      data.Team.map((team) =>
        team.teamMembers.map((member) => {
          const img = new Image();
          img.src = member.profilepic;
          return img;
        })
      );
    }
    fetchAPI();
    window.scroll(0, 0);
  }, []);

  const teamNames = teams !== "" ? teams.map((team) => team.name) : null;

  const CurrentTabMembers =
    teams !== ""
      ? teams[currentTab].teamMembers.map((member) => (
          <Member
            imgSrc={member.profilepic}
            name={`${member.first_name} ${member.last_name}`}
            position={member.role}
            linkedIn={member.linkedIn}
          />
        ))
      : [];

  return (
    <React.Fragment>
      <Navigation />
      <Navbar
        teamNames={teamNames}
        currentTab={currentTab}
        changeCurrentTab={changeCurrentTab}
      />
      <div className="members">
        {isLoading ? (
          <div className="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          CurrentTabMembers
        )}
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Members;

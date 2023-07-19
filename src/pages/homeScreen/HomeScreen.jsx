import React from "react";
import HeaderSection from "../../components/HeaderSection";
import HeroSection from "../../components/heroSection/HeroSection";
import {GiCandleLight,GiLoveLetter} from 'react-icons/gi'
import {AiOutlineFieldTime} from 'react-icons/ai'
import Cv from '../../assets/John-Cv.pdf'
import {FaBusinessTime} from 'react-icons/fa'
import "./home.scss";
import Contect from "../../components/contactUs/Contect";
import Mywork from "../../components/mywork/Mywork";
function HomeScreen() {
  return (
    <div className="home">
      <HeaderSection />
      <HeroSection />
      <div className="about">
        <div className="left">
          <img src="/images/user.png" />
        </div>
        <div className="right">
          <h1>About Us</h1>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            dignissimos voluptas eaque explicabo sed praesentium ex voluptatum,
            doloremque ea quae a eligendi hic numquam debitis incidunt nemo
            corrupti minus eveniet.
          </p>
          <div className="div">
            <div className="span">
                <AiOutlineFieldTime className="icon" />
                <span className="expirence">Experice</span>
                <span>7{" >"} Years</span>
            </div>
            <div className="span">
                <FaBusinessTime className="icon" />
                <span className="projects">
                    Projects
                </span>
                <span>100+ projects</span>

            </div>
            <div className="span">
                <GiCandleLight className="icon"/>
                <span className="complited">
                Complited
                </span>
                <span>85+ complited </span>

            </div>
          </div>
          <div className="cv">
           <a style={{textDecoration: "none" , color: 'white'}} download='' href={Cv}> <span>Download CV</span></a>
            <GiLoveLetter className="icon"/>
          </div>
        </div>
      </div>
      <Mywork/>
      <Contect/>
    </div>
  );
}

export default HomeScreen;

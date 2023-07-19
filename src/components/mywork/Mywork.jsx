import React from "react";
import "./mywork.scss";
import { FcBrokenLink } from "react-icons/fc";
function Mywork() {
  return (
    <div className="mywork">
      <h1>My Work</h1>
      <div className="section">
        <div className="work">
          <img src="/images/work4.jpg" alt="" />
          <div className="layout">
            <h1>This my workd</h1>
            <p>when i write my fast project wast 2005</p>
            <div className="btn">
              <span>Read more</span>
              <FcBrokenLink className="icon" />
            </div>
          </div>
        </div>
        <div className="work">
          <img src="/images/work3.jpg" alt="" />
          <div className="layout">
            <h1>This my workd</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
              quia possimus nemo architecto laboriosam voluptatibus fuga
              quibusdam magni ipsum similique, natus, suscipit quasi repellat.
              Ipsa aliquid aspernatur autem provident, laboriosam eveniet
              assumenda. Dignissimos, sed inventore. Illum quam accusamus
              excepturi iste!
            </p>
            <div className="btn">
              <span>Read more</span>
              <FcBrokenLink className="icon" />
            </div>
          </div>
        </div>
        <div className="work">
          <img src="/images/work-2.png" alt="" />
          <div className="layout">
            <h1>This my workd</h1>
            <p>when i write my fast project wast 2005</p>
            <div className="btn">
              <span>Read more</span>
              <FcBrokenLink className="icon" />
            </div>
          </div>
        </div>
      </div>
      <span  style={{cursor: 'pointer', fontSize: 18, padding: 20, width: '50%', borderRadius: 20, color: 'white', background: 'black', textAlign: 'center'}}>Read more</span>
    </div>
  );
}

export default Mywork;

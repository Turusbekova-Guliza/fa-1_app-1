import { useState, useEffect } from "react";
import "./Profile.css";
import imgOne from "../image/1-img.png";
import imgTwo from "../image/black_user.jpg";
import imgThree from "../image/img-2.webp";
import imgFour from "../image/img-img.webp";

const Profile = () => {
  const [profile, setProfile] = useState(false);

  useEffect(() => {
    const btnClose = document.querySelector(".btn-x-back");
    const formProfile = document.querySelector(".form-for-profile");

    btnClose.onclick = () => {
      console.log("click");
      formProfile.style.display = "none";
      setProfile(!profile);
    };
  }, []);
  return (
    <div>
      <div className="form-for-profile">
        <div className="div-form-profile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-gear-fill"
            viewBox="0 0 16 16"
          >
            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
          </svg>
          <h1>PROFILE</h1>
          <button className="btn-x-back">
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="public-and-profile">
          <div className="div2-profile-icons">
            <div>
              <p>politeness.g</p>
              <br/>
              {/* <a href="https//whatsapp.com/996500595178">hello world</a> */}
              <br/>
              <img className="img-profile-icon" src={imgTwo} alt="" />
            </div>
            <div>
              <p>followers:</p>
              <br/>
              <p>following:</p>
            </div>
          </div>
          <div className="publication-div">
            <input type="text" placeholder="search" />
            <br />
            <p>PUBLICATION</p>
            <br />
            <hr style={{ width: "300px" }} />
            <br />
            <br />
            <div id="img-public-profile" className="scrool-bar">
              <img className="image-1" src={imgOne} alt="" />
              <img className="image-1" src={imgThree} alt="" />
              <img className="image-1" src={imgFour} alt="" />
              <img className="image-1" src={imgOne} alt="" />
              <img className="image-1" src={imgThree} alt="" />
              <img className="image-1" src={imgFour} alt="" />
              <img className="image-1" src={imgOne} alt="" />
              <img className="image-1" src={imgThree} alt="" />
              <img className="image-1" src={imgFour} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

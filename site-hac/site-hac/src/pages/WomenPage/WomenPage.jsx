import React from "react";
import "./WomenPage.css";
import Modal from "../../components/Modal/Modal";
import Aisedep from "./image/women1.jpg";
import Kutman from "./image/women2.jpg";
import Aruuke from "./image/women3.webp";
import Bayastan from "./image/women4.webp";
import English from "./image/women5.webp";
import Python from "./image/women6.webp";

const WomenPage = () => {
  return (
    <div>
      <div className="teachers-photo">
        <div className="teacher-img">
          <div className="face front">
            <img
              className="belek-img"
              style={{ width: 300, height: 300 }}
              src={Aisedep}
              alt=""
            />
            <div className="intro">
              <h3 className="teachers-name"></h3>
            </div>
          </div>

          <div className="face back">
            <h3 className="teachers-name">
              Мужские кроссовки <br />
              Mizuno Wave Rider 27 SSW для бега
            </h3>

            <p className="teachers-info">Размеры:41,42,43,44,45,46</p>
            <div className="link">
              <a className="beka-a" href="#">
                Цена:$180
              </a>
            </div>
          </div>
        </div>

        <div className="teacher-img">
          <div className="face front">
            <img
              className="belek-img"
              style={{ width: 300, height: 300 }}
              src={Kutman}
              alt=""
            />
            <div className="intro">
              <h3 className="teachers-name">
                Мужские кроссовки SKECHERS
                <br /> Uno Stand On Air на каждый день
              </h3>
              {/* <p className="teachers-info"> The hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p> */}
            </div>
          </div>

          <div className="face back">
            <h3 className="teachers-name">
              Мужские кроссовки SKECHERS <br />
              Uno Stand On Air на каждый день
            </h3>

            <p className="teachers-info">
              Размеры<span>38, 39, 40, 41,42</span>
            </p>

            <div className="link">
              <a className="beka-a" href="#">
                Цена:$120
              </a>
            </div>
          </div>
        </div>

        <div className="teacher-img">
          <div className="face front">
            <img
              className="belek-img"
              style={{ width: 300, height: 300 }}
              src={Aruuke}
              alt=""
            />
            <div className="intro">
              <h3 className="teachers-name"></h3>
              {/* <p className="teachers-info"> The hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p> */}
            </div>
          </div>

          <div className="face back">
            <h3 className="teachers-name">
              Мужские кроссовки Mizuno Wave Rider 27 для бега
            </h3>
            <p className="teachers-info">Размеры:39,40,41,42</p>
            <div className="link">
              <a className="beka-a" href="#">
                Цена:$280
              </a>
            </div>
          </div>
        </div>

        <div className="teacher-img">
          <div className="face front">
            <img
              className="belek-img"
              style={{ width: 300, height: 300 }}
              src={Bayastan}
              alt=""
            />
            <div className="intro">
              <h3 className="teachers-name"></h3>
              {/* <p className="teachers-info"> The hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p> */}
            </div>
          </div>

          <div className="face back">
            <h3 className="teachers-name">
              Мужские кроссовки ASICS GEL-Cumulus® 25 для бега
            </h3>

            <p className="teachers-info">
              Размеры:<span>39,40,41,42</span>
            </p>
            <div className="link">
              <a className="beka-a" href="#">
                Цена:$230
              </a>
            </div>
          </div>
        </div>

        <div className="teacher-img">
          <div className="face front">
            <img
              className="belek-img "
              style={{ width: 300, height: 300 }}
              src={Python}
              alt=""
            />
            <div className="intro">
              <h3 className="teachers-name"></h3>
              {/* <p className="teachers-info"> The hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p> */}
            </div>
          </div>

          <div className="face back">
            <h3 className="teachers-name">
              Мужские Шлепки Timberland
              <br />
              Get Outslide Slide Terlik
            </h3>

            <p className="teachers-info">Размеры:39,40,42</p>
            <div className="link">
              <a className="beka-a" href="#">
                Цена:$180
              </a>
            </div>
          </div>
        </div>

        <div className="teacher-img">
          <div className="face front">
            <img
              className="belek-img"
              style={{ width: 300, height: 300 }}
              src={English}
              alt=""
            />
            <div className="intro">
              <h3 className="teachers-name"></h3>
              {/* <p className="teachers-info"> The hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p> */}
            </div>
          </div>

          <div className="face back">
            <h3 className="teachers-name">
              Мужские шлепки Timberland Get Outslide Slide Terlik
            </h3>

            <p className="teachers-info">
              {" "}
              <span>
                Мужские шлепки Timberland Get Outslide Slide Terlik
              </span>{" "}
            </p>

            <div className="link">
              <a className="beka-a" href="#">
                Цена:6650сом
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WomenPage;

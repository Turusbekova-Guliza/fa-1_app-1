import React, {} from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import "../header/profile/Profile"

// import Card1 from "./image/msg-954831890-62440.jpg";
// import Modal from '../Modal/Modal';
import Modal from "../../components/Modal/Modal";
import Aisedep from "./image/710KsTsYc+L._AC_SR400,400_.jpg";
import Kutman from "./image/nike2.jpg";
import Aruuke from "./image/nike3.jpg";
import Bayastan from "./image/nike4_.jpg";
import English from "./image/nike5.jpg";
import Python from "./image/nike6.jpg";
import BurgerMenu from "../Theme/burger-menu/Burger-Menu";

const Header = () => {
  // const [openModal, setOpenModel] = useState(false);

  return (
    <div>
      <BurgerMenu />
      <nav>
        <ul>
          <li>
            <Link className="link__a" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link__a" to="/MainPage">
              ManPage
            </Link>
          </li>
          <li>
            <Link className="link__a" to="/SalePage">
              SalePage
            </Link>
          </li>
          <li>
            <Link className="link__a" to="/WomenPage">
              WomanPage
            </Link>
            <Modal />
          </li>
        </ul>
      </nav>
      {/* <Modal/> */}
      <section className="home">
        <div className="home-section">
          <div className="image-section">
            <div className="text-wrapper">
              <h1>Все Товары</h1>
              <p>
                {" "}
                <span className="span-blue">Главная</span> <span>//</span>{" "}
                <span className="text-blue"> Все Товары</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <main>
        <div className="main-wrapper">
          <div className="main-card">
            <div className="container">
              <div className="wrapper__teacher">
                <h2 className="main__p">Главная</h2>
                <p className="main__p">Все нащи Товары</p>
              </div>

              {/* ///////////////////////////////////// TEACHER INFO-photo ///////////////////////////////////////// */}

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
                      {/* <p className="teachers-info"> The hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p> */}
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
          </div>
        </div>
      </main>
    </div>
  );
};

export default Header;

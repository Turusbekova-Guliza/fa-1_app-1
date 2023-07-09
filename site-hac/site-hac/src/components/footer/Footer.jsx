import React from "react";
import "./Footer.css";

import facebook from './images/facebook.png'
import telegram from './images/telegram.png'
import watsapp from './images/whatsapp.png'
import instagram from './images/instagram.png'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <section className="footer__section-1">
          <div>
            <h2>SneaksKG</h2>
            <p>
              Спортивная обувь и одежда НА ЗАКАЗ По городу Бишкек и всему
              Кыргызстану. Только оригинальные товары. Доставка из Турции 7-14
              дней из США от 12 до 30 дней Все цены включают доставку до
              Бишкека.
            </p>
          </div>
          <div>
            <h3>Карта Сайта</h3>
            <p>
              <a className="footer__p-a" href="">
                Обувь
              </a>
            </p>
            <p>
              <a className="footer__p-a" href="">
                Одежда Верх
              </a>
            </p>
            <p>
              <a className="footer__p-a" href="">
                Одежда Низ
              </a>
            </p>
            <p>
              <a className="footer__p-a" href="">
                Аксессуары
              </a>
            </p>
            <p>
              <a className="footer__p-a" href="">
                Скидки
              </a>
            </p>
            <p>
              <a className="footer__p-a" href="">
                Понижение Цены За Последние Сутки
              </a>
            </p>
          </div>
          <div>
            <h3>Мой Аккаунт</h3>
            <p>
              <a className="footer__p-a" href="">
                Вход
              </a>
            </p>
            <p>
              <a className="footer__p-a" href="">
                Регистрация
              </a>
            </p>
            <p>
              <a className="footer__p-a" href="">
                Часто Задаваемые Вопросы
              </a>
            </p>
            <p>
              <a className="footer__p-a" href="">
                О Нас
              </a>
            </p>
            <p>
              <a className="footer__p-a" href="">
                Как Заказать?
              </a>
            </p>
            <p>
              <a className="footer__p-a" href="">
                Публичная Оферта
              </a>
            </p>
            <p>
              <a className="footer__p-a" href="">
                Политика Конфиденциальности
              </a>
            </p>
          </div>
          <div className="footer__contact">
            <h3>Контакты</h3>
            <p>
              <a className="footer__p-a" href="">
                Адрес: У нас нет офиса в Бишкеке, мы на заказ всё возим.
              </a>
            </p>
            <p>
              <a className="footer__p-a" href="https://www.whatsapp.com">
                Номер/WA: +996 777 777 777
              </a>
            </p>
            <p>
              <a className="footer__p-a" href="https://mail.google.com">
                Email: info@sneaks.shop
              </a>
            </p>
          </div>
        </section>
        <div className="footer__div-image">
          <a href="https://www.facebook.com" target="Facebook">
            <img className="image_1" src={facebook} alt="" />
          </a>
          <a href="https://t.me.com" target="Telegram">
            <img className="image_1" src={telegram} alt="" />
          </a>
          <a href="https://www.whatsapp.com" target="WhatsApp">
            <img className="image_1" src={watsapp} alt="" />
          </a>
          <a href="https://www.instagram.com" target="Instagram">
            <img className="image_1" src={instagram} alt="" />
          </a>
        </div>
        <section className="footer__section-2">
          <p>
            <b>© 2019-2022 Sneaks KG (ИП HCJR).</b>
          </p>
        </section>
      </footer>
    </>
  );
};

export default Footer;

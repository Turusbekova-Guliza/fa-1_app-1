import React from 'react'
import { Modal, Button} from 'antd';
import { useState } from 'react';
import './Modal.css'


const antModal = () => {
    const [open, setOpen] = useState(false);
  return (
    <>
      <Button className='button-signIn' type="primary" onClick={() => setOpen(true)}>
        Sign In
      </Button>
      <Modal
        title="Modal 1000px width"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
         <div className="entrace-registr">
        <div className="container">
            <div className="row">
                <a href="#signin" class="active"> 
                    <h4>Вход</h4>
                </a>
    
                <div className="obsh">
    
            <div class="login-password">
    
                <div class="elements">
    
                <input type="hidden" name="authenticity_token" 
                value="VPWzfHbbGJBpLGISkF4nzd4LvE1-chhi0BYPZ6wR23xpB6J69_bXm7zLR9NMl3xwNOkcNm_CaxeN3Se3dLbyJA" autocomplete="off"/>
    
                <input autofocus="autofocus" placeholder="Логин" type="text" name="user[username]" id="user_username"/>
    
                <input placeholder="Пароль" type="password" name="user[password]" id="user_password"/> 
            </div>
    
            <div className="button-box">
                <div class="login-toggle-btn">
                    <input nameName="user[remember_me]" type="hidden" value="0" autocomplete="off"/>
                    <input type="checkbox" value="1" name="user[remember_me]" id="user_remember_me"/>
                       <a className="flote-none" href="javascript:void(0)" id="text">Запомнить меня</a>
    
                      <a href="/users/password/new/" className="password">Забыли пароль?</a><br/> 
                    </div>
                    
    
                </div>
                <button type="submit"><span>Войти</span></button>
            </div>
    
    
            </div>
                </div>
            </div>   
        </div>
      </Modal>
    </>
  );
}

export default antModal
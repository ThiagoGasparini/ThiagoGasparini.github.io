import React from "react";
import Header from "./Header";
import emailjs from 'emailjs-com';

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmailMessage', 'template_biwn1qu', e.target, 'o1rVVkNwI5pDt03Vw')
      .then((result) => {
          alert('Mensagem Enviada com Sucesso!!!')
      }, (error) => {
          alert(error.message)
      });
      e.target.reset();
  };
  return (
    <div>
      <Header />
      <div>
        <form onSubmit={sendEmail}>
          <div>
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" id="name" required placeholder="Digite seu Nome" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required placeholder="Digite seu Email" />
          </div>
          <div>
            <label htmlFor="message">Mensagem</label>
            <textarea name="message" id="message" cols="30" rows="10"></textarea>
          </div>
          <div>
            <input type="submit" name="message" required placeholder="Digite uma mensagem" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
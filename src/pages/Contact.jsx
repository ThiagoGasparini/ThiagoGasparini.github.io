import React from 'react';
import Header from './Header';
import emailjs from 'emailjs-com';
import './pages-css/Contact.css';

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'gmailMessage',
        'template_biwn1qu',
        e.target,
        'o1rVVkNwI5pDt03Vw'
      )
      .then(
        (result) => {
          alert('Mensagem Enviada com Sucesso!!!');
        },
        (error) => {
          alert(error.message);
        }
      );
    e.target.reset();
  };
  return (
    <div>
      <Header />
      <div>
        <form onSubmit={sendEmail}>
          <div className='form'>
            <div className="name-input">
              <label className="namelabel" htmlFor="name">
                Nome*{' '}
              </label>
              <input
                className="nameInput"
                type="text"
                name="name"
                id="name"
                required
                placeholder="Digite seu Nome"
              />
            </div>
            <div className="name-input">
              <label className="namelabel" htmlFor="email">
                Email*{' '}
              </label>
              <input
                className="nameInput"
                type="email"
                name="email"
                id="email"
                required
                placeholder="Digite seu Email"
              />
            </div>
            <div className="name-input">
              <label className="namelabel" htmlFor="subject">
                Subject*{' '}
              </label>
              <input
                className="nameInput"
                type="text"
                name="subject"
                id="subject"
                required
                placeholder="Digite um Assunto"
              />
            </div>
            <div className="name-input">
              <label className="namelabel" htmlFor="message">
                Mensagem*{' '}
              </label>
              <textarea
                className="nameInput"
                name="message"
                id="message"
                cols="20"
                rows="5"
                required
                placeholder="Digite uma mensagem"
              ></textarea>
            </div>
            <div>
              <input className="sub" type="submit" name="" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

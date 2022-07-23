import React from 'react';

const ContactoPage = () => {
  return (
    <main className="holder">
      <div className="columna contacto">
        <h2>Complete el siguiente formulario</h2>
        <form>
          <p>
            <label>Nombre</label>
            <input type="text" name="nombre"/>
          </p>
          <p>
            <label>Email</label>
            <input type="email" name="email"/>
          </p>
          <p>
            <label>Telefono</label>
            <input type="text" name="telefono"/>
          </p>
          <p>
            <label>Comentario</label>
            <textarea name="mensaje"/>
          </p>
          <p className="centrar">
            <input type="submit" value="Enviar"/>
          </p>
        </form>
      </div>
      <div className="columna datos">
        <h2>Otras vias de contacto</h2>
        <p>Tambien puede contactarse con nosotros usando los siguientes medios: </p>
        <ul>
          <li>Teléfono</li>
          <li>Email: </li>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Skype</li>
          <li>Instagram</li>
        </ul>
      </div>
    </main>
  );
}

export default ContactoPage;
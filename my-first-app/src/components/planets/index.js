import React, { Fragment } from "react";
import Planet from "./planet";

const Planets = () => {
  return (
    <Fragment>
      <h3>Planet List</h3>
      <hr />
      <Planet
        name="Mercúrio"
        text="Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. "
        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg"
        link="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
        title_with_underline={true}
      />
      <hr />
      <Planet
        name="Terra"
        text="A Terra é o terceiro planeta mais próximo do Sol, o mais denso e o quinto maior dos oito planetas do Sistema Solar. É também o maior dos quatro planetas telúricos."
        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/300px-The_Blue_Marble_%28remastered%29.jpg"
        gray={true}
      />
    </Fragment>
  );
};

export default Planets;

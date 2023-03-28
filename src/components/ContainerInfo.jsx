import React from "react";
import Button from "./button";
import "./styles/ContainerInfo.css";

const ContainerInfo = ({ quote, handleNewQuote }) => {
  console.log(quote);
  return (
    <section className="ContainerInfo">
      <h1 className="ContainerInfo__title"> fraces </h1>

      <Button handleNewQuote={handleNewQuote} />

      <article className="ContainerInfo__phrase">
        <p>{quote.phrase}</p>
      </article>

      <article className="ContainerInfo__author">
        <h4> fuente: {quote.author} </h4>
      </article>
    </section>
  );
};

export default ContainerInfo;

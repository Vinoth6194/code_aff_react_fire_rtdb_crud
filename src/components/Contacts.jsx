import React from "react";
import ContactForm from "./ContactForm";

function Contacts() {
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-center">Contacts Register</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <ContactForm />
        </div>
        <div className="col-md-7">Contacts list </div>
      </div>
    </>
  );
}

export default Contacts;

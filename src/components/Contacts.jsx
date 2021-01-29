import React from "react";
import ContactForm from "./ContactForm";

function Contacts() {
  return (
    <>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4 text-center">Contacts Register</h1>
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

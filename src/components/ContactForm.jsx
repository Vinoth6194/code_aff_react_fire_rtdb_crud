import React, { useState } from "react";

function ContactForm(props) {
  const initialFieldValues = {
    fullName: "",
    mobile: "",
    email: "",
    address: "",
  };

  const [values, setValues] = useState(initialFieldValues);
  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    console.log(values);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addOrEdit(values);
  };

  return (
    <form autoComplete="off">
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-user"></i>
          </div>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Full Name"
          value={values.fullName}
          name="fullName"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-row">
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-mobile-alt"></i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Mobile"
            value={values.mobile}
            name="mobile"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-envelope"></i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            value={values.email}
            name="email"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-group">
        <textarea
          className="form-control"
          name="address"
          placeholder="Address"
          value={values.address}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <button className="btn btn-primary btn-block" type="submit">
          Save
        </button>
      </div>
    </form>
  );
}

export default ContactForm;

import React, { useState } from "react";
import Cards from "./Cards";

const InputForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cardData, setCardData] = useState("");
  const [editData, setEditData] = useState("");

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (editData !== null) {
      // If editData is not null, update the existing data at that index
      const updatedCardData = [...cardData];
      updatedCardData[editData] = {
        firstName,
        lastName,
        email,
        password,
      };
      setCardData(updatedCardData);
      setEditData(null); // Clear the editData
    } else {
      // Otherwise, add new data as a new card
      setCardData([
        ...cardData,
        {
          firstName,
          lastName,
          email,
          password,
        },
      ]);
    }
  
    // Clear the form fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };
  
  

  const handleEdit = (index) => {
    const dataToEdit = cardData[index];
    setFirstName(dataToEdit.firstName);
    setLastName(dataToEdit.lastName);
    setEmail(dataToEdit.email);
    setPassword(dataToEdit.password);
    setEditData(index);
  };

  const handleDelete = (index) => {
    const updatedData = [...cardData];
    updatedData.splice(index, 1);
    setCardData(updatedData);
  };

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <h1 className="text-center fw-bold">Crud Application</h1>
            <form
              action=""
              className="px-4 py-2 mt-5 bg-secondary"
              onSubmit={handleSubmit}
            >
              <div className="row">
                <div className="col my-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    aria-label="First name"
                    value={firstName}
                    onChange={handleFirstName}
                  />
                </div>
                <div className="colmy-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    aria-label="Last name"
                    value={lastName}
                    onChange={handleLastName}
                  />
                </div>
                <div className="col-12 mt-2">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    id="inputEmail4"
                    value={email}
                    onChange={handleEmail}
                  />
                </div>
                <div className="col-12 my-2">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    id="inputPassword4"
                    value={password}
                    onChange={handlePassword}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <button className="btn btn-dark" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Cards cardData={cardData} onDelete={handleDelete} onEdit={handleEdit} />
    </>
  );
};

export default InputForm;

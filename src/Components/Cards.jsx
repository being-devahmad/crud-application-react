import React from "react";

const Cards = ({ cardData, onDelete , onEdit}) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="text-center my-3 fw-bold">Submitted Data</h1>
          {Array.isArray(cardData) &&
            cardData.map((data, index) => (
              <div className="col-lg-4 col-md-6 col-12" key={index}>
                <div
                  className="card mt-3 bg-secondary text-white"
                  style={{ width: "18rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">Person : {index + 1}</h5>
                    <p className="card-text">First Name : {data.firstName} </p>
                    <p className="card-text">Last Name : {data.lastName} </p>
                    <p className="card-text">Email : {data.email} </p>
                    <p className="card-text">Password : {data.password} </p>
                    <div className="d-flex justify-content-around">
                      <button
                        className="btn btn-dark px-4"
                        onClick={()=>onEdit(index)} // Call onEdit using index
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-dark px-4"
                        onClick={() => onDelete(index)} // Call onDelete using index
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Cards;

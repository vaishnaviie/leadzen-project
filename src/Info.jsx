import { useState } from "react";
import "./Info.scss";
import axios from "axios";

const Info = ({ arr = [] }) => {
  const [details, setDetails] = useState({
    id: "",
    name: "",
    address: {
      suite: "",
      street: "",
      city: "",
    },
    email: "",
    phone: "",
    website: "",
    username: "",
    company: {
      name: "",
    },
  });

  const [showDetailBtn, setShowDetailBtn] = useState(false);

  const clickHandler = (id) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setDetails(res.data);
      });

    setShowDetailBtn(true);
  };
  return (
    <div className="info-container">
      {showDetailBtn && (
        <div className="outer-description">
          <div className="description">
            <h1>Description :-</h1>

            <div className="sub-description">
              <div>
                <h2>Contact person :</h2>
                <h3>{details.name}</h3>
              </div>

              <div>
                <h2>Address :</h2>
                <h3>
                  {details.address.suite} {details.address.street}{" "}
                  {details.address.city}
                </h3>
              </div>

              <div>
                <h2>Username :</h2>
                <h3>{details.username}</h3>
              </div>

              <div>
                <h2>Company name :</h2>
                <h3>{details.company.name}</h3>
              </div>

              <div>
                <h2>Email :</h2>
                <h3>{details.email}</h3>
              </div>

              <div>
                <h2>City :</h2>
                <h3>{details.address.city}</h3>
              </div>

              <div>
                <h2>Phone :</h2>
                <h3>{details.phone}</h3>
              </div>

              <div>
                <h2>Website :</h2>
                <h3>{details.website}</h3>
              </div>
            </div>
          </div>
        </div>
      )}
      {arr.map((item, index) => {
        const { name, city, website, address, company, id } = item;
        return (
          <>
            <div className="info">
              <div className="company-name">
                <h3>{company.name}</h3>
              </div>
              <div className="contact">
                <h3>Contact</h3>
                <h4>{name}</h4>
              </div>
              <div className="city">
                <h3>City</h3>
                <h4>{address.city}</h4>
              </div>
              <div className="website">
                <h3>Website</h3>
                <h4>{website}</h4>
              </div>
              <button
                onClick={(e) => {
                  clickHandler(id);
                }}
              >
                <h3>show detail</h3>
              </button>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Info;

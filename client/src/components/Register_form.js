import logoWhite from "../assets/images/form_images/logoWhite.png";
import "../assets/css/form_register.css";
import swal from "sweetalert";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from 'react';

const Registration_form = () => {
  const makeActive = axios.get(
    "https://twosome-conundrum.cyclic.app"
  );
  useEffect(() => {
    document.title = 'Register|Twosome-Conundrum';
  }, []);
  const navigate = useNavigate();
  //   document.body.style.backgroundImage = "#1F2937";
  const submitionfunction = async (e) => {
    e.preventDefault();
    const Team_Leader_Name = document.querySelector("#leader_name").value;
    const Leader_roll_no = document.querySelector("#leader_rollno").value;
    const Leader_email = document.querySelector("#leader_email").value;
    const Leader_Contact = document.querySelector("#leader_tel").value;
    const Leader_year = document.querySelector("#leader_year").value;
    const Leader_branch = document.querySelector("#leader_branch").value;
    const Team_Member_Name = document.querySelector("#member_name").value;
    const Memeber_roll_no = document.querySelector("#member_rollno").value;
    const Memeber_email = document.querySelector("#member_email").value;
    const Member_Contact = document.querySelector("#member_tel").value;
    const Member_year = document.querySelector("#member_year").value;
    const Member_branch = document.querySelector("#member_branch").value;
    const Team_Name = document.querySelector("#Team_Name").value;
    const Password = document.querySelector("#password").value;
    const participants = {
      Team_Leader_Name,
      Leader_roll_no,
      Leader_email,
      Leader_Contact,
      Leader_branch,
      Leader_year,
      Team_Member_Name,
      Memeber_roll_no,
      Memeber_email,
      Member_Contact,
      Member_branch,
      Member_year,
      Team_Name,
      Password,
    };
    const responde = await axios.post(
      "https://twosome-conundrum.cyclic.app/signup",
      participants
    );
    console.log(responde);
    if (responde.data.correct === true) {
      swal({
        title: "Congratulations!",
        text: "You have succesfully registered for Twosome-Conorundum",
        icon: "success",
      });
    } else {
      swal({
        title: "OOPS!",
        text: "Either you or your partner has already registered if not try again",
        icon: "error",
      });
    }
    if (responde.data.correct == true) {
      navigate("/");
    }
  };
  return (
    <div className="registerform">
      <div className="container">
        <img
          src={logoWhite}
          alt="logo"
          className="logo-1"
          height="50em"
          width="300em"
        />
      </div>

      <center>
        <h1>TWOSOME CONUNDRUM</h1>
      </center>

      <div className="container">
        <form id="form_data">
          <div className="flex_header">
            <label for="name">Your Name</label>

            <input
              type="text"
              id="leader_name"
              name="name"
              placeholder="Your name..."
            />
          </div>
          <br />
          <div className="flex_header">
            <label for="email">Your Email ID</label>

            <input
              type="email"
              id="leader_email"
              name="email"
              placeholder="Your mail ID..."
            />
          </div>
          <br />
          <div className="flex_header">
            <label for="contact">Your Contact No.(Prefferably WhatsApp)</label>

            <input
              type="tel"
              id="leader_tel"
              name="tel"
              placeholder="Your Contact No..."
            />
          </div>
          <br />
          <div className="flex_header">
            <label for="branch">Your Branch</label>

            <input
              type="text"
              id="leader_branch"
              name="branch"
              placeholder="COE/ENC/EIC/BT etc"
            />
          </div>
          <br />
          <div className="flex_header">
            <label for="Application Number/Roll Number">
              Your Application Number/Roll Number
            </label>

            <input
              type="text"
              id="leader_rollno"
              name="Application Number/Roll Number"
              placeholder="Your Application Number/Roll Number..."
            />
          </div>
          <br />
          <div className="flex_header">
            <label for="Year">Your Year</label>

            <select name="year" id="leader_year">
              <option value="Fresher(1st Year)">1st Year</option>
              <option value="Sophomore(2nd Year)">2nd Year</option>
              <option value="Junior(3rd Year)">3rd Year</option>
              <option value="Senior(4th Year)">4th Year</option>
            </select>
          </div>
          <br />
          <div className="flex_header">
            <label for="name">Partner's Name</label>

            <input
              type="text"
              id="member_name"
              name="name"
              placeholder="Partner's name..."
            />
          </div>
          <br />
          <div className="flex_header">
            <label for="email">Partner's Email ID</label>
            <input
              type="email"
              id="member_email"
              name="email"
              placeholder="Partner's mail ID..."
            />
          </div>
          <br />
          <div className="flex_header">
            <label for="contact">
              Partner's Contact No.(Prefferably WhatsApp)
            </label>
            <input
              type="tel"
              id="member_tel"
              name="tel"
              placeholder="Partner's Contact No..."
            />
          </div>
          <br />
          <div className="flex_header">
            <label for="branch">Partner's Branch</label>
            <input
              type="text"
              id="member_branch"
              name="branch"
              placeholder="COE/ENC/EIC/BT etc"
            />
          </div>
          <br />
          <div className="flex_header">
            <label for="Application Number/Roll Number">
              Partner's Application Number/Roll Number
            </label>
            <input
              type="text"
              id="member_rollno"
              name="Application Number/Roll Number"
              placeholder="Partner's Application Number/Roll Number..."
            />
          </div>
          <br />
          <div className="flex_header">
            <label for="Year">Partner's Year</label>
            <select name="year" id="member_year">
              <option value="Fresher(1st Year)">1st Year</option>
              <option value="Sophomore(2nd Year)">2nd Year</option>
              <option value="Junior(3rd Year)">3rd Year</option>
              <option value="Senior(4th Year)">4th Year</option>
            </select>
          </div>
          <br />
          <div className="flex_header">
            <label for="Team Name">Team Name</label>
            <input
              type="text"
              id="Team_Name"
              name="Team Name"
              placeholder="Team Name"
            />
          </div>
          <br />
          <div className="flex_header">
            <label for="password">Password</label>
            <input
              type="text"
              id="password"
              name="Team Name"
              placeholder="Password"
            />
          </div>
          <br />
        </form>
        <br />
        <div className="Submission">
          <input
            id="submitButton"
            type="submit"
            name="Submit"
            value="SUBMIT"
            placeholder="submit"
            onClick={(e) => {
              submitionfunction(e);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Registration_form;

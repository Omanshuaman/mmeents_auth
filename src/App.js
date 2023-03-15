import "./App.css";
import SettingsSvg from "../src/assests/settings.svg";
import DividerSvg from "../src/assests/divider.svg";
import CloseSvg from "../src/assests/close.svg";

import React, { useState } from "react";
import Modal from "react-modal";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
Modal.setAppElement("#root"); // set the app element for accessibility
function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const handleChangeEmailClick = () => {
    //setShowPopup(true);
  };

  const handleCancelClick = () => {
    setShowPopup(false);
    setNewEmail("");
    setCurrentPassword("");
  };

  const handleSubmitClick = () => {
    // TODO: Handle the submit logic here
    setShowPopup(false);
    setNewEmail("");
    setCurrentPassword("");
  };
  return (
    <div className="App">
      <div className="header">
        <div className="settings">
          <div className="settings-svg">
            <img src={SettingsSvg} alt="Your SVG" className="search-svg" />
            <div className="settings-text">Settings</div>
          </div>
          <img src={DividerSvg} alt="Your SVG" className="divider-svg" />
        </div>
      </div>
      <div className="sidebar-heropage">
        <div className="sidebar">
          <div className="account">Account</div>
          <div className="personal-information">Personal Information</div>
          <div className="personal-information">Language and time zone</div>
          <div className="personal-information">Activity Log</div>
        </div>
        <div className="heropage">
          <div className="personal-information-text">Personal Information</div>
          <div className="validation-form">
            <div className="profile-pic">
              <div className="profile-picture-text">Profile picture</div>
              <div className="profile-pic-input">
                <div className="profile-pic-logo">
                  <div className="profile-pic-logotext">HR</div>
                </div>
                <div className="profile-pic-upload">
                  <div className="profile-pic-upload-button">
                    <div className="prifile-pic-upload-text">Upload</div>
                  </div>
                  <div className="profile-pic-text">
                    JPG, GIF or PNG. Minimum 300x300 pixels. Maximum file size 2
                    MB.
                  </div>
                </div>
              </div>
            </div>
            <div className="full-name">
              <div className="full-name-text">Full Name</div>
              <div className="name-input">
                <div className="first-name">
                  <div className="first-name-text">First Name</div>
                  <div className="first-name-input">Harshit</div>
                </div>
                <div className="last-name">
                  <div className="first-name-text">Last Name</div>
                  <div className="first-name-input">Acha</div>
                </div>
              </div>
            </div>
            <div className="email-address">
              <div className="email-name-text">Email Address</div>
              <div className="email">
                <div className="primary-email">
                  <div className="primary-email-inputfield">
                    <div className="primary-email-text">Primary email</div>
                    <div className="primary-email-input">
                      harshitacha@gmail.com
                    </div>
                  </div>
                  <div className="primary-email-change">
                    <div>
                      <div className="change-email" onClick={toggleModal}>
                        Change email
                      </div>
                      <>
                        {modal && (
                          <div className="modal">
                            <div
                              onClick={toggleModal}
                              className="overlay"
                            ></div>
                            <div className="popup">
                              <div className="close-button">
                                <img
                                  src={CloseSvg}
                                  alt="Your SVG"
                                  className="close-svg"
                                  onClick={toggleModal}
                                />
                              </div>
                              <div className="change-email-field">
                                <div className="change-email-text">
                                  Change email
                                </div>
                                <div className="change-email-inputfield">
                                  <div className="email-field">
                                    <div className="new-email">
                                      <div className="new-email-text">
                                        New email
                                      </div>
                                      <div className="new-email-field"></div>
                                    </div>
                                    <div className="current-password"></div>
                                  </div>
                                  <div className="email-submit"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </>
                    </div>{" "}
                    <div className="change-password">Change password</div>
                  </div>
                </div>
                <div className="secondary-email">
                  <div className="primary-email">
                    <div className="primary-email-inputfield">
                      <div className="primary-email-text">Secondrary email</div>
                      <div className="primary-email-input">
                        myaccount@mail.com
                      </div>
                    </div>
                    <div className="primary-email-change">
                      <div className="change-secondary-email">
                        Confirm secondary email
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mobile-number">
              <div className="mobile-number-text">Mobile number</div>
              <div className="mobile-number-input">
                <div className="mobile-number-inputfield">
                  <div className="dropdown-number"></div>
                  <div className="phonenumber"></div>
                </div>
                <div className="submit-button"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

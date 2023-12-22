import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

export default function Usernav() {
  const logout=()=>{
    setTimeout(() => (window.location.href = "/"), 1000);
    alert( "User Logged Out ");
    localStorage.clear();

  }
  return (
   
    <div>
      <header>
        <div className="main-nav">
          <div className="logo">
            <Link to="/userdashbaord">
              <img src={logo} href="/userdashboard" width="70px" height="80px" alt="Logo" />
            </Link>
          </div>
          <div className="location">
          <a href="/#"  >Eijipura&nbsp;&nbsp;
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-geo-alt-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
          </svg>
          </a>
          </div>
          <div className="menu">
            <ul>
              <li>
                <Link to="/userdashboard">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-house"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                      </svg>
                  </span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <a
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvaRight"
                  href="#/"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  <span>
                    <svg
                      className="_1GTCc _2MSid"
                      viewBox="-1 0 37 32"
                      height="20"
                      width="20"
                      fill="#686b78"
                    >
                      <path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path>
                    </svg>
                  </span>
                  <span>Cart</span>
                </a>

                <div
                  class="offcanvas offcanvas-end"
                  data-bs-scroll="true"
                  tabindex="-1"
                  id="offcanvasRight"
                  aria-labelledby="offcanvasRightLabel"
                >
                  <div class="offcanvas-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>

                  <div class="offcanvas-body"></div>
                </div>
              </li>
              <li>
                <a
                  href="/#"
                  onClick={e => {
                    e.preventDefault();
                       logout();
                  }}
                >
                  <span>
                    <svg
                      className="_1GTCc _2MSid"
                      viewBox="-1 0 37 32"
                      height="20"
                      width="20"
                      fill="#686b78"
                    >
                      <path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path>
                    </svg>
                  </span>
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

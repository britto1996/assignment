import React from "react";
import "./Section.css";

function Section() {
  return (
    <div className="section__container">
      <div className="sidebar__list">
        <h1 className="header1__sidebar__list">
          The leading Customer Data Platform
        </h1>
        <p className="para1__sidebar__list">
          Join 20,000+ businesses that use Segment's software and APIs to
          collect, clean, and control their customer data.
        </p>
        <div className="form__container">
          <form className="input__forms">
            <div className="email__input">
              <input
                className="email"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="form__button__gap"></div>
            <button className="main__btn">
              <span>See how it works</span>
            </button>
            <div>
              <a className="create__account__btn" href="/">
                Create a free account
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="img__container">
        <img
          width="808"
          height="618"
          className="image1"
          src="../../image/project.webp"
          alt="background"
        />
      </div>
    </div>
  );
}

export default Section;

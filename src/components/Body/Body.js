import React from "react";
import Footer from "../Footer/Footer";
import "./Body.css";

function Body() {
  return (
    <div className="body__container">
      <div className="body__headers">
        <h2 className="body__header1">Empower every team with good data</h2>
        <h3 className="body__header2">
          Segment collects events from your web & mobile apps and provides a
          complete data toolkit to every team in your company
        </h3>
      </div>
      <div className="row__container">
        <div className="screen__img__container">
          <img
            className="mobile__img"
            src="../../image/screen.webp"
            alt="mobileScreen"
          />
        </div>
        <div className="hologram__container">
          <img
            className="hollogram__image"
            src="data:image/webp;base64,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"
            alt="hologram"
          />
        </div>
        <div className="content1">
          <p className="marketing">Marketing</p>
          <p className="single__view__customer">Single view of the customer</p>
          <p className="real__time__audience">Real-time audiences</p>
        </div>
        <div className="content2">
          <p className="product">Product</p>
          <p className="get__data">Get data right</p>
          <p className="your__customer">Understand your customer</p>
        </div>
        <div className="content3">
          <p className="engineering">Engineering</p>
          <p className="clean__code">One API.Cleaner code.</p>
          <p className="sdk">Best-in-class SDKs</p>
        </div>
      </div>
      <div className="second__section__container">
        <div className="empty__div"></div>
        <div className="second__section__row">
          <section className="main__section">
            <div className="btn__row">
              <div className="btn__collections">
                <button className="btn1" type="button">
                  <div className="empty__div__btn"></div>
                  <span className="btn1__span">
                    Single view of the customer
                  </span>
                </button>
                <button className="btn2" type="button">
                  <span className="btn2__span">Real-time audiences</span>
                </button>
                <button className="btn3" type="button">
                  <span className="btn3__span">Activate in 300 + tools</span>
                </button>
              </div>
            </div>
            <div className="header__second__section__list">
              <p className="para1">Segment for Marketing Teams</p>
              <h3 className="para2">Single view of the customer</h3>
              <p className="para3">
                Unify your customers’ touch points across all platforms and
                channels.
              </p>
              <a className="explore__btn" href="/">
                Explore Segment for Marketing
              </a>
            </div>
            <div className="second__section__img__div">
              <img
                src="https://segment.com/_next/static/images/MarketingTabsSection-1-f9be3c1525de187f3d31a8d5a667ae22.png"
                alt="profile"
              />
            </div>
          </section>
        </div>
      </div>
      <div className="final__container">
        <div className="header__finals">
          <h3 className="getting__start">Getting started is easy</h3>
          <p className="connecting">
            Start connecting your data with segments.
          </p>
        </div>
        <div className="row__buttons">
          <a className="demo__btn" href="/">
            <span>Get a demo</span>
          </a>
          <a className="create__btn" href="/">
            <span>Create a free account</span>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Body;

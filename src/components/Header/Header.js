import React, { useState } from "react";
import HorizontalSplitIcon from "@material-ui/icons/HorizontalSplit";
import CloseIcon from "@material-ui/icons/Close";
import "./Header.css";

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="header__container">
      <div className="header__div">
        <a href="/">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAABBCAMAAABcvml3AAABCFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+Q59ffAAAAV3RSTlMAAgYJCxAREhQZHR4gIiQqLS8wMTI2OTw/QEFDTk9QU1VYWl9gYWdtbm9weHl6fH1/gIaKi4yOj5CZnZ6foKmvsL/Aw8TGyszP0NHZ3+Dh5evs7/D1+/0QZkzwAAAIYElEQVR42u2caZvjOBGAawDBAuISDFgM7QVijpgBJK4YNiaWYcAGe2FioP7/P+GDL10+4nR6O8+0PvUollV+VSXVYQ/Ao7ZE9Y0B5Crp+hgAhEoxgFfv3n3SdfZj4nfvXrd/RQqxEATur7EgCEQQBBfJnmPfOECJCAAEERMASLEBgFeIn3QXDrAQXwMAENWOrNhdcSK7gxqeGs8qXj0ykjJFzKWUFCBG5AAhIhYAUGM6DytDzDhPECtyR6ROaLdLxnNE2ekmYgKQYo1IgSJGs7AYYgYAIBHje0Elzg4qLLfBghoLgAZDxAgiRDILSyJSaM02v19U48NfCitFJAwbyDGDtEU+DWvoyfF8D6xCLypEvhFWiBhKTCHGM9Rt7ypYeAdqdXTML68REZvxmm+/vgQWICYlRsAQI0Q2Dytp7RSguQMzZIWOSYa0f/io/wu++w/ET8MLYGVYIBKAGqsO+TQsjpgCAEQXmv1nwmo0wTqm/mv+iYj4n4/Ww4qx3a0T7EjosIQQgmuuQ44oKNmfsSF3w6qOpq75fnvBT9bDotj6ASG2joMBqz86eli0bvsadjesZkzgB+0VP18PC+rOH8B+Q3r1/r0D6/37dickskFsUnovrMo5Sb/0P0TsNuqbnTLP/xzs9/Z0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"
            width="120"
            height="26"
            alt="logo"
            className={isMobile ? "color__logo" : "brand__logo"}
          />
        </a>

        <div className={isMobile ? "response__header" : "header__list "}>
          <div className={isMobile ? "response__list__div" : "list__div"}>
            <ul
              className={isMobile ? "nav__link__mobile" : "list__ul"}
              onClick={() => setIsMobile(false)}
            >
              <li className={isMobile ? "response__list__item" : "list__item"}>
                <a
                  href="/"
                  className={isMobile ? "response__items__a" : "items__a"}
                >
                  <span
                    className={
                      isMobile ? "response__items__span" : "items__span"
                    }
                  >
                    Product
                  </span>
                </a>
              </li>
              <li className={isMobile ? "response__list__item" : "list__item"}>
                <a
                  href="/"
                  className={isMobile ? "response__items__a" : "items__a"}
                >
                  <span
                    className={
                      isMobile ? "response__items__span" : "items__span"
                    }
                  >
                    Pricing
                  </span>
                </a>
              </li>
              <li className={isMobile ? "response__list__item" : "list__item"}>
                <a
                  href="/"
                  className={isMobile ? "response__items__a" : "items__a"}
                >
                  <span
                    className={
                      isMobile ? "response__items__span" : "items__span"
                    }
                  >
                    Customers
                  </span>
                </a>
              </li>
              <li className={isMobile ? "response__list__item" : "list__item"}>
                <a
                  href="/"
                  className={isMobile ? "response__items__a" : "items__a"}
                >
                  <span
                    className={
                      isMobile ? "response__items__span" : "items__span"
                    }
                  >
                    Docs
                  </span>
                </a>
              </li>
              <li className={isMobile ? "response__list__item" : "list__item"}>
                <a
                  href="/"
                  className={isMobile ? "response__items__a" : "items__a"}
                >
                  <span className="items__span">Company</span>
                </a>
              </li>
              <li className="mobile__list__item">
                <a href="/" className="mobile__signup">
                  <span>Sign up</span>
                </a>
                <a href="/" className="mobile__work__btn">
                  <span>See How It Works</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="btns__parent">
          <div className="login__btn">
            <a href="/" className="login__btn__a">
              Login
            </a>
          </div>
          <a
            href="/"
            className={isMobile ? "disable__btn" : "desktop__work__btn"}
          >
            <span>See How It Works</span>
          </a>
        </div>
        <button
          className="mobile__menu__icons"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? <CloseIcon /> : <HorizontalSplitIcon />}
        </button>
      </div>
    </nav>
  );
}

export default Header;

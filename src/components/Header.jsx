import React, { useState } from "react";
import tarzen from "../assets/image/png/tarzen.png";
import twiter from "../assets/image/png/twiter.png";
import discord from "../assets/image/png/discord.png";

function Header() {
  const [navShow, setNavShow] = useState(false);
  if (navShow) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <section className=" d-flex flex-column bg_color overflow-hidden">
        <div class="container">
          <div className=" d-flex justify-content-between align-items-center w-100 ">
            <a className=" d-flex text-decoration-none " href="#">
              <h2 className="text-white text-decoration-none fw_700 fs_53 ff_sans pt-2">
                THE LOGO
              </h2>
            </a>{" "}
            <ul className="d-flex gap-5 py-3 list-unstyled d-none d-xl-flex align-items-center mb-0 justify-content-end">
              <li>
                <a
                  class="  text-white nav_text_hover opcy text-decoration-none position-relative  fs_32 fw_400 ff_ubu  line position-realative"
                  href="#feature"
                >
                  Tokemonics
                </a>
              </li>
              <li>
                <a
                  class=" text-white nav_text_hover opcy text-decoration-none position-relative   fs_32 fw_400 ff_ubu  line position-realative"
                  href="#lets"
                >
                  Rarity
                </a>
              </li>
              <li>
                <a
                  class=" text-white nav_text_hover opcy text-decoration-none position-relative fs_32 fw_400 ff_ubu  line position-realative"
                  href="#popular"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  class=" text-white nav_text_hover opcy text-decoration-none position-relative fw_400 fs_32 ff_ubo line position-realative"
                  href="#best"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a class=" text-white  fs_16 fw_600 ff" href="#subscribe">
                  <button className=" text-decoration-none border-0  text-white btn_fly py-2 fs_32 fw_500 ff_ubo">
                    Roadmap
                  </button>
                </a>
              </li>
            </ul>{" "}
            <label
              className="menu_formatting d-flex justify-content-end d-xl-none"
              for="check"
            >
              <input
                onClick={() => setNavShow(!navShow)}
                className="menu bg-black "
                type="checkbox"
                id="check"
              />
              <span className="span_nav1"></span>
              <span className="span_nav2"></span>
              <span className="span_nav3"></span>
            </label>
          </div>
          <div className="d-xl-none d-flex ">
            <div className={` ${navShow ? "nav-fix " : "fix-navbar"}`}>
              <ul class="ps-0 mb-0 d-flex flex-column py-5 align-items-center  list-unstyled gap-3 gap-md-5 pt-3 transition">
                <li>
                  <a
                    class="text-decoration-none opcy  text-white fw-normal fs_16 text_strock transition fs_32 fw_400 ff_ubo line position-realative"
                    href="#foot"
                  >
                    Tokemonics
                  </a>
                </li>
                <li>
                  <a
                    class="text-decoration-none opcy text-white  fw-normal fs_16 text_strock transition fs_32 fw_400 ff_ubo line position-realative"
                    href="#"
                  >
                    Rarity
                  </a>
                </li>{" "}
                <li>
                  <a
                    class="text-decoration-none opcy text-white  fw-normal fs_16 text_strock transition fs_32 fw_400 ff_ubo line position-realative"
                    href="#"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    class="text-decoration-none opcy text-white  fw-normal fs_16 text_strock transition fs_32 fw_400 ff_ubo line position-realative"
                    href="#"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a class=" text-white  fs_16 fw_600 ff" href="#">
                    <button className="text-decoration-none border-0  text-white btn_fly py-2 fs_32 fw_500 ff_ubo">
                      Roadmap
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg_2 py-4">
        <div className="d-flex flex-grow-1  container flex-column  ">
          <div className="row">
            <div className="col-sm-6">
              <h2 className="fw_900 fs_81 ff_pro lorm">LOREM IPSUM</h2>
              <p className="fw_600 fs_53 ff_pro p_clr">
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="fw_300 fs_33 ff_pro color_light_gray">
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3">
                <button className="box  d-flex align-items-center border-0 text-white">
                  <img src={twiter} alt="mnj" />
                  <p className="fw_500 fs_32 ff_code m-0">Twitter</p>
                </button>
                <button className="ff_code fw_500 butn fs_32 border-0 text-white d-flex align-items-center">
                  <img className="pe-4" src={discord} alt="jkk" />
                  <p className="fw_500 fs_33 ff_code text-white">Discord</p>
                </button>
              </div>
            </div>
            <div className="col-sm-6">
              <img className="w-100 mt-2 mt-sm-0" src={tarzen} alt="mj" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;

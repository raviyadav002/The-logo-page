import React from "react";
import line from "../assets/image/png/line.png";
import dorimon from "../assets/image/png/dorimon.png";
function Ratiry() {
  return (
    <div className="section bg_ratiry line_0 py-5 overflow-hidden">
      <div className="container">
        <div>
          <h2 className="text-center Rarity ff_space  fw_700 fs_90">Rarity</h2>
          <span className="d-flex justify-content-between align-items-center flex-column flex-lg-row">
            <button className="btun2 py-1 ff_code fw_700 fs_28 my-2 my-lg-0 mx-0 mx-lg-2">
              Background
            </button>
            <button className="btun2 py-1 ff_code fw_700 fs_28 my-2 my-lg-0 mx-0 mx-lg-2">
              Skin
            </button>
            <button className="btun2 py-1 ff_code fw_700 fs_28 my-2 my-lg-0 mx-0 mx-lg-2">
              Clothes
            </button>
            <button className="btun2 py-1 ff_code fw_700 fs_28 my-2 my-lg-0 mx-0 mx-lg-2">
              Eyes
            </button>
            <button className="btun2 py-1 ff_code fw_700 fs_28 my-2 my-lg-0 mx-0 mx-lg-2">
              Hats
            </button>
          </span>
          <div className="py-4 ">
            <img className="w-100" src={line} alt="line" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-sm-4 col-6 p-3">
            <div className="text-center Box py-5 ">
              <img src={dorimon} alt="dorimon" />
              <h2 className="ff_ubu fw_700 fs_30 text-white">
                Random <br /> Dude
              </h2>
              <button className="fw_900 fs_22 ff_pro btun17">17%</button>
            </div>
          </div>
          <div className="col-lg-3 col-sm-4 col-6 p-3">
            <div className="text-center Box py-5 ">
              <img src={dorimon} alt="dorimon" />
              <h2 className="ff_ubu fw_700 fs_30 text-white">
                Random <br /> Dude
              </h2>
              <button className="fw_900 fs_22 ff_pro btun17">17%</button>
            </div>
          </div>
          <div className="col-lg-3 col-sm-4 col-6 p-3">
            <div className="text-center Box py-5 ">
              <img src={dorimon} alt="dorimon" />
              <h2 className="ff_ubu fw_700 fs_30 text-white">
                Random <br /> Dude
              </h2>
              <button className="fw_900 fs_22 ff_pro btun17">17%</button>
            </div>
          </div>
          <div className="col-lg-3 col-sm-4 col-6 p-3">
            <div className="text-center Box py-5 ">
              <img src={dorimon} alt="dorimon" />
              <h2 className="ff_ubu fw_700 fs_30 text-white">
                Random <br /> Dude
              </h2>
              <button className="fw_900 fs_22 ff_pro btun17">17%</button>
            </div>
          </div>
          <div className="col-lg-3 col-sm-4 col-6 p-3">
            <div className="text-center Box py-5 ">
              <img src={dorimon} alt="dorimon" />
              <h2 className="ff_ubu fw_700 fs_30 text-white">
                Random <br /> Dude
              </h2>
              <button className="fw_900 fs_22 ff_pro btun17">17%</button>
            </div>
          </div>
          <div className="col-lg-3 col-sm-4 col-6  p-3">
            <div className="text-center Box py-5 ">
              <img src={dorimon} alt="dorimon" />
              <h2 className="ff_ubu fw_700 fs_30 text-white">
                Random <br /> Dude
              </h2>
              <button className="fw_900 fs_22 ff_pro btun17">17%</button>
            </div>
          </div>
          <div className="col-lg-3 col-sm-4 col-6 p-3">
            <div className="text-center Box py-5 ">
              <img src={dorimon} alt="dorimon" />
              <h2 className="ff_ubu fw_700 fs_30 text-white">
                Random <br /> Dude
              </h2>
              <button className="fw_900 fs_22 ff_pro btun17">17%</button>
            </div>
          </div>
          <div className="col-lg-3 col-sm-4 col-6 p-3">
            <div className="text-center Box py-5 ">
              <img src={dorimon} alt="dorimon" />
              <h2 className="ff_ubu fw_700 fs_30 text-white">
                Random <br /> Dude
              </h2>
              <button className="fw_900 fs_22 ff_pro btun17">17%</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ratiry;

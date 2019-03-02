import React from "react";
import "./style.css";

const iphoneX = {
  src:
    "https://www.boostmobile.com/content/dam/boostmobile/en/products/phones/apple/iphone-x/space-gray/device-front.png.transform/pdpCarousel/image.jpg",
  alt: "iPhoneX",
  width: "200px"
};
const iphoneXR = {
  src:
    "https://www.sprint.com/content/dam/sprint/commerce/devices/apple/iphone_xr/black/devicenb_650x900.png/jcr:content/renditions/cq5dam.thumbnail.290.370.png",
  alt: "iPhoneXr",
  width: "223.5px"
};
const iphone8 = {
  src:
    "https://www.boostmobile.com/content/dam/boostmobile/en/products/phones/apple/iphone-8-plus/space-gray/device-front.png.transform/pdpCarousel/image.jpg",
  alt: "iPhone 8",
  width: "200px"
};
const GalaxyS10 = {
  src:
    "data:image/webp;base64,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",
  alt: "Samsung Galaxy S10",
  width: "255px"
};

const GalaxyS9 = {
  src:
    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRXS0GIUJFlv_Cl85KPufWf9MBBdTs6UP1L1SitZd9uZylw7QWKCpym-Ob3nXu5l7TliVV-hrbGcwcGq2Ycl01Lddo6LfL5Za4KbNlZnzAVdhS56Cv2BAa6zg&usqp=CAc",
  alt: "Samsung Galaxy S9",
  width: "234px"
};
const GalaxyNote9 = {
  src:
    "https://ss7.vzw.com/is/image/VerizonWireless/samsung-galaxy-note9-blue?$device-lg$",
  alt: "Samsung Galay Note9",
  width: "203px"
};

const OnePlus6T = {
  src:
    "https://www.91-img.com/pictures/130950-v7-oneplus-6t-8gb-ram-mobile-phone-large-1.jpg",
  alt: "One Plus 6T",
  width: "229px"
};
const LGV40ThinQ = {
  src:
    "https://ss7.vzw.com/is/image/VerizonWireless/LG_V40_ThinQ_Black?$device-lg$",
  alt: "LG V40 ThinQ",
  width: "200px"
};
const google = {
  src:
    "https://ss7.vzw.com/is/image/VerizonWireless/google-pixel-3xl-sand?$device-lg$",
  alt: "huawei",
  width: "200.5px"
};

class Cards extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">Apple iPhone X</div>
              <img src={iphoneX.src} alt={iphoneX.alt} width={iphoneX.width} />

              <div className="card-body">
                {" "}
                <a
                  onClick={() =>
                    localStorage.setItem("iphoneX", JSON.stringify(iphoneX))
                  }
                  href="/cart"
                >
                  Purchase
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-header">Apple iPhone XR</div>
              <img
                src={iphoneXR.src}
                alt={iphoneXR.alt}
                width={iphoneXR.width}
              />

              <div className="card-body">
                {" "}
                <a href="/cart">Purchase</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-header">Apple iPhone 8</div>
              <img src={iphone8.src} alt={iphone8.alt} width={iphone8.width} />

              <div className="card-body">
                {" "}
                <a href="/cart">Purchase</a>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">Samsung Galaxy S10</div>
              <img
                src={GalaxyS10.src}
                alt={GalaxyS10.alt}
                width={GalaxyS10.width}
              />

              <div className="card-body">
                {" "}
                <a
                  onClick={() =>
                    localStorage.setItem("iphoneX", JSON.stringify(iphoneX))
                  }
                  href="/cart"
                >
                  Purchase
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-header">Samsung Galaxy S9</div>
              <img
                src={GalaxyS9.src}
                alt={GalaxyS9.alt}
                width={GalaxyS9.width}
              />

              <div className="card-body">
                {" "}
                <a href="/cart">Purchase</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-header">Samsung Galaxy Note 9</div>
              <img
                src={GalaxyNote9.src}
                alt={GalaxyNote9.alt}
                width={GalaxyNote9.width}
              />

              <div className="card-body">
                {" "}
                <a href="/cart">Purchase</a>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">OnePlus 6T</div>
              <img
                src={OnePlus6T.src}
                alt={OnePlus6T.alt}
                width={OnePlus6T.width}
              />

              <div className="card-body">
                {" "}
                <a
                  onClick={() =>
                    localStorage.setItem("iphoneX", JSON.stringify(iphoneX))
                  }
                  href="/cart"
                >
                  Purchase
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-header">LG V40 ThinQ</div>
              <img
                src={LGV40ThinQ.src}
                alt={LGV40ThinQ.alt}
                width={LGV40ThinQ.width}
              />

              <div className="card-body">
                {" "}
                <a href="/cart">Purchase</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">Google Pixel 3 XL</div>
              <img src={google.src} alt={google.alt} width={google.width} />

              <div className="card-body">
                {" "}
                <a href="/cart">Purchase</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;

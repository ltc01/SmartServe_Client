import { FaAngleRight } from "react-icons/fa";
import "animate.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import QRCode from "qrcode.react";


export const MainHome = ({ Children }) => {
  const imges = {
    img1: [
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1486589089611-394385ff1a68?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1596450512748-2dae774fc38a?q=80&w=995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1603486037214-4fec4016a9bf?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    img2: [
      "https://images.unsplash.com/photo-1603486037214-4fec4016a9bf?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1596450512748-2dae774fc38a?q=80&w=995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1486589089611-394385ff1a68?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    img3: [
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1603486037214-4fec4016a9bf?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1486589089611-394385ff1a68?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    img4: [
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1596450512748-2dae774fc38a?q=80&w=995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    img5: [
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1596450512748-2dae774fc38a?q=80&w=995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1596450512748-2dae774fc38a?q=80&w=995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1596450512748-2dae774fc38a?q=80&w=995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1596450512748-2dae774fc38a?q=80&w=995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    img6: [
      "https://images.unsplash.com/photo-1596450512748-2dae774fc38a?q=80&w=995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1654764746221-7bc58ef4dbad?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1625464264698-fdd9961710dd?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1625464264698-fdd9961710dd?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1625464264698-fdd9961710dd?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    img7: [
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1604087267213-40e35f1719a3?q=80&w=756&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1632292611299-980426b386a1?q=80&w=770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1632292611299-980426b386a1?q=80&w=770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1632292611299-980426b386a1?q=80&w=770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  };
  const text = [
    "Delicious Moments, Every Bite. 🍽️✨",
    "Savor the Flavor of Freshness. 🥗🌟",
    "Where Every Meal is a Celebration. 🎉🍝",
    "Taste the Joy of Good Food. 😋🍲",
  ];
  const colors = [
    "text-yellow-900",
    "text-teal-800",
    "text-blue-800",
    "text-rose-900",
  ];

  const renderImages = (imageArray) => {
    return imageArray.map((imageUrl, index) => (
      <div className="w-56 h-80 overflow-hidden rounded-2xl" key={index}>
        <img
          src={imageUrl}
          alt={`images`}
          className="w-full h-full object-cover"
        />
      </div>
    ));
  };

  const [index, setIndex] = useState(0);
  const [isIntervalStarted, setIsIntervalStarted] = useState(false);

  useEffect(() => {
    const internalId = setInterval(() => {
      setIsIntervalStarted(true);
      setIndex((i) => (i + 1) % text.length);
    }, 1200);
    return () => clearInterval(internalId);
  }, []);

  return (
    <>
      <main className="w-full" id="content">
        <div className="h-[80vh] mt-10 overflow-hidden z-0 ">
          {/* <h1 className="text-2xl text-center uppercase font-bold tracking-wide text-[#27664c]">Get your next</h1> */}
          <div className="absolute w-full mt-6 mb-6">
            {isIntervalStarted && (
              <h2
                className={`animate__animated animate-pulse animate__infinite text-center tracking-widest uppercase font-extrabold text-2xl ${colors[index]}`}
              >
                {text[index]}
              </h2>
            )}
          </div>
          <div className="flex justify-center gap-4">
            {["mt-0", "mt-28", "mt-60", "mt-80", "mt-60", "mt-28", "mt-0"].map(
              (marginTop, index) => (
                <div
                  className={`flex w-64 gap-4 flex-col ${marginTop}`}
                  key={index}
                >
                  {renderImages(imges[`img${index + 1}`])}
                </div>
              )
            )}
          </div>
           {/*  <div className="flex justify-start pl-8">
            <QRCode value="https://pinterest-frontend-nine.vercel.app/" />
          </div> */}
        </div>

        
          <div className="absolute bottom-0 left-0 right-0 text-center ">
            <div className="w-fit mx-auto mb-48">
              <Link to={"/menus"}>
                <p className="hover:text-[#27664c] font-bold tracking-wider bg-emerald-700 hover:bg-white text-white border-4 border-emerald-700 rounded-full text-2xl py-4 pr-8 pl-10 ">
                  Menu Items
                  <FaAngleRight className="inline font-semibold text-3xl" />{" "}
                </p>
              </Link>
            </div>
            <div className="font-semibold shadow-top bg-[#fffd93] py-6 w-full text-xl">
              <a href="">Greetings! Let's make your meal a memorable one. 🍽️✨ </a>
            </div>
          </div>
       
      </main>
      {Children}
    </>
  );
};
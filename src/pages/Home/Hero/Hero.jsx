import { Link } from "react-router-dom";
import bg from "../../../assets/photos/bg.jpg";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        background: `url(${bg}) center/cover no-repeat fixed`,
      }}
    >
      <div className="hero-overlay bg-opacity-20"></div>
      <div className="hero-content text-center">
        <div className="max-w-md text-gray-50">
          <h1 className="text-5xl font-bold">
            Blue Bird <br /> School & College
          </h1>
          <p className="pt-6 text-2xl">Service Before Self!</p>
          <p className="flex items-center text-gray-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <span className="text-xl">
              Location: Mirer Moydan, Shubid Bazar, Sylhet.
            </span>
          </p>
          <Link to={"/about"}>
            <button className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400">
              About us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

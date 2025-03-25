import React from "react";
import Image from "../assets/1.png";
import Image2 from "../assets/knight.png";
import Image1 from "../assets/3.png";

import { FaGithub, FaDiscord, FaTwitter, FaSpotify } from "react-icons/fa";
import SocialBox from "../components/SocialBox";

const Home = () => {
  return (
    <div id="kunyit" className="HomePage pb-10">
      <div className="container mx-auto px-5">
        <div className="hero grid grid-cols-1 md:grid-cols-2 items-center gap-5 pt-32 -mt-20">
          {/* Bagian Teks */}
          <div className="box text-center md:text-left md:self-start md:pt-16">
            <h1 className="text-4xl font-medium mb-5 md:mb-7">
              What is{" "}
              <span className="font-medium text-yellow-800 underline">
                Kunyit?
              </span>{" "}
              
            </h1>
            <p className="mb-7 text-xl">
              Turmeric (Kunyit), or{" "}
              <span className=" italic">Curcuma longa</span>, is a spice plant
              native to Southeast Asia, famous for its bright yellow rhizome.
              This rhizome contains the compound curcumin which gives it its
              distinctive color and medicinal properties. Traditionally,
              turmeric has been used for centuries in Ayurvedic medicine and
              traditional Chinese medicine to treat various health problems,
              such as inflammation, indigestion, and joint pain.
            </p>
            <a
              href="#"
              className="text-yellow-800 font-semibold hover:underline inline-flex items-center"
            >
              <i className="ri-eye-line mr-2"></i> Source
            </a>
          </div>

          {/* Bagian Foto */}
          <div id="vitezi" className="box flex justify-center md:justify-end ">
            <img
              src={Image}
              alt="Kunyit"
              className="w-[300px] md:w-[400px] lg:w-[500px] object-cover"
            />
          </div>
        </div>

        {/* Bagian Bawah */}
        <div className="about grid md:grid-cols-2 grid-cols-1 items-center gap-5 md:pt-20 pt-12 -mt-20">
  {/* Foto di sebelah kiri (order 1 pada desktop) */}
  <div className="box order-2 md:order-1 flex justify-center md:justify-end">
    <img
      src={Image2}
      alt="Kunyit"
      className="w-[300px] md:w-[400px] lg:w-[500px] object-cover ml-0 md:ml-[-150px] lg:ml-[-300px]"
    />
  </div>

          {/* Teks di sebelah kanan (order 2 pada desktop) */}
          <div className="box order-1 md:order-2 text-center">
            <h1 className="lg:text-4xl/tight text-3xl font-medium mb-7">
            So what is the meaning of the name{" "}
              <span className="font-medium underline text-red-400">
                V1tezii?
              </span>
            </h1>
            <p className="text-base mb-7">
            Vitez is Croatian for knight, a prayer of a great and brave man.
            </p>
          </div>
        </div>

        <div id="herb" className="services pt-32 -mt-20">
          {/* Judul */}
          <h1 className="text-center lg:text-5xl/right text-3xl font-medium mb-2">
            More Herb🌿
          </h1>
          <p className="text-center">
            The best treatment is something you don't realize.
          </p>

          {/* Service Box */}
          <div className="services-bottom grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <SocialBox
              icon={<FaGithub size={64} color="#000" />}
              title="GitHub"
              description="View all trash projects."
              link="https://github.com/wwicaksonoo?tab=repositories"
            />
            <SocialBox
              icon={<FaDiscord size={64} color="#7289DA" />}
              title="Discord"
              description="Sharpen your yapping skills here."
              link="https://discord.gg/HSWnXKhn"
            />
            <SocialBox
              icon={<FaSpotify size={64} color="#1db954" />}
              title="Spotify"
              description="My music taste is trash anyway."
              link="https://open.spotify.com/user/hxf2nncvhqybqguixe3jfbguc?si=fb6f0a6246274727"
            />
          </div>
        </div> 
      </div>
    </div>
  );
};

export default Home;

import React from "react";

const CandyForLife = () => {
  return (
    <div className="font-montserrat bg-gray-100 leading-relaxed m-0 p-0 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto my-5 bg-white p-5 shadow-md rounded-lg dark:bg-gray-800">
        <img
          src="../../slep-studios/Candyforlife/Candyforlifebanner.png"
          alt="Game Banner"
          className="w-full h-auto mb-5 rounded-lg"
        />

        <div className="flex gap-5">
          <div className="flex-1">
            <h2 className="text-center font-bold text-gray-800 mb-4 dark:text-white">About the Game</h2>
            <p className="text-center text-gray-600 font-medium mb-4 dark:text-gray-300">
              Made by
              <b>
                <a
                  href="https://lantechgames.org/slepstudios"
                  className="text-yellow-500 hover:underline ml-1"
                >
                  SLEP Studios
                </a>
              </b>
              , in 2024
            </p>
            <p className="text-gray-600 font-medium mb-4 dark:text-gray-300">
              <b>Candy for Life</b> is a thrilling, fast-paced game where you play as a ghost zipping through eerie, floating graveyard islands in a race to collect as much candy as possible.
            </p>
            <p className="text-gray-600 font-medium mb-4 dark:text-gray-300">
              The goal is simple but addictive: gather candy scattered across these small, haunted landscapes while navigating spooky obstacles and competing for high scores.
            </p>
            <p className="text-gray-600 font-medium mb-4 dark:text-gray-300">
              With quick gameplay, each round of Candy for Life offers the excitement of a high-speed candy hunt and the eerie charm of ghostly adventures, making it a treat for players seeking a fun and slightly spooky challenge.
            </p>
            <p className="text-gray-600 font-medium dark:text-gray-300">
              <b>
                <a
                  href="https://discord.gg/AkPvnFDqNq"
                  className="text-yellow-500 hover:underline"
                >
                  Discord
                </a>
              </b>
              {" "}|{" "}
              <b>
                <a
                  href="https://youtube.com@/slepstudios"
                  className="text-yellow-500 hover:underline"
                >
                  Youtube
                </a>
              </b>
            </p>
          </div>

          <div className="flex-1 flex flex-col gap-5">
            <iframe
              src="https://www.youtube.com/embed/nNQWdq7LRsQ"
              className="w-full aspect-video border-none"
              allowFullScreen
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/1U01B6UQeSs"
              className="w-full aspect-video border-none"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto bg-white p-5 shadow-md rounded-lg dark:bg-gray-800">
        <div
          className="mt-5 bg-cover bg-center text-white p-10 rounded-lg"
          style={{ backgroundImage: "url('../../slep-studios/Candyforlife/candyforlifebackground.png')" }}
        >
          <h2 className="text-center font-bold text-black text-lg dark:text-white">Download</h2>
          <p className="text-center text-black dark:text-white font-medium mb-5">
            <b>Price:</b> $0.00
          </p>
          <center>
            <a
              href="CandyforLife.zip"
              className="inline-block bg-yellow-500 text-white py-2 px-4 rounded-lg text-center font-bold mt-2 hover:bg-yellow-400"
            >
              Download for Windows
            </a>
          </center>
        </div>
      </div>
    </div>
  );
};

export default CandyForLife;

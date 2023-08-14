"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { Poppins, Orbitron } from "next/font/google";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });
const orbitron = Orbitron({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main>
        <div className="infoPanel">
          <div className="teamInfo_logo"></div>
          <p className={`${poppins.className} teamInfo_name`}>
            Golden State Warriors
          </p>
          <div className="gameInfo">
            <div className={`${orbitron.className} gameInfo_timer`}>15:22</div>
            <div className="gameInfo_points_container">
              <div className={`${orbitron.className} gameInfo_points`}>97</div>
              <div className={`${orbitron.className} gameInfo_points`}>102</div>
            </div>
          </div>
          <p className={`${poppins.className} teamInfo_name`}>
            Los Angeles Lakers
          </p>
          <div className="teamInfo_logo"></div>
        </div>
        <div className="playersPanel">
          <div className="teamPanel">
            <div className="playerControlPanel">
              <p
                className={`${poppins.className} playerControlPanel_playerName`}
              >
                Bruno Zamorano
              </p>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
            </div>
            <div className="playerControlPanel">
              <p
                className={`${poppins.className} playerControlPanel_playerName`}
              >
                Bruno Zamorano
              </p>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
            </div>
            <div className="playerControlPanel">
              <p
                className={`${poppins.className} playerControlPanel_playerName`}
              >
                Bruno Zamorano
              </p>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
            </div>
            <div className="playerControlPanel">
              <p
                className={`${poppins.className} playerControlPanel_playerName`}
              >
                Bruno Zamorano
              </p>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
            </div>
            <div className="playerControlPanel">
              <p
                className={`${poppins.className} playerControlPanel_playerName`}
              >
                Bruno Zamorano
              </p>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
            </div>
            <div className="playerControlPanel">
              <p
                className={`${poppins.className} playerControlPanel_playerName`}
              >
                Bruno Zamorano
              </p>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
            </div>
          </div>
          <div className="teamPanel">
            <div className="playerControlPanel">
              <p
                className={`${poppins.className} playerControlPanel_playerName`}
              >
                Bruno Zamorano
              </p>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
            </div>
            <div className="playerControlPanel">
              <p
                className={`${poppins.className} playerControlPanel_playerName`}
              >
                Bruno Zamorano
              </p>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
            </div>
            <div className="playerControlPanel">
              <p
                className={`${poppins.className} playerControlPanel_playerName`}
              >
                Bruno Zamorano
              </p>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
            </div>
            <div className="playerControlPanel">
              <p
                className={`${poppins.className} playerControlPanel_playerName`}
              >
                Bruno Zamorano
              </p>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
            </div>
            <div className="playerControlPanel">
              <p
                className={`${poppins.className} playerControlPanel_playerName`}
              >
                Bruno Zamorano
              </p>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
            </div>
            <div className="playerControlPanel">
              <p
                className={`${poppins.className} playerControlPanel_playerName`}
              >
                Bruno Zamorano
              </p>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
              <article className="playerControlPanel_statsCard"></article>
            </div>
          </div>
        </div>
        <div className="logPanel"></div>
      </main>
    </>
  );
}

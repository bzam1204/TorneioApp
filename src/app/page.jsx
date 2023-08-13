"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { Aoboshi_One } from "next/font/google";
import { env } from "../../next.config";
import BadgesPanel from "@/components/BadgesPanel";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="infoPanel">
        <div className="teamInfo">
          <div className="teamInfo_logo"></div>
          <p className={`${poppins.className} teamInfo_name`}>
            Golden State Warriors
          </p>
        </div>
        <div className="gameInfo">
          <div className="gameInfo_timer">15:22</div>
          <div className="gameInfo_points">97</div>
          <div className="gameInfo_points">102</div>
        </div>
        <div className="teamInfo">
          <p className={`${poppins.className} teamInfo_name`}>
            Los Angeles Lakers
          </p>
          <div className="teamInfo_logo"></div>
        </div>
      </div>
      <div className="playersPanel">
        <div className="teamPanel">
          <div className="playerControlPanel">
            <p className={`${poppins.className} playerControlPanel_playerName`}>
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
            <p className={`${poppins.className} playerControlPanel_playerName`}>
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
            <p className={`${poppins.className} playerControlPanel_playerName`}>
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
            <p className={`${poppins.className} playerControlPanel_playerName`}>
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
            <p className={`${poppins.className} playerControlPanel_playerName`}>
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
            <p className={`${poppins.className} playerControlPanel_playerName`}>
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
            <p className={`${poppins.className} playerControlPanel_playerName`}>
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
            <p className={`${poppins.className} playerControlPanel_playerName`}>
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
            <p className={`${poppins.className} playerControlPanel_playerName`}>
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
            <p className={`${poppins.className} playerControlPanel_playerName`}>
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
            <p className={`${poppins.className} playerControlPanel_playerName`}>
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
            <p className={`${poppins.className} playerControlPanel_playerName`}>
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
  );
}

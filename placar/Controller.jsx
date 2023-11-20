"use client";
import React from "react";
import { useRecoilState } from "recoil";

export default function Controller() {
  const [getPlacar, setPlacar] = useRecoilState(placar);

  return (
    <div style={{ textAlign: "center", padding: "3vw" }}>
      {/* <button
        onClick={function () {
          setPlacar(function (oldPlacar) {
            localStorage.setItem('placar', JSON.stringify({ ...oldPlacar, scoreTeamA: oldPlacar.scoreTeamA + 1 }));
            return { ...oldPlacar, scoreTeamA: oldPlacar.scoreTeamA + 1 };
          });
        }}
      >
        {`+ + +
        + + +
        + + +`}
      </button> */}
    </div>
  );
}

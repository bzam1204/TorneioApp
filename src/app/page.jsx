"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { Aoboshi_One } from "next/font/google";
import { env } from "../../next.config";
import BadgesPanel from "@/components/BadgesPanel";

export default function Home() {
  const [isDroped, setIsDroped] = useState(false);

  useEffect(() => {
    DragEventListeners();
  }, []);

  function aoEntrarBadge(e) {
    e.preventDefault();
    e.stopPropagation();
    const dragging = document.querySelector(".dragging");
    const dragging_clone = dragging.cloneNode(true);
    dragging_clone.classList.remove("dragging");
    const main = document.querySelector("main");
    e.target.appendChild(dragging);
  }

  function aoSairBadge(e) {
    e.preventDefault();
    e.stopPropagation();
    const dragging = document.querySelector(".dragging");
    // dragging.remove();
  }

  function DragEventListeners() {
    let badgesPanelTemTudo;
    let ultimoArrastado;
    const main = document.querySelector("main");

    document.addEventListener("dragstart", (e) => {
      e.target.classList.add("dragging");
      ultimoArrastado = e.target;
    });
    document.addEventListener("dragend", (e) => {
      e.target.classList.remove("dragging");
      ultimoArrastado = e.target;
    });
    document.addEventListener("drop", (e) => {
      const badgesPanel = document.querySelector(".badges_panel");

      badgesPanelTemTudo = badgesPanel.childElementCount == 2;

      if (!badgesPanelTemTudo) {
        const cloneUltiArrastado = ultimoArrastado.cloneNode(true);
        cloneUltiArrastado.classList.remove("dragging");
        badgesPanel.appendChild(cloneUltiArrastado);
      }
    });

    document.querySelectorAll(".container_badges").forEach((item) => {
      console.log("hello");
    });
  }

  return (
    <main>
      <section className="teams_panel">
        <div
          onDragLeave={aoSairBadge}
          onDragOver={aoEntrarBadge}
          className="container_badges"
        ></div>

        <div
          onDragOver={aoEntrarBadge}
          onDragLeave={aoSairBadge}
          className="container_badges"
        ></div>
      </section>

      <BadgesPanel />
    </main>
  );
}

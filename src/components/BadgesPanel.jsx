"use client";
import { useEffect, useState } from "react";

export default function BadgesPanel() {
  function aoEntrarBadge(event) {
    event.stopPropagation();
    const badgesPanel = document.querySelector(".badges_panel");
    const dragging = document.querySelector(".dragging");
    badgesPanel.appendChild(dragging);
  }

  return (
    <section onDragOver={aoEntrarBadge} className="badges_panel">
      <article className="btn btn_3PTS" draggable="true">
        3 PTS
      </article>

      <article className="btn btn_ASSIST" draggable="true">
        ASSIST
      </article>
    </section>
  );
}

import React from "react";
import { useState } from "react";
import "../styles/DescriptionComponentStyle.css";

export const DescriptionComponent = ({ text }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="description-button" onClick={() => setOpen(true)}>
        Descripción
      </button>
      {open && (
        <div className="description-container" onClick={() => setOpen(false)}>
          <article
            className="description-article"
            onClick={(e) => e.stopPropagation()}
          >
            {text}
          </article>
        </div>
      )}
    </>
  );
};

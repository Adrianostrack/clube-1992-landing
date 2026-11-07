"use client";

import { useState, useEffect } from "react";

export default function AccessibilityButton() {
  const [open, setOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [wideSpacing, setWideSpacing] = useState(false);
  const [grayscale, setGrayscale] = useState(false);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    document.documentElement.classList.toggle("high-contrast", highContrast);
  }, [highContrast]);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  useEffect(() => {
    document.documentElement.classList.toggle("wide-spacing", wideSpacing);
  }, [wideSpacing]);

  useEffect(() => {
    document.documentElement.classList.toggle("grayscale", grayscale);
  }, [grayscale]);

  useEffect(() => {
    // style.zoom expects a string
    document.documentElement.style.zoom = `${zoom}`;
  }, [zoom]);

  const increaseFont = () => setFontSize((prev) => Math.min(prev + 10, 200));
  const decreaseFont = () => setFontSize((prev) => Math.max(prev - 10, 50));

  const increaseZoom = () => setZoom((prev) => Math.min(prev + 0.1, 3));
  const decreaseZoom = () => setZoom((prev) => Math.max(prev - 0.1, 0.5));

  const resetSettings = () => {
    setHighContrast(false);
    setFontSize(100);
    setWideSpacing(false);
    setGrayscale(false);
    setZoom(1);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        aria-label="Menu de acessibilidade"
        onClick={() => setOpen(!open)}
        className="p-4 bg-1992 text-white rounded-full shadow-lg hover:bg-1992-dark transition focus:outline-none focus:ring-2 focus:ring-silver-100"
      >
        ♿
      </button>

      {open && (
        <div className="mt-2 flex flex-col space-y-2 bg-black bg-opacity-80 p-4 rounded-lg shadow-xl">
          <button
            onClick={() => setHighContrast(!highContrast)}
            className="flex items-center space-x-2 p-2 hover:bg-white hover:bg-opacity-10 rounded transition"
            aria-label="Alternar alto contraste"
          >
            <span>
              {highContrast ? "Desativar Alto Contraste" : "Alto Contraste"}
            </span>
          </button>

          <div className="flex items-center space-x-2 p-2 hover:bg-white hover:bg-opacity-10 rounded transition">
            <button
              onClick={decreaseFont}
              aria-label="Diminuir tamanho do texto"
              className="text-xl"
            >
              −
            </button>
            <span>Texto ({fontSize}%)</span>
            <button
              onClick={increaseFont}
              aria-label="Aumentar tamanho do texto"
              className="text-xl"
            >
              +
            </button>
          </div>

          <div className="flex items-center space-x-2 p-2 hover:bg-white hover:bg-opacity-10 rounded transition">
            <button
              onClick={decreaseZoom}
              aria-label="Diminuir zoom"
              className="text-xl"
            >
              −
            </button>
            <span>Zoom ({Math.round(zoom * 100)}%)</span>
            <button
              onClick={increaseZoom}
              aria-label="Aumentar zoom"
              className="text-xl"
            >
              +
            </button>
          </div>

          <button
            onClick={() => setWideSpacing(!wideSpacing)}
            className="flex items-center space-x-2 p-2 hover:bg-white hover:bg-opacity-10 rounded transition"
            aria-label="Alternar espaçamento amplo"
          >
            <span>
              {wideSpacing ? "Espaçamento Normal" : "Espaçamento Amplo"}
            </span>
          </button>

          <button
            onClick={() => setGrayscale(!grayscale)}
            className="flex items-center space-x-2 p-2 hover:bg-white hover:bg-opacity-10 rounded transition"
            aria-label="Alternar escala de cinza"
          >
            <span>{grayscale ? "Normal" : "Escala de Cinza"}</span>
          </button>

          <button
            onClick={resetSettings}
            className="flex items-center space-x-2 p-2 hover:bg-white hover:bg-opacity-10 rounded transition"
            aria-label="Redefinir Configurações"
          >
            Redefinir
          </button>
        </div>
      )}
    </div>
  );
}

'use client'

import styles from "./page.css";
import React from 'react'
import Menu from "./components/Menu";

export default function Home() {

  return (
    <div>
      <Menu/> 

    <section className="banner">
        <div className="banner-content">
            <h1>BIENVENIDO A DUTY CARS C.A.</h1>
            <h2>"Tenemos el deber de entregar un excelente trabajo"</h2>
        </div>
    </section>
    </div>
  );
}

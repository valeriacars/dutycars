'use client'

import styles from "./page.css";
import React from 'react'
import Menu from "./components/Menu";

export default function Home() {

  return (
    <div>

    <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
    <df-messenger
      intent="WELCOME"
      chat-title="DutyChats"
      agent-id="b5c6507a-b8ce-4e25-a689-39a44d3bab72"
      language-code="es"
    ></df-messenger>

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

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Duty Cars",
  description: "taller de mecanica general",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>

        
            <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
            <df-messenger
              intent="WELCOME"
              chat-title="DutyChats"
              agent-id="b5c6507a-b8ce-4e25-a689-39a44d3bab72"
              language-code="es"
            ></df-messenger>

        {children}
      </body>
    </html>
  );
}

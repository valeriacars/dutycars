import Menu from "../components/Menu";
import styles from '../page.css'

export default function chat() {
    return (
        <div className="chat-container">
            <Menu />
            
            <section className="chat-section">
                <div className="chat-wrapper">
                    <h2 className="section-title">Soporte en Línea</h2>
                    
                    <div className="chat-box">
                        <iframe 
                            className="chat-iframe"
                            src="https://bot.dialogflow.com/b5c6507a-b8ce-4e25-a689-39a44d3bab72"
                            allowFullScreen
                        />
                    </div>

                    <div className="action-buttons">
                        <a href="/" className="btn primary-btn">Volver al inicio</a>
                    </div>
                </div>
            </section>
        </div>

    )
}
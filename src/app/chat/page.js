import Menu from "../components/Menu";

export default function chat() {
    return (
        <div style={{textAlign: 'center', marginBottom: '20px'}}>
            <Menu/>
            <iframe height="430" width="350" src="https://bot.dialogflow.com/b5c6507a-b8ce-4e25-a689-39a44d3bab72"></iframe>
        </div>
    )
}
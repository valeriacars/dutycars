import Menu from "../components/Menu";

export default function chat() {
    return (
        <div style={{textAlign: 'center', marginBottom: '20px'}}>
            <Menu/>
                <iframe
                    style={{marginTop: '20px'}}
                    allow="microphone;"
                    width="600"
                    height="450"
                    src="https://console.dialogflow.com/api-client/demo/embedded/ff5808d6-3019-457c-b6e2-1b8552587ae9">
                </iframe>
        </div>
    )
}
import './App.css'
import Simple from './rive_component.jsx'

function App() {
  return (
    <>
        <div style={{display: "flex", gap: "20px", padding: "20px"}}>
            <div className="Generating" style={{display: "flex", flexDirection:"column", alignItems: "center", width: "max-content", gap: "8px"}}>
                <div style={{width: "20px", height: "20px"}}>
                    <Simple filename={"generating.riv"}/>
                </div>
                <p style={{color: "#f9f9f9", padding: "0px", margin: "0px"}}>Generating</p>
            </div>
        </div>
    </>
  )
}

export default App

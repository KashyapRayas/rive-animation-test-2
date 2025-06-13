import './App.css'
import Simple from './rive_component.jsx'
import ThumbLiked from './thumb_like.jsx'
import ThumbDisliked from './thumb_dislike.jsx'

function App() {
  return (
    <>
        <div style={{display: "flex", gap: "30px", alignItems: "flex-end", width: "100%", flexWrap: "wrap", boxSizing: "border-box"}}>
            <div
                className="Generating"
                style={{display: "flex", flexDirection:"column", alignItems: "center", width: "max-content", gap: "8px"}}>
                <div style={{width: "20px", height: "20px"}}>
                    <Simple filename={"generating.riv"}/>
                </div>
                <p style={{color: "#f9f9f9", padding: "0px", margin: "0px", fontSize: "14px"}}>Generating</p>
            </div>
            <div
                className="inQueue"
                style={{display: "flex", flexDirection:"column", alignItems: "center", width: "max-content", gap: "8px"}}>
                <div style={{width: "20px", height: "20px"}}>
                    <Simple filename={"in_queue.riv"}/>
                </div>
                <p style={{color: "#A3A6B7", padding: "0px", margin: "0px", fontSize: "14px"}}>In Queue</p>
            </div>
            <div className="Wrapper" style={{display: "flex", flexDirection: "column", gap: "8px"}}>
                <p style={{color: "#606479", padding: "0px", margin: "0px", fontSize: "13px"}}>Hover over me!</p>
                <div
                    className="Generation_pill"> {/* style in index.css */}
                    <p style={{color: "#f9f9f9", padding: "0px", margin: "0px", fontSize: "14px"}}>Generating</p>
                    <div style={{width: "20px", height: "20px"}}>
                        <Simple filename={"generating.riv"}/>
                    </div>
                    <p style={{color: "#f9f9f9", padding: "0px", margin: "0px", fontSize: "14px"}}>3 min left</p>
                </div>
            </div>
            <div className="Wrapper" style={{display: "flex", flexDirection: "column", gap: "8px"}}>
                <p style={{color: "#606479", padding: "0px", margin: "0px", fontSize: "13px"}}>Click me!</p>
                <div style={{display: "flex", alignItems: "center", width: "max-content", gap: "8px"}} >
                    <div className="Wrapper-feedback Like">
                            <ThumbLiked/>
                    </div>
                    <div className="Wrapper-feedback Unlike">
                            <ThumbDisliked/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default App

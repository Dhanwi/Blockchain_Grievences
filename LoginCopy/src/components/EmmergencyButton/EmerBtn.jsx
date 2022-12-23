import "./Btn.css";
// import ChatIcon from '@mui/icons-material/Chat';
const EmerBtn=()=>{
    const energencyHandle=()=>{
        document.getElementsByClassName("mssg-container")[0].style.display="block";
    }
    return(
        <>
        <div className="emerBtn" onClick={()=>{energencyHandle()}}><img src="./images/chat.png"/></div>
        <div className="mssg-container">

        </div>
        </>
    )
}

export default EmerBtn;
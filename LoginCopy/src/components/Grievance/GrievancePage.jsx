import { useState } from "react";
import "./grievance.css";
const GrievancePage = (props) => {
    const [ques,setQues]=useState("");
    const { id, query } = props;
    return (
        <>
            <div className="griev-container">
                <div className="griev-query">
                    <h1>Ask your question about {query} Issues</h1>
                </div>

                <input type="text" placeholder="search" value={ques} onChange={()=>{setQues()}}/>
            </div>
        </>
    )
}

export default GrievancePage;
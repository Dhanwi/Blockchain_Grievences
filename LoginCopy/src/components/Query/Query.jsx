import { useNavigate} from 'react-router-dom';
import {QueryData} from "../../Resources/QueryData";
import QueryCard from "../QueryCard/QueryCard";
import "./Query.css";
const Query=()=>{
    const navigate = useNavigate();
    console.log(QueryData);
    const Grievancenavigate=(e)=>{
        navigate('/grievance',{state:{id:e.id,name:e.query}});
    }
    return(
        <>
        <div className="Query-container">
            <div className='query-text'>
                <h2>Raise your query</h2>
            </div>
            <div className="Querygenrator">
                {
                    QueryData.map((e)=>{
                        return(
                           <div onClick={()=>{Grievancenavigate(e)}}> <QueryCard key={e.id} query={e.query} about={e.about} source={e.image}/> </div>
                        )
                        
                    })
                }
            </div>
        </div>
        </>
    )
}

export default Query;
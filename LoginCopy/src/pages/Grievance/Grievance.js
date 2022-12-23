import {useLocation} from 'react-router-dom';
import GrievancePage from '../../components/Grievance/GrievancePage';
const Grievance =()=>{
    const { state } = useLocation();
  console.log(state);
    return (
        <>
        
        <GrievancePage key={state.id} query={state.name}/>
        </>
    )
}

export default Grievance;
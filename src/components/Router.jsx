import { Link } from 'react-router-dom';

const Router = ({ to, name }) =>{

    return(
        <div className='pr-6 pl-6 mr-2 pt-2 pb-2'>
            <Link to={to}>{name}</Link>
        </div>
    )
} 

export default Router;
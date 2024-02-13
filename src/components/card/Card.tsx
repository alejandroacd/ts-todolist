import './index.css';
import Input from '../../ui-kit/input';
import { CiCircleCheck } from "react-icons/ci";
import List from '../list/List';
import { tasks } from '../../tasks';
const Card = () : JSX.Element => {
    return (
        <>
        <div className="card">
            <div className='title_container'>
                <h1>things to do </h1>
                <CiCircleCheck size={40} />
            </div>
         
        <Input title='Enter a new task...' />
        <List todos={tasks} />
        </div>
        </>
    )
}

export default Card
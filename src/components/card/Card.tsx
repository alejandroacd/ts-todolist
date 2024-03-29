import './index.css';
import Input from '../../ui-kit/input';
import { CiCircleCheck } from "react-icons/ci";
import List from '../list/List';
import { useTodos } from '../../utility/context/TodosContext';
import { useEffect } from 'react';
const Card = () : JSX.Element => {
    const { todos } = useTodos();


    return (
        <>
        <div className="card">
            <div className='title_container'>
                <h1>things to do </h1>
                <CiCircleCheck size={40} />
            </div>
         
        <Input title='Enter a new task...' />
        <List todos={todos} />
        </div>
        </>
    )
}

export default Card
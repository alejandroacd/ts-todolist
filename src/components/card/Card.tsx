import './index.css';
import Input from '../../ui-kit/input';
import { CiCircleList } from "react-icons/ci";
import List from '../list/List';
import { useTodos } from '../../utility/context/TodosContext';
const Card = (): JSX.Element => {
    const { todos } = useTodos();


    return (
        <>
            <div className="card fade-in">
                <div className='title_container'>
                    <CiCircleList size={30} />
                    <h1>things to do </h1>
                </div>

                <Input title='Enter a new task...' />
                <List todos={todos} />
            </div>
        </>
    )
}

export default Card
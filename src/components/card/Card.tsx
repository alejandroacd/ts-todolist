import './index.css';
import Input from '../../ui-kit/input';
import HomeFilters from '../HomeFilters/index';
import { CiCircleList } from "react-icons/ci";
import List from '../list/List';
import { useTodos } from '../../utility/context/TodosContext';
const Card = (): JSX.Element => {
    const { filterSelected} = useTodos();

    return (
        <>
            <div className="card fade-in">
                <div className='title_container'>
                    <CiCircleList size={30} />
                    <h1 className='title'>Things to do </h1>
                </div>

                <Input title='Enter a new task...' />
                <div className='filters'>
                    <HomeFilters />
                </div>
                <List todos={filterSelected} />
            </div>
        </>
    )
}

export default Card
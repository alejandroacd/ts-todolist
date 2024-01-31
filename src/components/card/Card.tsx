import './index.css'
import Input from '../../ui-kit/input/input'
import { CiCircleCheck } from "react-icons/ci";

const Card = () : JSX.Element => {
    return (
        <>
        <div className="card">
            <div className='title_container'>
                <h1>things to do </h1>
                <CiCircleCheck size={40} />
            </div>
         
        <Input title='Enter a new task...' />
        </div>
        </>
    )
}

export default Card
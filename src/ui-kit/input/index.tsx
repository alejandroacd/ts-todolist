import './index.css'
interface ChildProps {
    title: string
}
const Input: React.FC<ChildProps> = ({title}) => {
    return (
        <>

        <input  className='input_text' type='text' placeholder={title}/>
        </>
    )
}

export default Input
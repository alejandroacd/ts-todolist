import './styles.css'
interface ChildProps {
    title: string,
    selectedFilter: string | null,
    handleFilter: (filter: string) => void
}
const FilterButton: React.FC<ChildProps> = ({title, selectedFilter, handleFilter}) => {
    return (
        <button className={selectedFilter === title ? 'selected' : ''} onClick={() => handleFilter(title)}>
           {title}
        </button>
    )
}

export default FilterButton
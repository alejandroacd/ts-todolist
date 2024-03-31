import {  useState } from 'react'
import FilterButton from '../../ui-kit/buttons'
import './styles.css'
import { useTodos } from '../../utility/context/TodosContext'
const HomeFilters = () => {
    const [selectedFilter, setSelectedFilter] = useState<string | null>("All")
    const { setFilterSelected, todos} = useTodos()
    const handleFilter = (filter: string) => {

        setSelectedFilter(filter)
        switch (filter) {
            case 'All':
                setFilterSelected(todos?.map((todo) => todo))
                break;
            case 'Pending':
                setFilterSelected(todos?.filter((todo) => !todo.completed))
                break;
            case 'Completed':
                setFilterSelected(todos?.filter((todo) => todo.completed))
        }
    }

    return (
        <div className='filters_container'>
            <h1> Filters: </h1>
            <div className='buttons-container'>
            <FilterButton title='All' selectedFilter={selectedFilter} handleFilter={handleFilter} />
            <FilterButton title='Pending' selectedFilter={selectedFilter} handleFilter={handleFilter} />
            <FilterButton title='Completed' selectedFilter={selectedFilter} handleFilter={handleFilter} />

            </div>
           
        </div>
    )
}

export default HomeFilters
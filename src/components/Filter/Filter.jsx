import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import css from './Filter.module.css'

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };
    return (
        <label className={css.filterBox}> Find contacts by name
          <input className={css.filterInput}
            type="text"
            name="filter"
            onChange={handleChangeFilter}
            placeholder="Search..."
          />
        </label>  
    );
   
}


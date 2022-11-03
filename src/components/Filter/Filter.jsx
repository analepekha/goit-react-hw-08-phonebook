import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from "react-redux";
import { selectFilter } from 'redux/filter/filter-selectors';
import { setFilter } from 'redux/filter/filter-slice';

import { FilterWrap, LabelFilter, InputFilter } from './Filter.styled';

export const Filter = () => {

    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();

    const searchContactId = nanoid();

    const handleChangeFilter = e => {
        const { value } = e.target;
        dispatch(setFilter(value));
    };

    return(
        <FilterWrap>
        <LabelFilter htmlFor ={searchContactId} >Find contacts by name</LabelFilter>
            <InputFilter
                type="text"
                name='filter'
                value={filter}
                id={searchContactId}
                onChange={handleChangeFilter}
                placeholder='Search'
            />
        </FilterWrap>
)
}


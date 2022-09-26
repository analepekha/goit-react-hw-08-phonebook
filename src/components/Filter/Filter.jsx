import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { FilterWrap, LabelFilter, InputFilter } from './Filter.styled';

export const Filter = ({value, handleChangeFilter}) => {
    const searchContactId = nanoid();

    return(
        <FilterWrap>
        <LabelFilter htmlFor ={searchContactId} >Find contacts by name</LabelFilter>
            <InputFilter
                type="text"
                name='filter'
                value={value}
                id={searchContactId}
                onChange={handleChangeFilter}
            />
        </FilterWrap>
)
}

Filter.propTypes = {
    handleChangeFilter: PropTypes.func.isRequired,
     value: PropTypes.string.isRequired,
}
import { FilterWrap, LabelFilter, InputFilter } from './Filter.styled';

export const Filter = () => {
    return(
        <FilterWrap>
        <LabelFilter htmlFor = "" >Find contacts by name</LabelFilter>
        <InputFilter
                type="text"
            />
        </FilterWrap>
)
}
import { Box, TextField, Typography } from '@mui/material';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from "react-redux";
import { selectFilter } from 'redux/filter/filter-selectors';
import { setFilter } from 'redux/filter/filter-slice';

export const Filter = () => {

    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();

    const searchContactId = nanoid();

    const handleChangeFilter = e => {
        const { value } = e.target;
        dispatch(setFilter(value));
    };

    return(
        <Box component='div' sx={{mb: '15px', mt: '15px', display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'}}>
        <Typography component='p' sx={{mb:'10px'}}>Find contacts by name</Typography>
            <TextField
                type="text"
                name='filter'
                value={filter}
                id={searchContactId}
                onChange={handleChangeFilter}
                placeholder='Search'
                variant="standard"
                sx={{ width: '250px'}}
                // margin="dense"
            />
        </Box>
)
}


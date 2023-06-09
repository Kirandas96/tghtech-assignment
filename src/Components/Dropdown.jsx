import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { getSearch } from '../Redux/Quotes/action';

export default function Dropdown({arr}) {
  const [tag, setTag] = React.useState('');
const dispatch=useDispatch()
  const handleChange = (event) => {
    setTag(event.target.value);
    dispatch(getSearch(event.target.value))
  };
  return (
    <FormControl sx={{ m: 1, minWidth: 220}} size="medium">
      <InputLabel id="demo-select-small">Thought</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={tag}
        label="Age"
        onChange={handleChange}
        className="select"
      >
        {arr.map((el)=>{
            return(
                <MenuItem key={el._id} value={el.name}>{el.name}</MenuItem>
            )
        })}
       
      </Select>
    </FormControl>
  );
}

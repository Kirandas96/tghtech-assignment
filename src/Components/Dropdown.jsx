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
  console.log(tag)
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Thought</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={tag}
        label="Age"
        onChange={handleChange}
      >
        {arr.map((el)=>{
            return(
                <MenuItem key={el.id} value={el.name}>{el.name}</MenuItem>
            )
        })}
       
      </Select>
    </FormControl>
  );
}

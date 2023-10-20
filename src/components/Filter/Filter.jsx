import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';

import { Input, Label } from './Filter.styled';
import { Block, Title } from 'index.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const onFilterChange = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

  return (
    <Block>
      <Title>Find contact:</Title>
      <Label>
        Find contacts by name
        <Input type="text" name="filter" onInput={onFilterChange} />
      </Label>
    </Block>
  );
};

export default Filter;

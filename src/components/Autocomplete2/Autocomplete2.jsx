import React from 'react';
import PropTypes from 'prop-types';
import AsyncCreatableSelect from 'react-select/async-creatable';
import debounce from 'debounce-promise';

import Theme from '../Theme';

const selectStyles = theme => ({
  container: provided => ({
    ...provided,
    fontFamily: theme.typography.fontFamily,
    marginBottom: theme.spacing(2),
  }),
  control: provided => ({
    ...provided,
    border: 0,
    borderRadius: 0,
    boxShadow: 'none !important',
    padding: 8,
    fontSize: '1.14rem',
    '&:hover': {
      border: 0,
    },
  }),
  input: provided => ({
    ...provided,
    color: '#000',
    fontSize: '1rem',
    fontWeight: 300,
  }),
  option: (provided, state) => ({
    ...provided,
    background: state.isSelected && theme.palette.action.selected,
    color: state.isSelected && '#000',
    '&:hover': {
      background: theme.palette.action.hover,
    },
  }),
  placeholder: provided => ({
    ...provided,
    fontWeight: 300,
  }),
  singleValue: provided => ({
    ...provided,
    fontSize: '1rem',
    fontWeight: 300,
  }),
  valueContainer: provided => ({
    ...provided,
    padding: '0 8px',
  }),
});

const Asynchronous2 = (props) => {
  const { loadOptions } = props;
  return (
    <AsyncCreatableSelect
      cacheOptions
      defaultOptions
      loadOptions={debounce(loadOptions, 300)}
      styles={selectStyles(Theme)}
      {...props}
    />
  );
};

Asynchronous2.propTypes = {
  loadOptions: PropTypes.func.isRequired,
};

export default Asynchronous2;

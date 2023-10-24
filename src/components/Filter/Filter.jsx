import React from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChangeFilter }) => {
  return (
    <label className={css.label}>
    Find contacts by name
    <input
      className={css.input}
      type="text"
      value={value}
      onChange={e => onChangeFilter(e.target.value)}
    />
  </label>
);
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

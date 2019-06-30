import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import PropTypes from 'prop-types';

import styles from '../../css/day.module.css';

const Day = ({ day, info }) => {
  const [showInfo, setInfo] = useState(false);

  const toggleInfo = () => {
    setInfo(!showInfo);
  };

  return (
    <article className={styles.day}>
      <h4>
        {day}
        <button type="button" className={styles.btn} onClick={toggleInfo}>
          <FaAngleDown />
        </button>
      </h4>
      {showInfo && <p>{info}</p> }
    </article>
  );
};


Day.propTypes = {
  day: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};

export default Day;

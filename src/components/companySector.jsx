import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ICONS from '../assets/myIcons';
import style from '../styles/Sector.module.css';

function Sector({ sector, change, className }) {
  const url = encodeURI(`sectors/${sector}`);
  const { iconContainer, infoContainer } = style;
  return (
    <NavLink to={url} className={`${style.sector} ${className}`}>
      <div className={iconContainer}>
        <FontAwesomeIcon icon={ICONS[sector]} />
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
      <div className={infoContainer}>
        <h3>{sector}</h3>
        <span>{change}</span>
      </div>
    </NavLink>
  );
}

Sector.propTypes = {
  sector: PropTypes.string.isRequired,
  change: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Sector;
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import styles from './Feature.module.css';

export default function Feature({ title, img, imgAlt, description }) {
  return (
    <div className={styles['feature-item']}>
      <img src={img} alt={imgAlt} className={styles['feature-icon']} />
      <h3 className={styles['feature-item-title']}>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

Feature.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
Feature.defaultProps = {
  title: null,
  img: null,
  imgAlt: null,
  description: null,
};

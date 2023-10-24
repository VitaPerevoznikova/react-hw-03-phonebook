import css from './Section.module.css';
import PropTypes from 'prop-types';

export const Section = ({children, title }) => {
    return(
        <section className={css.section}>
            <div className={css.container}>
         {title && <h2>{title}</h2>}
         {children}
         </div>   
        </section>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
  };
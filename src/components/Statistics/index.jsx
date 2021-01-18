import styles from './statistics.module.css';
// import PropTypes from 'prop-types';

export default function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
        <section className={styles.statistics}>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {positivePercentage}%</p>
        </section>
    );
}


// Statistics.propTypes = {
//   avatar: PropTypes.string,
//   name: PropTypes.string,
//   tag: PropTypes.string,
//   location: PropTypes.string,
//   stats: PropTypes.arrayOf(
//     PropTypes.shape({
//       followers: PropTypes.number,
//       views: PropTypes.number,
//       likes: PropTypes.number,
//     }),
//   ),
// };
import styles from './feedbackOptions.module.css';
// import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <section className={styles.feedbackSection}>
            <h1>Please leave feedback</h1>
            <div className={styles.buttons}>
                {options.map(option => (
                    <button
                        key={option}
                        type="button"
                        className={styles.button}
                        onClick={() => onLeaveFeedback(option)}
                    >
                    {option}
                    </button>
                ))}
            </div>
        </section>
    );
}


// FeedbackOptions.propTypes = {
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
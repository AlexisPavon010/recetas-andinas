import classNames from 'classnames';
import StarIcon from 'components/Icons/StarIcon';

import styles from 'components/Utils/StarReview/star_review.module.scss';

interface StarReviewProps {
  amount: number;
}

const StarReview = ({ amount }: StarReviewProps) => {
  return <div className={styles.star_review}>
    {new Array(5).fill(0).map((_, rateIndex) => (
      <StarIcon
        key={rateIndex}
        className={classNames(
          styles.star_review__icon,
          ((rateIndex + 1) <= amount) && styles['star_review__icon--fill']
        )}
      />
    ))}
  </div>
}

export default StarReview;
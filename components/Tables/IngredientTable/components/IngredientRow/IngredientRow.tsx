import { useState } from 'react';

import styles from 'components/Tables/IngredientTable/components/IngredientRow/ingredient_row.module.scss'
import SwitchField from 'components/Fields/SwitchField';
import StarReview from 'components/Utils/StarReview';

interface RecipeProps {
  id: number;
  isCooking: boolean;
  name: string;
  rating: number;
  setShowDetailsRecipe: (boolean: boolean) => void;
}

const IngredientRow = ({ id, isCooking, name, rating, setShowDetailsRecipe }: RecipeProps) => {
  const [checked, setChecked] = useState(isCooking)

  return (
    <tr className={styles.ingredient_row}>
      <td className={styles.ingredient_row__cell} onClick={() => setShowDetailsRecipe(true)}>{name}</td>
      <td className={styles.ingredient_row__cell}>
        <StarReview amount={rating} />
      </td>
      <td className={styles.ingredient_row__cell}>
        <SwitchField
          onChange={() => setChecked((state) => !state)}
          checked={checked}
        />
      </td>
    </tr>
  )
}

export default IngredientRow
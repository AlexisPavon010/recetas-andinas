import { useState } from 'react';

import styles from 'components/Tables/IngredientTable/components/IngredientRow/ingredient_row.module.scss'
import SwitchField from 'components/Fields/SwitchField';
import StarReview from 'components/Utils/StarReview';

interface setShowDetailsRecipeProps {
  visible: boolean;
  rating: number
  name: string;
  isCooking: boolean;
  ingredients: string[];
  preparation: string;
}

interface RecipeProps {
  id: number;
  isCooking: boolean;
  name: string;
  rating: number;
  ingredients: string[]
  preparation: string;
  setShowDetailsRecipe: any;
}

const IngredientRow = ({ id, isCooking, name, rating, ingredients, preparation, setShowDetailsRecipe }: RecipeProps) => {
  const [checked, setChecked] = useState<boolean>(isCooking)

  return (
    <tr className={styles.ingredient_row}>
      <td className={styles.ingredient_row__cell} onClick={() => setShowDetailsRecipe({ visible: true, name, isCooking, rating, ingredients, preparation })}>{name}</td>
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
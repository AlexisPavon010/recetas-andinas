import type Ingredient from "types/ingredient";

import styles from 'components/Tables/IngredientTable/ingredient_table.module.scss'

import IngredientRow from "components/Tables/IngredientTable/components/IngredientRow";

interface setShowDetailsRecipeProps {
  visible: boolean;
  name: string;
  rating: number;
  isCooking: boolean;
  ingredients: string[];
  preparation: string;
}

interface IngredientTableProps {
  items: Ingredient[];
  setShowDetailsRecipe: (value: setShowDetailsRecipeProps) => void;
}

const IngredientTable = ({ items, setShowDetailsRecipe }: IngredientTableProps) => {
  return (
    <table className={styles.ingredient_table}>
      <thead>
        <tr className={styles.ingredient_table__header_row}>
          <th className={styles.ingredient_table__header_cell}>Nombre de la Receta</th>
          <th className={styles.ingredient_table__header_cell}>Reseñas</th>
          <th className={styles.ingredient_table__header_cell}>Cocinado antes</th>
        </tr>
      </thead>
      <tbody>
        {items.length > 0 ?
          items.map(r => (
            <IngredientRow key={r.id} {...r} setShowDetailsRecipe={setShowDetailsRecipe} />
          ))
          : (
            <tr>no se encontro busquedas</tr>
          )
        }
      </tbody>
    </table>
  )
}

export default IngredientTable;

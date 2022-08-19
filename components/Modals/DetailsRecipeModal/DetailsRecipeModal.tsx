import classNames from 'classnames';

import SwitchField from 'components/Fields/SwitchField';
import CloseIcon from 'components/Icons/CloseIcon';
import styles from 'components/Modals/DetailsRecipeModal/details_recipe_modal.module.scss'
import Overlay from 'components/Utils/Overlay';
import StarReview from 'components/Utils/StarReview';

interface setShowDetailsRecipeProps {
  visible: boolean;
  rating: number
  name: string;
  isCooking: boolean;
  ingredients: string[];
  preparation: string;
}

interface DetailsRecipeProps {
  showDetailsRecipe: setShowDetailsRecipeProps;
  setShowEditRecipe: (value: boolean) => void;
  setShowDetailsRecipe: (value: setShowDetailsRecipeProps) => void;
}

const DetailsRecipeModal = ({ showDetailsRecipe, setShowDetailsRecipe, setShowEditRecipe }: DetailsRecipeProps) => {
  const { name, rating, ingredients, preparation, isCooking } = showDetailsRecipe;

  return (
    <>
      <Overlay
        onClick={() => setShowDetailsRecipe({ ...showDetailsRecipe, visible: false })}
        active={showDetailsRecipe.visible}
      />
      <div
        className={classNames(
          styles.details_recipe_modal,
          showDetailsRecipe.visible && styles['details_recipe_modal--show'],
        )}>
        <div className={styles.details_recipe_modal__header}>
          <h3>{name}</h3>

          <CloseIcon
            onClick={() => setShowDetailsRecipe({ ...showDetailsRecipe, visible: false })}
          />
        </div>
        <div className={styles.details_recipe_modal__ingredientes}>
          <p className={styles.details_recipe_modal__ingredientes_text}>Ingredientes</p>
          <ul className={styles.details_recipe_modal__ingredientes_list}>
            {ingredients?.map((i, _) => (
              <li key={_} className={styles.details_recipe_modal__ingredientes_item}>{i}</li>
            ))}
          </ul>
        </div>
        <div className={styles.details_recipe_modal__preparacion}>
          <p className={styles.details_recipe_modal__preparacion_text}>Preparación</p>
          <p className={styles.details_recipe_modal__preparacion_description}>
            {preparation}
          </p>
        </div>
        <div className={styles.details_recipe_modal__review}>
          <p className={styles.details_recipe_modal__review_text}>Reseñas</p>
          <div className={styles.details_recipe_modal__review_star}>
            <StarReview amount={rating} />
          </div>
        </div>
        <div className={styles.details_recipe_modal__cooking}>
          <p className={styles.details_recipe_modal__cooking_text}>Cocinado antes</p>

          <SwitchField checked={isCooking} />
        </div>
        <div className={styles.details_recipe_modal__button_content}>
          <button onClick={() => {
            setShowDetailsRecipe({...showDetailsRecipe, visible: false })
            setShowEditRecipe(true)
          }
          } className={styles.details_recipe_modal__button}>
            Editar
          </button>
        </div>
      </div>
    </>
  )
}

export default DetailsRecipeModal
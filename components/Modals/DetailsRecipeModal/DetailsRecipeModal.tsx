import classNames from 'classnames';

import SwitchField from 'components/Fields/SwitchField';
import CloseIcon from 'components/Icons/CloseIcon';
import styles from 'components/Modals/DetailsRecipeModal/details_recipe_modal.module.scss'
import Overlay from 'components/Utils/Overlay';
import StarReview from 'components/Utils/StarReview';

interface DetailsRecipeProps {
  showDetailsRecipe: boolean;
  setShowEditRecipe: (value: boolean) => void;
  setShowDetailsRecipe: (value: boolean) => void;
}

const DetailsRecipeModal = ({ showDetailsRecipe, setShowDetailsRecipe, setShowEditRecipe }: DetailsRecipeProps) => {
  return (
    <>
      <Overlay
        onClick={() => setShowDetailsRecipe(false)}
        active={showDetailsRecipe}
      />
      <div
        className={classNames(
          styles.details_recipe_modal,
          showDetailsRecipe && styles['details_recipe_modal--show'],
        )}>
        <div className={styles.details_recipe_modal__header}>
          <h3>Melodía de bayas mixtas</h3>

          <CloseIcon
            onClick={() => setShowDetailsRecipe(false)}
          />
        </div>
        <div className={styles.details_recipe_modal__ingredientes}>
          <p className={styles.details_recipe_modal__ingredientes_text}>Ingredientes</p>
          <ul className={styles.details_recipe_modal__ingredientes_list}>
            <li className={styles.details_recipe_modal__ingredientes_item}>1/4 taza de semillas de chía negra</li>
            <li className={styles.details_recipe_modal__ingredientes_item}>2 1/2 tazas de leche de almendras</li>
            <li className={styles.details_recipe_modal__ingredientes_item}>2 naranjas</li>
            <li className={styles.details_recipe_modal__ingredientes_item}>1 1/2 tazas de harina integral simple</li>
            <li className={styles.details_recipe_modal__ingredientes_item}>2 cucharaditas de polvo de hornear</li>
            <li className={styles.details_recipe_modal__ingredientes_item}>1 taza de arándanos frescos o arándanos congelados</li>
          </ul>
        </div>
        <div className={styles.details_recipe_modal__preparacion}>
          <p className={styles.details_recipe_modal__preparacion_text}>Preparación</p>
          <p className={styles.details_recipe_modal__preparacion_description}>
            Combine las semillas de chía, la leche de almendras y 1 cucharada de jarabe de arce en una jarra grande. Deje reposar durante 3-4 minutos o hasta que las semillas se hinchen. Mientras tanto, ralla finamente 1 cucharadita de cáscara de 1 naranja. Cortar los gajos de ambas naranjas (ver Notas).<br />
            Combine la harina, el polvo para hornear, la cáscara de naranja y la mitad de las nueces en un tazón mediano. Batir la mezcla de leche hasta que quede suave. Agregue los arándanos.<br />
            Rociar una sartén antiadherente con aceite y calentar a fuego medio. Cocine al ras 1/2 taza de medidas de la mezcla, en tandas, durante 2 minutos por cada lado o hasta que estén doradas para hacer 8 panqueques. Repartir entre platos. Cubra con los gajos de naranja, la ricota, el almíbar restante y las nueces.
          </p>
        </div>
        <div className={styles.details_recipe_modal__review}>
          <p className={styles.details_recipe_modal__review_text}>Reseñas</p>
          <div className={styles.details_recipe_modal__review_star}>
            <StarReview amount={4} />
          </div>
        </div>
        <div className={styles.details_recipe_modal__cooking}>
          <p className={styles.details_recipe_modal__cooking_text}>Cocinado antes</p>

          <SwitchField />
        </div>
        <div className={styles.details_recipe_modal__button_content}>
          <button onClick={() => {
            setShowDetailsRecipe(false)
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
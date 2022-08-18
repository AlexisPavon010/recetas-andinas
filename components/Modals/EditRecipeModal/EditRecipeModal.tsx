import classNames from 'classnames';

import styles from 'components/Modals/EditRecipeModal/edit_recipe_modal.module.scss'
import PlusCircleIcon from 'components/Icons/PlusCircleIcon';
import TrashIcon from 'components/Icons/TrashIcon';
import Overlay from 'components/Utils/Overlay';
import SwitchField from 'components/Fields/SwitchField';
import CloseIcon from 'components/Icons/CloseIcon';

interface EditRecipeProps {
  showEditRecipe: boolean;
  setShowEditRecipe: (value: boolean) => void;
}

const EditRecipe = ({ showEditRecipe, setShowEditRecipe }: EditRecipeProps) => {
  const ratings = [1, 2, 3, 4]

  return (
    <>
      <Overlay
        onClick={() => setShowEditRecipe(false)}
        active={showEditRecipe}
      />
      <div className={classNames(
        styles.edit_recipe_modal,
        showEditRecipe && styles['edit_recipe_modal--show'],
      )}>
        <div className={styles.edit_recipe_modal__header}>
          <h3>Editar receta</h3>
          <CloseIcon
            onClick={() => setShowEditRecipe(false)}
          />
        </div>
        <div className={styles.edit_recipe_modal__name}>
          <p className={styles.edit_recipe_modal__name_title}>Recipe name</p>
          <div className={styles.edit_recipe_modal__name_content}>
            <p className={styles.edit_recipe_modal__name_content_title}>Título*</p>
            <input className={styles.edit_recipe_modal__name_content_input} type="text" defaultValue='Melodía de bayas mixtas' />
          </div>
        </div>
        <div className={styles.edit_recipe_modal__ingredients}>
          <p className={styles.edit_recipe_modal__ingredients_text}>Ingredientes</p>
          <div className={styles.edit_recipe_modal__input_group}>
            <span className={styles.edit_recipe_modal__input_group_text}>1</span>
            <input className='input' type="text" defaultValue='1/4 taza de semillas de chía negra' />
            <TrashIcon className={styles.edit_recipe_modal__input_group_icon} />
          </div>
          <div className={styles.edit_recipe_modal__input_group}>
            <span className={styles.edit_recipe_modal__input_group_text}>2</span>
            <input className='input' type="text" defaultValue='2 1/2 tazas de leche de almendras' />
            <TrashIcon className={styles.edit_recipe_modal__input_group_icon} />
          </div>
          <div className={styles.edit_recipe_modal__input_group}>
            <span className={styles.edit_recipe_modal__input_group_text}>3</span>
            <input className='input' type="text" defaultValue='2 naranjas' />
            <TrashIcon className={styles.edit_recipe_modal__input_group_icon} />
          </div>
          <div className={styles.edit_recipe_modal__input_group}>
            <span className={styles.edit_recipe_modal__input_group_text}>4</span>
            <input className='input' type="text" defaultValue='1 1/2 tazas de harina integral simple' />
            <TrashIcon className={styles.edit_recipe_modal__input_group_icon} />
          </div>
          <div className={styles.edit_recipe_modal__input_group}>
            <span className={styles.edit_recipe_modal__input_group_text}>5</span>
            <input className='input' type="text" defaultValue='2 cucharaditas de polvo de hornear' />
            <TrashIcon className={styles.edit_recipe_modal__input_group_icon} />
          </div>
          <div className={styles.edit_recipe_modal__input_group}>
            <span className={styles.edit_recipe_modal__input_group_text}>6</span>
            <input className='input' type="text" defaultValue='1 taza de arándanos frescos o arándanos congelados' />
            <PlusCircleIcon className={styles.edit_recipe_modal__input_group_icon} />
          </div>
        </div>
        <div className={styles.edit_recipe_modal__preparation}>
          <p className={styles.edit_recipe_modal__preparation_title}>Preparación</p>
          <div className={styles.edit_recipe_modal__preparation_box}>
            <span className={styles.edit_recipe_modal__preparation_box_text}>Instrucciones*</span>
            <p className={styles.edit_recipe_modal__preparation_box_description}>
              Combine las semillas de chía, la leche de almendras y 1 cucharada de jarabe de arce en una jarra grande. Deje reposar durante 3-4 minutos o hasta que las semillas se hinchen. Mientras tanto, ralla finamente 1 cucharadita de cáscara de 1 naranja.
              <br />
              Cortar los gajos de ambas naranjas (ver Notas).
              <br />
              Combine la harina, el polvo de hornear, la cáscara de naranja y la mitad de las nueces en un tazón mediano. Batir la mezcla de leche hasta que quede suave. Agregue los arándanos.
              <br />
              Rociar una sartén antiadherente con aceite y calentar a fuego medio. Cocine al ras 1/2 taza de medidas de la mezcla, en tandas, durante 2 minutos por cada lado o hasta que estén doradas para hacer 8 panqueques. Repartir entre platos. Cubra con los gajos de naranja, la ricota, el almíbar restante y las nueces.
            </p>
          </div>
        </div>
        <div className={styles.edit_recipe_modal__recipe_review}>
          <p className={styles.edit_recipe_modal__recipe_review_text}>Reseñas</p>
          <div className={styles.edit_recipe_modal__recipe_review_row}>
            {ratings.map(rate => (
              <div key={rate} className={styles.edit_recipe_modal__recipe_review_input_content}>
                <input className={styles.edit_recipe_modal__recipe_review_input} type="radio" name="rate" id={rate.toString()} />
                <span>{rate}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.edit_recipe_modal__recipe_cooking}>
          <p className={styles.edit_recipe_modal__recipe_cooking_text}>Cocinado antes</p>
          <SwitchField />
        </div>
        <div className={styles.edit_recipe_modal__recipe_button_content}>
          <button onClick={() => setShowEditRecipe(false)} className={styles.edit_recipe_modal__recipe_button_primary}>Cancelar</button>
          <button className={styles.edit_recipe_modal__recipe_button_secondary}>Actualizar</button>
        </div>
      </div>
    </>
  )
}

export default EditRecipe

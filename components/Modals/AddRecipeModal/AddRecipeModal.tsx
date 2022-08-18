import classNames from 'classnames';

import SwitchField from 'components/Fields/SwitchField';
import CloseIcon from 'components/Icons/CloseIcon';
import PlusCircleIcon from 'components/Icons/PlusCircleIcon';
import TrashIcon from 'components/Icons/TrashIcon';
import styles from 'components/Modals/AddRecipeModal/add_recipent_modal.module.scss'
import Overlay from 'components/Utils/Overlay';

interface AddRecipeProps {
  showAddRecipe: boolean;
  setShowAddRecipe: (value: boolean) => void;
}

const AddRecipeModal = ({ showAddRecipe, setShowAddRecipe }: AddRecipeProps) => {
  const ratings = [1, 2, 3, 4]

  return (
    <>
      <Overlay
        onClick={() => setShowAddRecipe(false)}
        active={showAddRecipe}
      />
      <div className={classNames(
        styles.add_recipe_modal,
        showAddRecipe && styles['add_recipe_modal--show'],
      )}>
        <div className={styles.add_recipe_modal__header}>
          <h3>Nueva receta</h3>
          <CloseIcon
            onClick={() => setShowAddRecipe(false)}
          />
        </div>
        <div className={styles.add_recipe_modal__recetas}>
          <p className={styles.add_recipe_modal__title}>Nombre de la receta</p>
          <div className={styles.add_recipe_modal__header_input_content}>
            <p className={styles.add_recipe_modal__header_text}>Título*</p>
            <input className={styles.add_recipe_modal__header_input} type="text" placeholder='P.ej. Olla caliente de carne y arroz en olla de cocción lenta' />
          </div>
        </div>
        <p className={styles.add_recipe_modal__ingredientes}>Ingredientes</p>
        <div className={styles.add_recipe_modal__input_group}>
          <span className={styles.add_recipe_modal__input_group_span}>1</span>
          <input className='input' type="text" placeholder='Tipo de Ingrediente' />
          <TrashIcon className={styles.add_recipe_modal__input_group_icon} />
        </div>
        <div className={styles.add_recipe_modal__input_group}>
          <span className={styles.add_recipe_modal__input_group_span}>2</span>
          <input className='input' type="text" placeholder='Tipo de Ingrediente' />
          <PlusCircleIcon className={styles.add_recipe_modal__input_group_icon} />
        </div>
        <div className={styles.add_recipe_modal__preparations}>
          <p className={styles.add_recipe_modal__preparations_text}>Preparacion</p>
          <div className={styles.add_recipe_modal__preparations_content}>
            <p className={styles.add_recipe_modal__preparations_title}>Instrucciones*</p>
            <input className={styles.add_recipe_modal__preparations_input} type="text" placeholder='Escribe los pasos...' />
          </div>
        </div>
        <div className={styles.add_recipe_modal__review}>
          <p className={styles.add_recipe_modal__review_text}>Reseñas</p>
          <div className={styles.add_recipe_modal__review_row}>
            {ratings.map(rate => (
              <div key={rate} className={styles.add_recipe_modal__review_input_content}>
                <input className={styles.add_recipe_modal__review_input} type="radio" name='rate' id={rate.toString()} />
                <span>{rate}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.add_recipe_modal__cooking}>
          <p className={styles.add_recipe_modal__cooking_text}>Cocinado antes</p>
          <SwitchField />
        </div>
        <div className={styles.add_recipe_modal__button_content}>
          <button className={styles.add_recipe_modal__button}>Crear</button>
        </div>
      </div>
    </>
  )
}

export default AddRecipeModal;


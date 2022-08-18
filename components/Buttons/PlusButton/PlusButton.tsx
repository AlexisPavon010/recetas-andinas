import PlusIcon from 'components/Icons/PlusIcon'

import styles from 'components/Buttons/PlusButton/plus_button.module.scss'

interface PlusButtonProps {
  setShowAddRecipe: (value: any) => void
}

const PlusButton = ({ setShowAddRecipe }: PlusButtonProps) => {
  return (
    <button onClick={() => setShowAddRecipe((state: boolean) => !state)} className={styles.plus_button}>
      <PlusIcon className={styles.plus_button__icon} />
    </button>
  )
}

export default PlusButton;
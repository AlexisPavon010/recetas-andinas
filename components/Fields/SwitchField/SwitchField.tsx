import styles from 'components/Fields/SwitchField/switch_field.module.scss'

interface SwitchFieldProps {
  onChange?: (value: any) => void;
  checked?: boolean;
}

const SwitchField = ({ onChange, checked }: SwitchFieldProps) => {
  return (
    <label className={styles.switch_field}>
      <input className={styles.switch_field__input} onChange={onChange} type="checkbox" checked={checked} />
      <span className={styles.switch_field__icon}></span>
    </label>
  )
}

export default SwitchField
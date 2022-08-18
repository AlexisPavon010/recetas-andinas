import LogoIcon from "components/Icons/LogoIcon"

import styles from 'layouts/MainLayout/components/Header/header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <LogoIcon className={styles.header__logo} />
    </header>
  )
}

export default Header
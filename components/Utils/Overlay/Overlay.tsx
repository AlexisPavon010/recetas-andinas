import classNames from "classnames";

import styles from 'components/Utils/Overlay/overlay.module.scss';

interface OverlayProps {
  onClick: () => void;
  active: boolean;
}

const Overlay = ({ onClick, active }: OverlayProps) => {
  return <div
    onClick={onClick} className={classNames(
      styles.overlay,
      active && styles['overlay--active']
    )}
  />
}

export default Overlay;
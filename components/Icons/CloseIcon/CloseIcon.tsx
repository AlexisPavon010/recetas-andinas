interface CloseIconProps {
  className?: string;
  onClick?: () => void;
}

const CloseIcon = ({ className, onClick }: CloseIconProps) => {
  return (
    <svg className={className} onClick={onClick} xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M20.0303 4.08435C20.3232 4.37912 20.3232 4.85702 20.0303 5.15178L5.03033 20.2475C4.73744 20.5423 4.26256 20.5423 3.96967 20.2475C3.67678 19.9528 3.67678 19.4749 3.96967 19.1801L18.9697 4.08435C19.2626 3.78959 19.7374 3.78959 20.0303 4.08435Z" fill="#19191A" />
      <path fillRule="evenodd" clipRule="evenodd" d="M3.96967 4.08435C4.26256 3.78959 4.73744 3.78959 5.03033 4.08435L20.0303 19.1801C20.3232 19.4749 20.3232 19.9528 20.0303 20.2475C19.7374 20.5423 19.2626 20.5423 18.9697 20.2475L3.96967 5.15178C3.67678 4.85702 3.67678 4.37912 3.96967 4.08435Z" fill="#19191A" />
    </svg>
  )
}

export default CloseIcon;
interface PlusCircleIconProps {
  className?: string;
}

const PlusCircleIcon = ({ className }: PlusCircleIconProps) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 26" fill="none">
      <path d="M12 8.53085V17.5883" stroke="#8DC63F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.5 13.0596H16.5" stroke="#8DC63F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path fillRule="evenodd" clipRule="evenodd" d="M12 24.3814C18.2132 24.3814 23.25 19.3124 23.25 13.0596C23.25 6.80671 18.2132 1.73776 12 1.73776C5.7868 1.73776 0.75 6.80671 0.75 13.0596C0.75 19.3124 5.7868 24.3814 12 24.3814Z" stroke="#8DC63F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default PlusCircleIcon;
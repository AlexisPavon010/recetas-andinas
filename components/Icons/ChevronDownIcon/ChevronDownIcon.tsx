interface ChevronDownIconProps {
  className?: string;
}

const ChevronDownIcon = ({ className }: ChevronDownIconProps) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 9" fill="none">
      <path d="M15.5 0.873993L8.35333 8.01999C8.25967 8.11379 8.13255 8.16649 8 8.16649C7.86745 8.16649 7.74033 8.11379 7.64667 8.01999L0.5 0.873993" stroke="#1E3646" strokeLinejoin="round" />
    </svg>
  )
}

export default ChevronDownIcon;
interface PlusIconProps {
  className?: string;
}

const PlusIcon = ({ className }: PlusIconProps) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86 86">
      <path fillRule="evenodd" clipRule="evenodd" d="M31 43C31 42.5858 31.3358 42.25 31.75 42.25H54.25C54.6642 42.25 55 42.5858 55 43C55 43.4142 54.6642 43.75 54.25 43.75H31.75C31.3358 43.75 31 43.4142 31 43Z" />
      <path fillRule="evenodd" clipRule="evenodd" d="M43 31C43.4142 31 43.75 31.3358 43.75 31.75V54.25C43.75 54.6642 43.4142 55 43 55C42.5858 55 42.25 54.6642 42.25 54.25V31.75C42.25 31.3358 42.5858 31 43 31Z" />
    </svg>
  )
}

export default PlusIcon;
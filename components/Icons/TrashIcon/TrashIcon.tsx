interface TrashIconProps {
  className?: string;
}

const TrashIcon = ({ className }: TrashIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none" className={className}>
      <path d="M2.19971 5.29471H23.3355" stroke="#F7941D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path fillRule="evenodd" clipRule="evenodd" d="M15.032 2.29681H10.5029C9.66908 2.29681 8.99316 2.96791 8.99316 3.79576V5.2947H16.5417V3.79576C16.5417 2.96791 15.8657 2.29681 15.032 2.29681Z" stroke="#F7941D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.5029 18.0357V10.541" stroke="#F7941D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.0322 18.0357V10.541" stroke="#F7941D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path fillRule="evenodd" clipRule="evenodd" d="M19.6771 21.907C19.6121 22.6842 18.9579 23.2821 18.1724 23.282H7.36398C6.57853 23.2821 5.92425 22.6842 5.85932 21.907L4.46436 5.29471H21.071L19.6771 21.907Z" stroke="#F7941D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default TrashIcon;
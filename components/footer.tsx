import SocialIcon from './social-icon'

const Footer = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <div>
        <SocialIcon iconName={'github'}></SocialIcon>
        <SocialIcon iconName={'twitter'}></SocialIcon>
        <SocialIcon iconName={'email'}></SocialIcon>
      </div>
    </footer>
  )
}

export default Footer

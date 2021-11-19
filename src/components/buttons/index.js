import React from 'react'
import SocialMediaButtons from 'react-social-media-buttons'

const Buttons = () => {
  const links = [
    'https://www.linkedin.com/company/ravnhq/mycompany/',
    'https://www.facebook.com/ravnhq',
    'https://twitter.com/RavnDevelopment?s=20',
  ]

  const buttonStyle = {
    backgroundColor: '#000000',
    borderRadius: '50%',
  }

  const iconStyle = { color: '#ffffff' }

  return <SocialMediaButtons links={links} buttonStyle={buttonStyle} iconStyle={iconStyle} />
}

export default Buttons

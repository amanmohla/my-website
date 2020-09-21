/** @jsx jsx */
import { Avatar as TUIAvatar, jsx } from 'theme-ui'

type Props = {
  name?: string
  picture: string
}

const Avatar = ({ name, picture }: Props) => {
  return (
    <TUIAvatar src={picture} alt={name} />
  )
}

export default Avatar

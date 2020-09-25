/** @jsx jsx */
import { Avatar as TUIAvatar, jsx } from 'theme-ui';

type AvatarProps = {
    name?: string;
    picture: string;
};

const Avatar: React.FC<AvatarProps> = ({ name, picture }: AvatarProps) => (
    <TUIAvatar src={picture} alt={name} />
);

export default Avatar;

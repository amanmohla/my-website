import { Avatar as TUIAvatar } from 'theme-ui';

type AvatarProps = {
    name?: string;
    picture: string;
};

const Avatar: React.FC<AvatarProps> = ({ name, picture }: AvatarProps) => (
    <TUIAvatar src={picture} alt={name} />
);

export default Avatar;

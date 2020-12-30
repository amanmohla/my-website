import { Image } from '@chakra-ui/react';

type AvatarProps = {
    name?: string;
    picture: string;
    size: string;
};

const Avatar: React.FC<AvatarProps> = ({
    name,
    picture,
    size,
}: AvatarProps) => (
    <Image
        boxSize={size}
        objectFit="cover"
        src={picture}
        alt={name}
        borderRadius="full"
    />
);

export default Avatar;

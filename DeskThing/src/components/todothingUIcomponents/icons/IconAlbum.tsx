
import { IconAlbum } from '@spotify-internal/encore-web';
import { IconSize } from '@spotify-internal/encore-web/types/src/core/components/Icon/Svg';

interface Props {
    className?: string;
    iconSize: number;
}

const SpotifyIconAlbum = ({ className, iconSize }: Props) => (
    <IconAlbum
        className={className}
        iconSize={iconSize as IconSize} 
        />
);

export default SpotifyIconAlbum;
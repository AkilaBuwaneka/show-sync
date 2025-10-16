import { Artist } from '@/types';
import Button from './Button';

interface ArtistCardProps {
  artist: Artist;
  onSelect?: (artist: Artist) => void;
  isSelected?: boolean;
}

export default function ArtistCard({ artist, onSelect, isSelected }: ArtistCardProps) {
  const getAvailabilityColor = (availability: Artist['availability']) => {
    switch (availability) {
      case 'available':
        return 'bg-green-100 text-green-800';
      case 'busy':
        return 'bg-yellow-100 text-yellow-800';
      case 'unavailable':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg ${isSelected ? 'ring-2 ring-orange-500' : ''}`}>
      <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
        <div className="text-white text-6xl font-bold">
          {artist.name.charAt(0)}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{artist.name}</h3>
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getAvailabilityColor(artist.availability)}`}>
            {artist.availability}
          </span>
        </div>
        <p className="text-sm text-gray-600 mb-2">{artist.genre}</p>
        {artist.bio && (
          <p className="text-sm text-gray-500 mb-3 line-clamp-2">{artist.bio}</p>
        )}
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg font-bold text-gray-900">{formatPrice(artist.price)}</span>
          {artist.rating && (
            <div className="flex items-center">
              <span className="text-yellow-400">★</span>
              <span className="text-sm text-gray-600 ml-1">{artist.rating}</span>
            </div>
          )}
        </div>
        {artist.location && (
          <p className="text-sm text-gray-500 mb-4">📍 {artist.location}</p>
        )}
        {onSelect && (
          <Button
            onClick={() => onSelect(artist)}
            variant={isSelected ? 'secondary' : 'primary'}
            className="w-full"
            disabled={artist.availability === 'unavailable'}
          >
            {isSelected ? 'Selected' : 'Select Artist'}
          </Button>
        )}
      </div>
    </div>
  );
}
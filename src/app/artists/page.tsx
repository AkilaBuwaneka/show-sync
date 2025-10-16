'use client';

import { useState } from 'react';
import { mockArtists } from '@/data/mockArtists';
import ArtistCard from '@/components/ui/ArtistCard';
import { Artist } from '@/types';

const genres = ['All', 'Indie Rock', 'Electronic', 'Jazz', 'Folk', 'Synthwave', 'Blues', 'Alternative', 'World Music'];
const availabilityOptions = ['All', 'Available', 'Busy', 'Unavailable'];

export default function Artists() {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedAvailability, setSelectedAvailability] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArtists = mockArtists.filter((artist) => {
    const matchesGenre = selectedGenre === 'All' || artist.genre === selectedGenre;
    const matchesAvailability = selectedAvailability === 'All' || 
      artist.availability.toLowerCase() === selectedAvailability.toLowerCase();
    const matchesSearch = artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artist.genre.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesGenre && matchesAvailability && matchesSearch;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Discover Amazing Artists
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Browse our curated selection of talented performers
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                Search Artists
              </label>
              <input
                type="text"
                id="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name or genre..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            {/* Genre Filter */}
            <div>
              <label htmlFor="genre" className="block text-sm font-medium text-gray-700 mb-2">
                Genre
              </label>
              <select
                id="genre"
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              >
                {genres.map((genre) => (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>
            </div>

            {/* Availability Filter */}
            <div>
              <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                Availability
              </label>
              <select
                id="availability"
                value={selectedAvailability}
                onChange={(e) => setSelectedAvailability(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              >
                {availabilityOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-sm text-gray-600">
            Showing {filteredArtists.length} of {mockArtists.length} artists
          </p>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>

        {/* No results message */}
        {filteredArtists.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎭</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No artists found</h3>
            <p className="text-gray-500">
              Try adjusting your filters or search terms to find what you&apos;re looking for.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
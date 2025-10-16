export interface Artist {
  id: string;
  name: string;
  genre: string;
  price: number;
  availability: 'available' | 'busy' | 'unavailable';
  image?: string;
  bio?: string;
  location?: string;
  rating?: number;
  yearsActive?: number;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  venue: string;
  artistIds: string[];
  budget: number;
  status: 'draft' | 'published' | 'completed';
  createdBy: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'organizer' | 'artist' | 'admin';
  createdAt: string;
}

export interface EventCreatorFormData {
  title: string;
  description: string;
  date: string;
  venue: string;
  budget: number;
  selectedArtists: string[];
}
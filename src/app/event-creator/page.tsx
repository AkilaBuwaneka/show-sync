'use client';

import { useState } from 'react';
import { mockArtists } from '@/data/mockArtists';
import ArtistCard from '@/components/ui/ArtistCard';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { Artist, EventCreatorFormData } from '@/types';

export default function EventCreator() {
  const [formData, setFormData] = useState<EventCreatorFormData>({
    title: '',
    description: '',
    date: '',
    venue: '',
    budget: 0,
    selectedArtists: [],
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: keyof EventCreatorFormData, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleArtistSelect = (artist: Artist) => {
    if (artist.availability === 'unavailable') return;
    
    setFormData(prev => ({
      ...prev,
      selectedArtists: prev.selectedArtists.includes(artist.id)
        ? prev.selectedArtists.filter(id => id !== artist.id)
        : [...prev.selectedArtists, artist.id]
    }));
  };

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.title.trim()) newErrors.title = 'Event title is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.date) newErrors.date = 'Event date is required';
    if (!formData.venue.trim()) newErrors.venue = 'Venue is required';
    if (formData.budget <= 0) newErrors.budget = 'Budget must be greater than 0';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    if (formData.selectedArtists.length === 0) {
      setErrors({ artists: 'Please select at least one artist' });
      return false;
    }
    setErrors({});
    return true;
  };

  const handleNext = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
    } else if (currentStep === 2 && validateStep2()) {
      setCurrentStep(3);
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = () => {
    // In a real app, this would submit to an API
    alert('Event created successfully! (This is just a demo)');
    // Reset form
    setFormData({
      title: '',
      description: '',
      date: '',
      venue: '',
      budget: 0,
      selectedArtists: [],
    });
    setCurrentStep(1);
  };

  const selectedArtistObjects = mockArtists.filter(artist => 
    formData.selectedArtists.includes(artist.id)
  );

  const totalCost = selectedArtistObjects.reduce((sum, artist) => sum + artist.price, 0);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Create Your Event
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Plan your perfect show in just a few steps
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`
                  flex items-center justify-center w-8 h-8 rounded-full border-2 
                  ${currentStep >= step 
                    ? 'bg-orange-600 border-orange-600 text-white' 
                    : 'bg-white border-gray-300 text-gray-500'
                  }
                `}>
                  {step}
                </div>
                {step < 3 && (
                  <div className={`
                    w-12 h-0.5 mx-4 
                    ${currentStep > step ? 'bg-orange-600' : 'bg-gray-300'}
                  `} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-2">
            <div className="flex space-x-16 text-sm text-gray-600">
              <span className={currentStep >= 1 ? 'text-orange-600 font-medium' : ''}>
                Event Details
              </span>
              <span className={currentStep >= 2 ? 'text-orange-600 font-medium' : ''}>
                Select Artists
              </span>
              <span className={currentStep >= 3 ? 'text-orange-600 font-medium' : ''}>
                Review & Submit
              </span>
            </div>
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          {/* Step 1: Event Details */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Event Details</h2>
              
              <Input
                label="Event Title"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                error={errors.title}
                placeholder="Enter your event title"
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={4}
                  className={`block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 ${
                    errors.description ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Describe your event..."
                />
                {errors.description && (
                  <p className="mt-1 text-sm text-red-600">{errors.description}</p>
                )}
              </div>

              <Input
                label="Event Date"
                type="date"
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                error={errors.date}
              />

              <Input
                label="Venue"
                value={formData.venue}
                onChange={(e) => handleInputChange('venue', e.target.value)}
                error={errors.venue}
                placeholder="Enter venue name"
              />

              <Input
                label="Budget ($)"
                type="number"
                value={formData.budget}
                onChange={(e) => handleInputChange('budget', Number(e.target.value))}
                error={errors.budget}
                placeholder="Enter your budget"
              />

              <div className="flex justify-end">
                <Button onClick={handleNext}>
                  Next Step
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Select Artists */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-900">Select Artists</h2>
                <div className="text-sm text-gray-600">
                  Budget: ${formData.budget.toLocaleString()} | 
                  Selected: ${totalCost.toLocaleString()} | 
                  Remaining: ${(formData.budget - totalCost).toLocaleString()}
                </div>
              </div>

              {errors.artists && (
                <p className="text-sm text-red-600">{errors.artists}</p>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {mockArtists.map((artist) => (
                  <ArtistCard
                    key={artist.id}
                    artist={artist}
                    onSelect={handleArtistSelect}
                    isSelected={formData.selectedArtists.includes(artist.id)}
                  />
                ))}
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={handleBack}>
                  Back
                </Button>
                <Button onClick={handleNext}>
                  Review Event
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Review & Submit */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Review Your Event</h2>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Event Details</h3>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  <div>
                    <dt className="font-medium text-gray-500">Title:</dt>
                    <dd className="text-gray-900">{formData.title}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-500">Date:</dt>
                    <dd className="text-gray-900">{formData.date}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-500">Venue:</dt>
                    <dd className="text-gray-900">{formData.venue}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-500">Budget:</dt>
                    <dd className="text-gray-900">${formData.budget.toLocaleString()}</dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="font-medium text-gray-500">Description:</dt>
                    <dd className="text-gray-900">{formData.description}</dd>
                  </div>
                </dl>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">Selected Artists</h3>
                <div className="space-y-2">
                  {selectedArtistObjects.map((artist) => (
                    <div key={artist.id} className="flex justify-between text-sm">
                      <span>{artist.name} ({artist.genre})</span>
                      <span>${artist.price.toLocaleString()}</span>
                    </div>
                  ))}
                  <div className="border-t pt-2 font-medium">
                    <div className="flex justify-between">
                      <span>Total Cost:</span>
                      <span>${totalCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-green-600">
                      <span>Remaining Budget:</span>
                      <span>${(formData.budget - totalCost).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={handleBack}>
                  Back
                </Button>
                <Button onClick={handleSubmit}>
                  Create Event
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Connect with</span>{' '}
                  <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent xl:inline">amazing artists</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  ShowSync brings together talented artists and event organizers to create unforgettable experiences. 
                  Find the perfect performer for your event or showcase your talent to the world.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link href="/artists">
                      <Button size="lg" className="w-full">
                        Browse Artists
                      </Button>
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link href="/event-creator">
                      <Button variant="outline" size="lg" className="w-full">
                        Create Event
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="h-56 w-full bg-gradient-to-br from-orange-400 to-orange-600 sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center">
            <div className="text-white text-8xl font-bold opacity-20">🎵</div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-orange-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to organize amazing shows
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our platform simplifies the process of connecting artists with event organizers, 
              making it easier than ever to create memorable experiences.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                  �
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Diverse Artists</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Discover artists from various genres and backgrounds, each bringing their unique style and energy.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                  �
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Easy Scheduling</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Check real-time availability and book artists seamlessly with our integrated scheduling system.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  💼
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Professional Management</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Manage your events, contracts, and communications all in one place with professional tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-indigo-600">Join ShowSync today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link href="/auth/register">
                <Button size="lg">
                  Get started
                </Button>
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link href="/artists">
                <Button variant="outline" size="lg">
                  Learn more
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
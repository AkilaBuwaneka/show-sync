import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-white to-orange-50/30">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Connect with</span>{' '}
                  <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent xl:inline">Amazing Artists</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  ShowSync brings together talented artists and event organizers to create unforgettable experiences. 
                  Find the perfect performer for your event or showcase your talent to the world.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-4">
                  <div className="rounded-md shadow-lg">
                    <Link href="/artists">
                      <Button size="lg" className="w-full">
                        Browse Artists
                      </Button>
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0">
                    <Link href="/event-creator">
                      <Button variant="outline" size="lg" className="w-full">
                        Create Event
                      </Button>
                    </Link>
                  </div>
                </div>
                
                {/* Stats */}
                <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-6">
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-orange-600">500+</div>
                    <div className="text-xs sm:text-sm text-gray-500 mt-1">Artists</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-orange-600">1000+</div>
                    <div className="text-xs sm:text-sm text-gray-500 mt-1">Events</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-orange-600">50+</div>
                    <div className="text-xs sm:text-sm text-gray-500 mt-1">Cities</div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full relative">
            <Image
              src="/images/beautiful-shot-live-concert-performance-with-yellow-light-show-big-crowd-cheering.jpg"
              alt="Live concert performance"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent lg:via-transparent"></div>
          </div>
        </div>
      </div>

      {/* Featured Section with Image */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/musician-playing-electronic-piano-studio.jpg"
                alt="Musician playing piano"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-base text-orange-600 font-semibold tracking-wide uppercase">For Artists</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Showcase Your Talent
              </p>
              <p className="mt-4 text-lg text-gray-500">
                Join our platform and get discovered by event organizers looking for talented performers. 
                Create your profile, manage your bookings, and grow your career.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-md bg-orange-500 text-white">
                      ✓
                    </div>
                  </div>
                  <p className="ml-3 text-base text-gray-700">
                    Create a stunning portfolio with photos, videos, and music samples
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-md bg-orange-500 text-white">
                      ✓
                    </div>
                  </div>
                  <p className="ml-3 text-base text-gray-700">
                    Manage your availability and bookings in one place
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-md bg-orange-500 text-white">
                      ✓
                    </div>
                  </div>
                  <p className="ml-3 text-base text-gray-700">
                    Connect with event organizers and venues directly
                  </p>
                </li>
              </ul>
              <div className="mt-8">
                <Link href="/auth/register">
                  <Button size="lg">Join as Artist</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gradient-to-b from-orange-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-orange-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything You Need to Organize Amazing Shows
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our platform simplifies the process of connecting artists with event organizers, 
              making it easier than ever to create memorable experiences.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-orange-100">
                <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 text-white text-2xl mb-4">
                  🎤
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Diverse Artists</h3>
                <p className="text-gray-500">
                  Discover artists from various genres and backgrounds, each bringing their unique style and energy to your events.
                </p>
              </div>

              <div className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-orange-100">
                <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 text-white text-2xl mb-4">
                  📅
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Easy Scheduling</h3>
                <p className="text-gray-500">
                  Check real-time availability and book artists seamlessly with our integrated scheduling system.
                </p>
              </div>

              <div className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-orange-100">
                <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 text-white text-2xl mb-4">
                  💼
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Management</h3>
                <p className="text-gray-500">
                  Manage your events, contracts, and communications all in one place with professional tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* For Event Organizers Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-base text-orange-600 font-semibold tracking-wide uppercase">For Event Organizers</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Find the Perfect Artist
              </p>
              <p className="mt-4 text-lg text-gray-500">
                Browse through hundreds of talented artists and find the perfect match for your event. 
                From intimate gatherings to large-scale concerts, we've got you covered.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-md bg-orange-500 text-white">
                      ✓
                    </div>
                  </div>
                  <p className="ml-3 text-base text-gray-700">
                    Search and filter artists by genre, location, and availability
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-md bg-orange-500 text-white">
                      ✓
                    </div>
                  </div>
                  <p className="ml-3 text-base text-gray-700">
                    Review portfolios, ratings, and past performances
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-md bg-orange-500 text-white">
                      ✓
                    </div>
                  </div>
                  <p className="ml-3 text-base text-gray-700">
                    Book instantly and manage all your events in one dashboard
                  </p>
                </li>
              </ul>
              <div className="mt-8">
                <Link href="/artists">
                  <Button size="lg">Browse Artists</Button>
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/music.jpg"
                alt="Music performance"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-20 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-orange-100">Join ShowSync today and make your event unforgettable.</span>
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 lg:mt-0 lg:flex-shrink-0">
            <Link href="/auth/register">
              <Button size="lg" className="w-full sm:w-auto bg-white text-orange-600 hover:bg-orange-50">
                Get Started Free
              </Button>
            </Link>
            <Link href="/artists">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-orange-700">
                Explore Artists
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
import HomeLinks from '@/app/ui/HomeLinks';

export default function NavBar() {
  return (
    <div className="flex w-full flex-wrap items-center justify-between px-4 py-4 text-lg text-gray-700 md:py-0">
      <div className="hidden w-full md:flex md:w-auto md:items-center">
        <HomeLinks />
      </div>
    </div>
  );
}

import HomeLinks from '@/app/components/global/HomeLinks';

export default function NavBar() {
  return (
    <div className="text- text-offWhite flex w-full flex-wrap items-center justify-between bg-transparent px-4 py-4 text-lg md:py-0">
      <div className="hidden w-full md:flex md:w-auto md:items-center">
        <HomeLinks />
      </div>
    </div>
  );
}

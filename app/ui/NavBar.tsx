import HomeLinks from '@/app/ui/HomeLinks';

export default function NavBar() {
  return (
    <>
      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-4">
          <HomeLinks />
        </div>
      </div>
    </>
  );
}

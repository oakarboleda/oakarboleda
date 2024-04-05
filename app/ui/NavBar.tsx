import HomeLinks from "@/app/ui/HomeLinks";

export default function NavBar() {
  return (
      <div className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700">
        <div className="hidden w-full md:flex md:items-center md:w-auto">
          <HomeLinks />
        </div>
      </div>
  );
}

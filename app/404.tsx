export default function Custom404() {
  return (
    <main className="page flex min-h-screen w-full items-center justify-center py-8 text-gray-900 md:py-16 ">
      <div className="md:px-18 relative flex w-full flex-col items-center gap-8 px-8 md:gap-16 xl:px-40">
        <h1 className="w-full select-none text-center text-9xl  font-black text-gray-400  md:text-[300px]">
          404
        </h1>
        <p className="text-3xl font-bold capitalize">
          You have discovered a secret place
        </p>
        <p className="text-dull break-words text-2xl font-medium">
          Unfortunately, this is only a 404 page. You may have mistyped the
          address, or the page has been moved to another URL.
        </p>
        <div className="flex w-full flex-col justify-between gap-8 md:flex-row md:gap-32 xl:px-16">
          <a
            tw="/home"
            className="flex w-full items-center justify-center gap-4 rounded border-2 border-blue-500 p-3 font-semibold capitalize shadow-lg hover:scale-105 hover:bg-blue-500 hover:shadow-xl focus:outline-none active:scale-90 md:w-fit md:p-6 "
          >
            <span className="material-symbols-outlined rotate-180">
              arrow_right_alt
            </span>
            Go back to Previous Page
          </a>
          <a
            tw="/home"
            className="group flex w-full items-center justify-center gap-4 rounded border-2 border-green-500 p-3 font-semibold capitalize shadow-lg hover:scale-105 hover:bg-green-500 hover:shadow-xl focus:outline-none active:scale-90 md:w-fit md:p-6 "
          >
            <span className="material-symbols-outlined">home</span>
            Go back to Home Page
          </a>
        </div>
      </div>
    </main>
  );
}

export default function About() {
  return (
    <>
      <div id="about" className="relative mt-16 overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
            <svg
              className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100"></polygon>
            </svg>

            <div className="pt-1"></div>

            <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h2 className="my-6 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
                  About me
                </h2>

                <p>
                  Donec porttitor, enim ut dapibus lobortis, lectus sem
                  tincidunt dui, eget ornare lectus ex non libero. Nam rhoncus
                  diam ultrices porttitor laoreet. Ut mollis fermentum ex, vel
                  viverra lorem volutpat sodales. In ornare porttitor odio sit
                  amet laoreet. Sed laoreet, nulla a posuere ultrices, purus
                  nulla tristique turpis, hendrerit rutrum augue quam ut est.
                  Fusce malesuada posuere libero, vitae dapibus eros facilisis
                  euismod. Sed sed lobortis justo, ut tincidunt velit. Mauris in
                  maximus eros.
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"></div>
      </div>
    </>
  );
}

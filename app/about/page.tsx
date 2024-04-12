'use client'

import dynamic from 'next/dynamic'

const About = dynamic(() => import('@/components/canvas/Sections').then((mod) => mod.About), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='flex h-96 w-full flex-col items-center justify-center'>
      <svg className='-ml-1 mr-3 size-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </div>
  ),
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function Page() {
  return (
    <>
      <div className="w-full grid grid-cols-12 overflow-y-auto" >

        <div className="col-span-12 px-3 md:lg:xl:px-10 py-3 md:lg:xl:py-10">
          <p className='uppercase'>i wear multiple caps</p>
          <h1 className='my-4 text-5xl font-bold leading-tight'>About Me</h1>
          <p className='=leading-normal'>my friend call me Moji ( just like E-Moji )</p>
        </div>

        <div className="col-span-12 sm:col-span-4">
          <img src='/moji-as-monster.webp' alt={''} />
        </div>

        <div className="w-full col-span-12 px-3 md:lg:xl:px-10 py-3 md:lg:xl:py-10 sm:col-span-7">
          <p>Hi there! I&apos;m Mojtaba Norouzi Zadeh (MNZ)
            <br></br><b><em>as a Creative Designer, I&apos;m the problem spotter & the problem solver</em></b></p>
          <p className='my-2 py-3 leading-tight'>If I try to describe myself with words, I can say:<br></br>
            <em>lifelong learner, </em>thinker, <em>reading,</em> designing, <em>editing,</em> creating, <em>imgning,</em> and playing around.
            <br></br>When not working, I like to teaching people or try some inventions, be in nature, ride  a bicycle, climbing, listening to music & gettin caught in the rain.</p>
          <p></p>
          <p>Most people know me as a person-to-go when they need ideas or stuck in problems...</p>
          <p>I vigorously try for value <b>team collaboration,</b> performance in design and <b>business growth.</b> cause I think that I will grow when helping others to grow and I believe in <em>&quot;share to get&quot;.</em></p>
          <br></br><img className='rounded' src='/moji-desk.jpg' alt={''} />

        </div>

        <div className="col-span-12 px-3 -mt-4 sm:px-35 md:px-35 lg:px-50 xl:px-60">

          <em>I unpack complicated problems by approaching each with the flexible process and attention it deserves. </em>This means that I work with others to ask questions, define approaches and execute solutions comprising:
          <br></br>Strategy Designing
          <br></br>Information Architecture
          <br></br>User Experience & Interface Design (UX/UI)
          <br></br>Visual Design
          <br></br>Product Managing...
          <p>I&apos;m a selflearner Designer. Also, I have a bachelors in electronics & master in IT</p>
          I work with this techs (software) & teach others too:

        </div>

        <div className="col-span-12 px-2 lg:px-44 xl:px-44 max-w-6xl text-gray-500">

          <div className="relative w-fit h-fit sm:mx-auto overflow-x-auto">

            <div className="mb-2 flex w-fit mx-auto gap-2">

              <div className="border flex relative *:relative *: size-16 p-2 rounded-xl dark:bg-gray-650 dark:border-white/15 before:rounded-[11px] before:absolute before:inset-0 before:border-t before:border-white before:from-gray-600 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-650">
                <img src="/brands/3d/blender-2.svg" alt={''} />
              </div>

              <div className="border flex relative *:relative *: size-16 p-2 rounded-xl dark:bg-gray-650 dark:border-white/15 before:rounded-[11px] before:absolute before:inset-0 before:border-t before:border-white before:from-gray-600 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-650">
                <img src="/brands/3d/rhino-logo.webp" alt={''} />
              </div>

              <div className="border flex relative *:relative *: size-16 p-2 rounded-xl dark:bg-gray-650 dark:border-white/15 before:rounded-[11px] before:absolute before:inset-0 before:border-t before:border-white before:from-gray-600 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-650">
                <img src="/brands/3d/KeyShot-RGB.webp" alt={''} />
              </div>

              <div className="border flex relative *:relative *: size-16 p-2 rounded-xl dark:bg-gray-650 dark:border-white/15 before:rounded-[11px] before:absolute before:inset-0 before:border-t before:border-white before:from-gray-600 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-650">
                <img src="/brands/3d/v-ray.svg" alt={''} />
              </div>

            </div>

            <div className="flex mb-2 w-fit mx-auto gap-1">
              <div className="border flex relative *:relative *: size-16 rounded-xl before:rounded-[11px] before:absolute before:inset-0 before:border-t ">
                <img src="/brands/adobe/after-effects-1.svg" alt={''} />
              </div>
              <div className="border flex relative *:relative *: size-16 rounded-xl before:rounded-[11px] before:absolute before:inset-0 before:border-t ">
                <img src="/brands/adobe/adobe-photoshop-2.svg" alt={''} />
              </div>
              <div className="border flex relative *:relative *: size-16 rounded-xl before:rounded-[11px] before:absolute before:inset-0 before:border-t ">
                <img src="/brands/adobe/adobe-indesign-cc-icon.svg" alt={''} />
              </div>
            </div>

            <div className="flex w-fit mb-2 mx-auto gap-1">
              <div className="border flex relative *:relative *: size-16 p-2 rounded-xl dark:bg-gray-650 dark:border-white/15 before:rounded-[11px] before:absolute before:inset-0 before:border-t before:border-white before:from-gray-600 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-650">
                <img src="/brands/web/react-2.svg" alt={''} />
              </div>
              <div className="border flex relative *:relative *: size-16 p-2 rounded-xl dark:bg-gray-650 dark:border-white/15 before:rounded-[11px] before:absolute before:inset-0 before:border-t before:border-white before:from-gray-600 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-650">
                <img src="/brands/web/threejs-1.svg" alt={''} />
              </div>
              <div className="border flex relative *:relative *: size-16 p-2 rounded-xl dark:bg-gray-650 dark:border-white/15 before:rounded-[11px] before:absolute before:inset-0 before:border-t before:border-white before:from-gray-600 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-650">
                <img src="/brands/web/bootstrap-5-1.svg" alt={''} />
              </div>
              <div className="border flex relative *:relative *: size-16 p-2 rounded-xl dark:bg-gray-650 dark:border-white/15 before:rounded-[11px] before:absolute before:inset-0 before:border-t before:border-white before:from-gray-600 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-650">
                <img src="/brands/web/nodejs-icon.svg" alt={''} />
              </div>
            </div>

            <div className="flex w-fit mx-auto gap-1">
              <div className="border flex relative *:relative *: size-16 p-2 rounded-xl dark:bg-gray-650 dark:border-white/15 before:rounded-[11px] before:absolute before:inset-0 before:border-t before:border-white before:from-gray-600 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-650">
                <img src="/brands/uiux/figma-5.svg" alt={''} />
              </div>
              <div className="border flex relative *:relative *: size-16 p-2 rounded-xl dark:bg-gray-650 dark:border-white/15 before:rounded-[11px] before:absolute before:inset-0 before:border-t before:border-white before:from-gray-600 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-650">
                <img src="/brands/uiux/adobe-xd-2.svg" alt={''} />
              </div>
              <div className="border flex relative *:relative *: size-16 p-2 rounded-xl dark:bg-gray-650 dark:border-white/15 before:rounded-[11px] before:absolute before:inset-0 before:border-t before:border-white before:from-gray-600 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-650">
                <img src="/brands/vector/adobe-illustrator-cc-icon.svg" alt={''} />
              </div>
              <div className="border flex relative *:relative *: size-16 p-2 rounded-xl dark:bg-gray-650 dark:border-white/15 before:rounded-[11px] before:absolute before:inset-0 before:border-t before:border-white before:from-gray-600 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-650">
                <img src="/brands/vector/inkscape-logo.svg" alt={''} />
              </div>
            </div>

            <div className="mt-2 flex w-fit mx-auto gap-1">
              <div className="border flex relative *:relative *: size-16 p-2 rounded-xl dark:bg-gray-650 dark:border-white/15 before:rounded-[11px] before:absolute before:inset-0 before:border-t before:border-white before:from-gray-600 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-650">
                <img src="/brands/general/github-seeklogo.svg" alt={''} />
              </div>
              <div className="border flex relative *:relative *: size-16 p-2 rounded-xl dark:bg-gray-650 dark:border-white/15 before:rounded-[11px] before:absolute before:inset-0 before:border-t before:border-white before:from-gray-600 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-650">
                <img src="/brands/general/office-2.svg" alt={''} />
              </div>
              <div className="border flex relative *:relative *: size-16 p-2 rounded-xl dark:bg-gray-650 dark:border-white/15 before:rounded-[11px] before:absolute before:inset-0 before:border-t before:border-white before:from-gray-600 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-650">
                <img src="/brands/general/trello_icon.svg" alt={''} />
              </div>
            </div>

            <div className="my-2 flex w-fit mx-auto gap-1">
              <div className="border flex relative *:relative *: size-16 p-2 rounded-xl dark:bg-gray-650 dark:border-white/15 before:rounded-[11px] before:absolute before:inset-0 before:border-t before:border-white before:from-gray-600 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-650">
                <img src="/brands/ai/ComfyUI.png" alt={''} />
              </div>
              <div className="border flex relative *:relative *: size-16 p-2 rounded-xl dark:bg-gray-650 dark:border-white/15 before:rounded-[11px] before:absolute before:inset-0 before:border-t before:border-white before:from-gray-600 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-650">
                <img src="/brands/ai/bing-2.svg" alt={''} />
              </div>
              <div className="border flex relative *:relative *: size-16 p-2 rounded-xl dark:bg-gray-650 dark:border-white/15 before:rounded-[11px] before:absolute before:inset-0 before:border-t before:border-white before:from-gray-600 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-650">
                <img src="/brands/ai/openai-wordmark.svg" alt={''} />
              </div>
              {/* <div className="border flex relative *:relative *: size-16 p-2 rounded-xl dark:bg-gray-650 dark:border-white/15 before:rounded-[11px] before:absolute before:inset-0 before:border-t before:border-white before:from-gray-600 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-650">
                <img src="/brands/ai/logo_white.webp" alt='Open Art' />
              </div> */}
              <div className="border flex relative *:relative *: size-16 p-0 rounded-xl dark:bg-gray-650 dark:border-white/15 before:rounded-[11px] before:absolute before:inset-0 before:border-t before:border-white before:from-gray-600 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-650">
                <img src="/brands/ai/A111.webp" alt={''} />
              </div>
            </div>

            <div className="mt-2 flex w-fit mx-auto gap-1">
              <div className="border flex relative *:relative *: size-16 p-2 rounded-xl dark:bg-gray-650 dark:border-white/15 before:rounded-[11px] before:absolute before:inset-0 before:border-t before:border-white before:from-gray-600 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-650">
                <img src="/brands/cms/wordpress-icon.svg" alt={''} />
              </div>
              <div className="border flex relative *:relative *: size-16 p-2 rounded-xl dark:bg-gray-650 dark:border-white/15 before:rounded-[11px] before:absolute before:inset-0 before:border-t before:border-white before:from-gray-600 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-650">
                <img src="/brands/cms/shopify.svg" alt={''} />
              </div>
              <div className="border flex relative *:relative *: size-16 p-2 rounded-xl dark:bg-gray-650 dark:border-white/15 before:rounded-[11px] before:absolute before:inset-0 before:border-t before:border-white before:from-gray-600 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-650">
                <img src="/brands/cms/drupal-4.svg" alt={''} />
              </div>
            </div>

            <div className="mt-2 flex w-fit mx-auto gap-1">
              <div className="border flex relative *:relative *: size-16 p-2 rounded-xl dark:bg-gray-650 dark:border-white/15 before:rounded-[11px] before:absolute before:inset-0 before:border-t before:border-white before:from-gray-600 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-650">
                <img src="/brands/crypto/bitcoin.svg" alt={''} />
              </div>
              <div className="border flex relative *:relative *: size-16 p-2 rounded-xl dark:bg-gray-650 dark:border-white/15 before:rounded-[11px] before:absolute before:inset-0 before:border-t before:border-white before:from-gray-600 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-650">
                <img src="/brands/crypto/ethereum-1.svg" alt={''} />
              </div>
              <div className="border flex relative *:relative *: size-16 p-2 rounded-xl dark:bg-gray-650 dark:border-white/15 before:rounded-[11px] before:absolute before:inset-0 before:border-t before:border-white before:from-gray-600 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-650">
                <img src="/brands/crypto/solana.svg" alt={''} />
              </div>
              <div className="border flex relative *:relative *: size-16 p-2 rounded-xl dark:bg-gray-650 dark:border-white/15 before:rounded-[11px] before:absolute before:inset-0 before:border-t before:border-white before:from-gray-600 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-650">
                <img src="/brands/crypto/difi.svg" alt={''} />
              </div>
            </div>

          </div>
        </div>

        <div className="footer col-span-12 p-5 text-center">
          <a href="./">← back</a>
        </div>

      </div>
    </>
  )
}
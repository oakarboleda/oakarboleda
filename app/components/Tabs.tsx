import React from 'react';

const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="mb-0 flex list-none flex-row flex-wrap pb-4 pt-3"
            role="tablist"
          >
            <li className="-mb-px mr-2 flex-auto text-center last:mr-0">
              <a
                className={
                  'block rounded px-5 py-3 text-xs font-bold uppercase leading-normal shadow-lg ' +
                  (openTab === 1
                    ? 'bg-blueGray-600 text-white'
                    : 'text-blueGray-600 bg-white')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Profile
              </a>
            </li>
            <li className="-mb-px mr-2 flex-auto text-center last:mr-0">
              <a
                className={
                  'block rounded px-5 py-3 text-xs font-bold uppercase leading-normal shadow-lg ' +
                  (openTab === 2
                    ? 'bg-blueGray-600 text-white'
                    : 'text-blueGray-600 bg-white')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Settings
              </a>
            </li>
            <li className="-mb-px mr-2 flex-auto text-center last:mr-0">
              <a
                className={
                  'block rounded px-5 py-3 text-xs font-bold uppercase leading-normal shadow-lg ' +
                  (openTab === 3
                    ? 'bg-blueGray-600 text-white'
                    : 'text-blueGray-600 bg-white')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Options
              </a>
            </li>
          </ul>
          <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded bg-white shadow-lg">
            <div className="flex-auto px-4 py-5">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
                  <p>
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base benefits.
                    <br />
                    <br /> Dramatically visualize customer directed convergence
                    without revolutionary ROI.
                  </p>
                </div>
                <div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
                  <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </p>
                </div>
                <div className={openTab === 3 ? 'block' : 'hidden'} id="link3">
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;

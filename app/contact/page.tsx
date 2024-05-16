'use client';
import { FC } from 'react';
import Astronaut from '@/app/components/Astro';
import { sendEmail } from '@/app/utils/send-email';
import { useForm } from 'react-hook-form';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <>
      <div className="bg-gray-50 dark:bg-gray-900" id="contact">
        <div className="mx-auto max-w-7xl px-4 pt-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold dark:text-gray-100">Contact</h2>
          <p className="m-auto max-w-2xl pb-6 pt-6 text-center text-base dark:text-gray-400">
            Want to contact us? Choose an option below and well be happy to show
            you how we can transform companys web experience.
          </p>
        </div>
        <div className="mx-auto grid max-w-7xl gap-y-8 px-4 pb-16 pt-8 sm:px-6 md:grid-cols-2 md:gap-x-8 md:gap-y-8 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16 lg:px-8">
          <div>
            <Astronaut />
          </div>
          <div>
            <form>
              <input type="checkbox" id="" className="hidden" name="botcheck" />
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  autoComplete="false"
                  className="w-full rounded-md border-2 border-gray-300 px-4 py-3 outline-none ring-gray-100 placeholder:text-gray-800 focus:border-gray-600 focus:ring-4 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:ring-0 dark:placeholder:text-gray-200 dark:focus:border-white"
                  name="name"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="email_address" className="sr-only">
                  Email Address
                </label>
                <input
                  id="email_address"
                  type="email"
                  placeholder="Email Address"
                  autoComplete="false"
                  className="w-full rounded-md border-2 border-gray-300 px-4 py-3 outline-none ring-gray-100 placeholder:text-gray-800 focus:border-gray-600   focus:ring-4  dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:ring-0 dark:placeholder:text-gray-200 dark:focus:border-white"
                  name="email"
                />
              </div>
              <div className="mb-3">
                <textarea
                  placeholder="Your Message"
                  className="h-36 w-full rounded-md border-2 border-gray-300 px-4 py-3 outline-none   ring-gray-100 placeholder:text-gray-800  focus:border-gray-600 focus:ring-4  dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:ring-0 dark:placeholder:text-gray-200 dark:focus:border-white"
                  name="message"
                ></textarea>
              </div>
              <button
                onSubmit={handleSubmit(onSubmit)}
                type="submit"
                className="w-full rounded-md bg-gray-900 px-7 py-4 font-semibold text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-200 focus:ring-offset-2 dark:bg-white dark:text-black "
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;

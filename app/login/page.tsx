import HomeLinks from '../ui/NavBar';
import LoginForm from '../ui/login-form';
import { lusitana } from '@/app/ui/fonts';

export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Login
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <LoginForm />
      </div>
    </main>
  );
}

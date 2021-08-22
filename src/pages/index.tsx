import { Profile } from '@/components/Profile';

export default function Home(): JSX.Element {
  return (
    <div className='bg-blue-300 debug-screens'>
      <main className='container min-h-screen px-6 py-8 mx-auto bg-white'>
        <h1 className='text-3xl font-bold'>
          Welcome to{' '}
          <a className='text-center text-blue-500'>Next.js + Tailwind</a>
        </h1>
        <Profile />
      </main>
    </div>
  );
}

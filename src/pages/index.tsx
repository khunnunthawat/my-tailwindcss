export default function Home(): JSX.Element {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <main className='flex flex-col items-center justify-center flex-1 w-full px-20 text-center'>
        <h1 className='text-3xl font-bold'>
          Welcome to <a className='text-blue-500'>Next.js + Tailwind</a>
        </h1>
      </main>
    </div>
  );
}

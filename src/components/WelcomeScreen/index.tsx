import { Button } from '../ui/button';

export const WelcomeScreen = ({ onStart, loading }: { onStart: () => void, loading: boolean }) => {
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-10 p-10'>
      <h1 className='text-4xl'>
       Are you ready to start your interview ?
        <br />
        <span className='text-2xl text-gray-500'>Let's get started!</span>    
      </h1>
      <Button onClick={onStart}>{loading ? 'Loading...' : 'Start '}</Button>
    </div>
  );
};

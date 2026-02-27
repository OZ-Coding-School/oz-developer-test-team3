import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDF2F8] to-white">
      <div className="mx-auto flex min-h-screen items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;

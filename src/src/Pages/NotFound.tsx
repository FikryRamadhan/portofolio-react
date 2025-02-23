import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white p-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-xl mt-2">Oops! Page not found</p>
        <p className="text-gray-400 mt-4 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/" className="mt-6 inline-block px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-300 transition">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-center py-16">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-8">The page you're looking for doesn't exist.</p>
      <Link to="/" className="text-blue-600 hover:text-blue-800">
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;
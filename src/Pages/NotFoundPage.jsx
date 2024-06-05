import React from "react";

const NotFoundPage = () => {
  return (
    <div className="h-screen bg-white text-center py-32">
      <h1 className="text-6xl max-md:text-2xl">404 Not Found</h1>
      <p className="text-4xl max-md:xl">The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFoundPage;
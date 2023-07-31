import React, { useState, useEffect } from 'react';

function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? <div>Loading...</div> : <div>Content Loaded</div>}
    </div>
  );
}

export default LoadingAnimation;

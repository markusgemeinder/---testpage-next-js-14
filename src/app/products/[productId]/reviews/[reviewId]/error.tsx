'use client';

// ========== error message hard coded
// export default function ErrorBoundary() {
//   return <div>Error in reviewId</div>;
// }

export default function ErrorBoundary({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      {error.message} <button onClick={reset}>Try again</button>
    </div>
  );
}

'use client';

// ========== error message hard coded
// export default function ErrorBoundary() {
//   return <div>Error in reviewId</div>;
// }

export default function ErrorBoundary({ error }: { error: Error }) {
  return <div>{error.message}</div>;
}

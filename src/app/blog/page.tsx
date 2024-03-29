import { Metadata } from 'next';

// version A (compare to layout.tsx >>> result = "Blog | Codevolution")
export const metadata: Metadata = {
  title: 'Blog',
};

// version B (compare to layout.tsx >>> result = "Blog")
// export const metadata: Metadata = {
//   title: {
//     absolute: 'Blog',
//   },
// };

export default function Blog() {
  return <h1>My blog</h1>;
}

import Link from 'next/link';

export default function F1() {
  return (
    <>
      <h1>F1 page</h1>
      <div>
        <Link href='/f1/f2'>F2</Link>
      </div>
    </>
  );
}

// example f2 vs. (.)f2: both routes (pages) are on same level
// conceptional idea is: when clicking on link F2, interceptional F2 page opens – when reloading page or forwarding link externally original F2 page opens

// components/Navigation.js
import Link from 'next/link';
import Posts from '../PostFeed';
const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          Home
        </Link>
      </li>
      <li>
        <Link href="/posts">
          <Posts/>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;

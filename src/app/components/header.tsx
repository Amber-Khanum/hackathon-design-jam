import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        {/* Navigation Links */}
        <ul className="navLinks">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        {/* Navigation Icons */}
        <div className="navIcons">
          <Image src="/image/1.png" alt="User Icon" width={28} height={28} />
          <Image src="/image/2.png" alt="User Cart" width={28} height={28} />
          <Image src="/image/3.png" alt="Search Icon" width={28} height={28} />
          <Image src="/image/4.png" alt="Heart Icon" width={28} height={28} />
        </div>
      </nav>
    </header>
  );
};

export default Header;

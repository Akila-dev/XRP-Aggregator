import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="mobile-nav-link">
      <span className="text-gradient">XRP</span>Aggregator
    </Link>
  );
};

export default Logo;

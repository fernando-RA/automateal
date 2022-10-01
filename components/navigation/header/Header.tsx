import Image from 'next/image';
import Link from 'next/link';
export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {
  return (
    <header
      {...headerProps}
      className={`w-full flex flex-row align-center justify-between ${className}`}
    >
      <div className="space-x-5 m-5 flex items-center">
        <Image
          src="/automateal_logo2.1.jpeg"
          alt="Logo"
          width={120}
          height={64}
          priority
        />
        <div className="relative -ml-0.5 w-0.5 h-24 bg-gray-300"></div>
        <Link href="/">
          <a className="font-semibold hover:underline align-text-top hidden sm:inline">
            Our Story
          </a>
        </Link>
        <Link href="/">
          <a className="font-semibold hover:underline align-text-top hidden sm:inline">
            Philosophy
          </a>
        </Link>
        <Link href="/">
          <a className="font-semibold hover:underline align-text-top hidden sm:inline">
            Resources
          </a>
        </Link>
        <Link href="/">
          <a className="font-semibold hover:underline align-text-top hidden sm:inline">
            Free Case Study
          </a>
        </Link>
        <Link href="/">
          <a className="font-semibold hover:underline align-text-top hidden sm:inline">
            Reviews
          </a>
        </Link>
      </div>
      <div className="space-x-5 m-5 flex items-center">
        <button className="border-1 p-2 px-4 sm:px-6 bg-blue-500 rounded text-white">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;

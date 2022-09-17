import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font sticky">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/product">
              <a className="mr-5 hover:text-gray-900">all product</a>
            </Link>
            <Link href="/alertproduct">
              <a className="mr-5 hover:text-gray-900">alert product</a>
            </Link>
            <Link href="/">
              <a className="mr-5 hover:text-gray-900">Home</a>
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

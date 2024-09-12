import React from 'react'
import Image from 'next/image'


const Navbar: React.FC = () => {
    return (
      <header className="bg-black text-white p-4">
        <div className="container mx-auto flex items-center">
          <Image src="/images/phishing-900.jpg" alt="Company Logo" width={50} height={50} />
          <h3 className="ml-4 text-xl">
            <span className="text-red-500 font-bold">WhatsApp Phish</span>
          </h3>
        </div>
      </header>
    );
  };
  
  export default Navbar;
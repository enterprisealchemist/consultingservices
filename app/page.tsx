import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-8 bg-gradient-to-br from-white via-ghost-white to-gold/10 text-night relative">
      <div className="absolute inset-0 bg-topography opacity-10 z-0"></div>
      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl">
        <header className="text-center mb-12">
          <Image 
            src="/Enterprise Alchemist Name Big-trans.png" 
            alt="Enterprise Alchemist Logo" 
            width={400} 
            height={400} 
            className="mx-auto mb-6"
          />
          <p className="text-2xl font-semibold mb-8 font-arbutus text-coyote">Transform complex problems into rapid growth</p>
        </header>

        <main className="w-full">
          <section className="text-center">
            <h2 className="text-2xl font-bold mb-4 font-arbutus text-gold">Ready to transform your business?</h2>
            <Link 
              href="https://calendly.com/vito-enterprisealchemist/30min"
              className="inline-flex items-center bg-gold text-night px-6 py-3 rounded-lg font-semibold hover:bg-gold/80 transition-colors font-arbutus shadow-md"
            >
              <Calendar className="mr-2" />
              Book a Free Consultation
            </Link>
          </section>
        </main>

        <footer className="mt-12 text-sm text-center text-coyote">
          © 2024 Enterprise Alchemist. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
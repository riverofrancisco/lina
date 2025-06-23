import Navbar from '@/components/Navigation/Navbar';
import React from 'react';
import './layout.css';
import Footer from '@/components/Navigation/Footer';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const links = ['home','events', 'gallery'];
  return (
    <>
      <Navbar links={links} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

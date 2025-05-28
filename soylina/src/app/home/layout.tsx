import Navbar from '@/components/Navbar/Navbar';
import React from 'react';
import './layout.css';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const links = ['home','events', 'gallery', 'contact'];
  return (
    <>
      <Navbar links={links} />
      <main>{children}</main>
    </>
  );
}

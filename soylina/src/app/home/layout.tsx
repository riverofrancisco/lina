import Navbar from '@/components/Navigation/Navbar';
import React from 'react';
import './layout.css';
import Footer from '@/components/Navigation/Footer';

export interface MenuNavigationProps {
  menuName: string;
  menuPathName: string;
}

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const links: MenuNavigationProps[] = [
    { menuName: 'Inicio', menuPathName: '' },
    { menuName: 'Fechas', menuPathName: 'events' },
    { menuName: 'Galería', menuPathName: 'gallery' },
  ];
  return (
    <>
      <Navbar links={links} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

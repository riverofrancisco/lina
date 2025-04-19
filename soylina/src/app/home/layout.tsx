import React from 'react';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/home/about">About</a></li>
          <li><a href="/home/contact">Contact</a></li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
}
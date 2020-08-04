import React, { ReactNode } from 'react';
import Head from 'next/head';
import { NavBar } from './NavBar';
import { Footer } from './Footer';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Cafe Noriega' }: Props) => (
  <div className="root-container">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <NavBar></NavBar>
    </header>
    <div className="body-pages">{children}</div>
    <footer className="footer mt-auto py-3 bg-dark text-white align-bottom">
      <Footer></Footer>
    </footer>
  </div>
);

export default Layout;

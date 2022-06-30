import React from 'react';
import Head from 'next/head';

import Navbar from './navbar';
import Footer from './footer';

export const siteTitle = 'Kennedy Technology';

const Layout = ({ children, title = 'Kennedy Technology', noHeader }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Founded in 2018, Kennedy Technology is a team of product engineers, building great software and making new kinds of business possible. Our focus is to partner with early stage startups, launching new web and mobile products while growing our team and skills."
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {!noHeader && <Navbar />}

      <main>
        <div className="mx-auto pb-12 px-4 sm:px-6 lg:px-8">{children}</div>
      </main>

      <Footer />
    </>
  );
};

export default Layout;

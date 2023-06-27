// // "use client"
// // import React, { useEffect } from 'react';
// // import Navbar from '@/components/navbar/Navbar';
// // import Footer from '@/components/footer/Footer';
// // import { useRouter } from 'next/router';

// "use client"
// import React, { useEffect } from 'react';
// import Navbar from '@/components/navbar/Navbar';
// import Footer from '@/components/footer/Footer';

// const RootLayout = ({ children }) => {

//   useEffect(() => {
//     const handleRouteChange = () => {
//       // Remove the dark theme when navigating to a new page
//       document.documentElement.classList.remove('dark');
//     };

//     router.events.on('routeChangeStart', handleRouteChange);

//     return () => {
//       router.events.off('routeChangeStart', handleRouteChange);
//     };
//   }, []);

//   const toggleTheme = () => {
//     document.documentElement.classList.toggle('dark');
//   };

//   return (
//     <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
//       <button
//         className="fixed right-4 bottom-4 bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-4 py-2 rounded-md"
//         onClick={toggleTheme}
//       >
//         Toggle Theme
//       </button>
//       <Navbar />
//       {children}
//       <Footer />
//     </div>
//   );
// };

// export default RootLayout;



"use client"
import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Alonzo Johnson',
  description: 'Thank you for visiting the website.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}

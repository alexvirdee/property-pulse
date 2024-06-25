import AuthProvider from '@/components/AuthProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/assets/styles/globals.css';

export const metadata = {
    title: 'Property Pulse | Find your dream rental property',
    description: 'Find your dream rental property',
    keywords: 'rental, find rentals, find properties'
}

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
    <html lang="en">
        <body>
          <Navbar />
            <main>{children}</main>
            <Footer />
        </body>
    </html>
    </AuthProvider>
  )
}

export default MainLayout
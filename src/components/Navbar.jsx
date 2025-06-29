import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  
  const navLinks = [
    { path: "/", name: "Accueil" },
    { path: "/projects", name: "Projets" },
    { path: "/contact", name: "Contact" },
    { path: "/services", name: "Services" },
   // { path: "/admin/projects", name: "Admin Projets" },
    //{ path: "/admin/contacts", name: "Admin Contacts" },
  ];

  return (
    <nav className="bg-[#2E073F] backdrop-blur-sm bg-opacity-90 border-b border-[#9456BD]/30 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold text-[#CFEB00] hover:text-white transition-colors"
          >
            Mon<span className="text-[#9456BD]">Portfolio</span>
          </Link>

          {/* Liens Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-1 py-2 text-sm font-medium transition-colors ${
                  location.pathname === link.path 
                    ? 'text-[#CFEB00]' 
                    : 'text-[#9456BD] hover:text-white'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute inset-x-1 -bottom-1 h-0.5 bg-[#CFEB00] rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Menu Mobile (à implémenter) */}
          <button className="md:hidden text-[#9456BD] hover:text-[#CFEB00]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
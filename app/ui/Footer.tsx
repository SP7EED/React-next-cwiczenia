export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-300">
        <div className="mx-auto max-w-7xl px-6 py-10">
          
          {/* Główna sekcja */}
          <div className="grid gap-8 md:grid-cols-3">
            
            {/* Logo / opis */}
            <div>
              <h2 className="text-xl font-bold text-white">MyApp</h2>
              <p className="mt-2 text-sm text-gray-400">
                Prosta aplikacja zbudowana w Next.js i Tailwind CSS.
              </p>
            </div>
  
            {/* Nawigacja */}
            <div>
              <h3 className="text-sm font-semibold text-white">Nawigacja</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a href="/" className="hover:text-white">Home</a></li>
                <li><a href="/dashboard" className="hover:text-white">Dashboard</a></li>
                <li><a href="/dashboard/about" className="hover:text-white">About</a></li>
                <li><a href="/dashboard/contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
  
            {/* Kontakt */}
            <div>
              <h3 className="text-sm font-semibold text-white">Kontakt</h3>
              <p className="mt-3 text-sm text-gray-400">
                Email: kontakt@myapp.com
              </p>
              <p className="text-sm text-gray-400">
                Tel: +48 123 456 789
              </p>
            </div>
  
          </div>
  
          {/* Linia dolna */}
          <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} MyApp. Wszystkie prawa zastrzeżone.
          </div>
  
        </div>
      </footer>
    );
  }
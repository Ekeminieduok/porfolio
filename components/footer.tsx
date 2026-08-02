export function Footer() {
  return (
    <footer className="py-10 border-t border-white/5 text-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Ekemini Eduok. All rights reserved.
        </p>
        <p className="text-slate-600 text-xs">Built with precision, passion, and coffee.</p>
      </div>
    </footer>
  );
}

export function StickyCallButton() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/95 backdrop-blur border-t border-gray-200 shadow-2xl">
      <a
        href="tel:8653813931"
        className="flex items-center justify-center gap-2 w-full bg-emergency hover:bg-emergency-dark text-white font-bold text-lg py-4 rounded-lg uppercase tracking-wide transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
        </svg>
        Call (865) 381-3931
      </a>
    </div>
  );
}

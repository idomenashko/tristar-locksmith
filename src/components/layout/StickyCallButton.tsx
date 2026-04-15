'use client'

export default function StickyCallButton() {
  return (
    <div className="fixed bottom-5 left-0 right-0 z-50 flex justify-center md:hidden">
      <a
        href="tel:8653813931"
        className="flex items-center gap-2 rounded-full px-6 py-3 text-base font-bold shadow-lg transition-opacity hover:opacity-90 active:opacity-80"
        style={{
          backgroundColor: '#D4A03C',
          color: '#1B3A5C',
          boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
        }}
      >
        <span aria-hidden="true">📞</span>
        Call Now — (865) 381-3931
      </a>
    </div>
  )
}

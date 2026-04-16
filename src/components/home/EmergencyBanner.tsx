export function EmergencyBanner() {
  return (
    <div className="bg-emergency text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <p className="text-center text-sm sm:text-base font-semibold">
          🚨 Locked Out? We&apos;re On Our Way —{" "}
          <a
            href="tel:8653813931"
            className="underline underline-offset-2 font-bold hover:no-underline transition-all"
          >
            Call (865) 381-3931
          </a>
        </p>
      </div>
    </div>
  );
}

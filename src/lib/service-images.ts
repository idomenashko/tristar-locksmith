/**
 * Maps a service slug to a branded technician photo in /public/images/lp.
 * Used by service pages, money pages (service+city), and anywhere a
 * service-specific hero image is needed.
 */

const SERVICE_IMAGE_MAP: Record<string, string> = {
  "car-lockout": "/images/lp/tech-car-lockout.png",
  "house-lockout": "/images/lp/tech-house-lockout.png",
  "car-key-replacement": "/images/lp/tech-keys.png",
  "key-fob-programming": "/images/lp/tech-keys.png",
  "ignition-repair": "/images/lp/tech-car-lockout.png",
  "lock-change": "/images/lp/tech-door.png",
  "commercial-locksmith": "/images/lp/tech-door.png",
  "safe-lockout": "/images/lp/tech-door.png",
  "emergency-locksmith": "/images/lp/tech-house-lockout.png",
};

const DEFAULT_SERVICE_IMAGE = "/images/lp/tech-door.png";

/** Returns the hero image path for a service slug. */
export function getServiceImage(serviceSlug: string): string {
  return SERVICE_IMAGE_MAP[serviceSlug] ?? DEFAULT_SERVICE_IMAGE;
}

/** Builds descriptive, SEO-friendly alt text for a service hero image. */
export function getServiceImageAlt(serviceName: string, cityName?: string): string {
  return cityName
    ? `Tristar Locksmith technician providing ${serviceName.toLowerCase()} in ${cityName}, TN`
    : `Tristar Locksmith technician providing ${serviceName.toLowerCase()} in Knoxville, TN`;
}

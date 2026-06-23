import type { LandingReview } from "@/lib/landing-pages";

interface LandingReviewsProps {
  reviews: LandingReview[];
}

function StarRow() {
  return (
    <div className="flex gap-0.5 mb-3">
      {[1, 2, 3, 4, 5].map((n) => (
        <svg key={n} className="w-4 h-4 text-gold fill-gold" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function LandingReviews({ reviews }: LandingReviewsProps) {
  return (
    <section className="bg-warm-white py-14 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center mb-12">
          What our customers say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
            >
              <StarRow />
              <blockquote className="text-ink text-sm leading-relaxed mb-4">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <div className="text-xs text-muted font-semibold uppercase tracking-wide">
                — {review.author}, {review.location}
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-muted text-sm mt-8">
          5.0 ⭐ average · 127 verified customer reviews
        </p>
      </div>
    </section>
  );
}

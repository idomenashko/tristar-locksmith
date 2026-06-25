import type { LandingReview } from "@/lib/landing-pages";
import { Reveal } from "@/components/landing/Reveal";

interface LandingReviewsProps {
  reviews: LandingReview[];
}

function StarRow() {
  return (
    <div className="flex gap-1 mb-4">
      {[1, 2, 3, 4, 5].map((n) => (
        <svg key={n} className="w-5 h-5 text-gold fill-gold" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function LandingReviews({ reviews }: LandingReviewsProps) {
  return (
    <section className="bg-warm-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-14">
          <h2 className="text-navy font-black text-3xl md:text-4xl mb-3">What Knoxville Says</h2>
          <p className="text-muted text-lg">127 verified reviews · 5.0 stars</p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition-shadow h-full flex flex-col">
                <StarRow />
                <p className="text-gray-700 italic leading-relaxed mb-6 flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-navy">{review.author}</p>
                  <p className="text-muted text-sm">{review.location}, TN</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

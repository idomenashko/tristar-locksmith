import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="py-section lg:py-section-lg bg-warm-white">
      <Container>
        <div className="max-w-lg mx-auto text-center">
          <p className="text-8xl mb-6">🔐</p>
          <h1 className="text-4xl font-bold text-navy font-display mb-4">
            Page Not Found
          </h1>
          <p className="text-muted text-lg mb-8">
            Looks like this page is locked. Let&apos;s get you back to somewhere useful.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button href="/" variant="primary" size="lg">
              Go Home
            </Button>
            <Button href="tel:8653813931" variant="secondary" size="lg">
              📞 Call Us
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

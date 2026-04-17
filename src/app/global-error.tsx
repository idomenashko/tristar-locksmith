"use client";

export default function GlobalError({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{ fontFamily: "system-ui", padding: "2rem", textAlign: "center" }}
      >
        <h1>Something went wrong</h1>
        <p>Please call (865) 381-3931 for immediate assistance.</p>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}

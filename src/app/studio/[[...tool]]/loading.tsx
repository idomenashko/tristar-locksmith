// next-sanity v11 does not export NextStudioLoading.
// A null loading state is acceptable — Next.js renders nothing during Studio load.
export default function StudioLoading() {
  return null;
}

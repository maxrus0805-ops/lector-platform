export function matchRoute(path) {
  if (path === '/') return { page: 'home' };
  if (path === '/partners') return { page: 'partners' };
  if (path === '/about') return { page: 'about' };
  if (path === '/lecturers') return { page: 'lecturers' };
  if (path === '/tariffs') return { page: 'tariffs' };
  if (path === '/contacts') return { page: 'contacts' };
  const m = path.match(/^\/lecturers\/([\w-]+)$/);
  if (m) return { page: 'lecturer', id: m[1] };
  return { page: 'notFound' };
}
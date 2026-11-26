import { Link } from '../router/Link.jsx';

export function NotFoundPage() {
  return (
    <div className="container">
      <h1>404</h1>
      <Link to="/">На главную</Link>
    </div>
  );
}
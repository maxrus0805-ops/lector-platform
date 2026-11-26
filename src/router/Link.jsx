import { useRouter } from './Router.jsx';

export function Link({ to, children, ...rest }) {
  const { navigate } = useRouter();
  return (
    <a
      href={to}
      onClick={(e) => { e.preventDefault(); navigate(to); }}
      {...rest}
    >
      {children}
    </a>
  );
}
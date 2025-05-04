import { Link } from 'react-router-dom';

export default function IconButton({ icon, to, href, onClick, external, children }) {
  const content = (
    <>
      <i className={`fas fa-${icon} mr-2`}></i>
      {children}
    </>
  );
  const base = "bg-primary text-black px-4 py-2 rounded-md inline-flex items-center hover:opacity-90";
  if (to) return <Link className={base} to={to}>{content}</Link>;
  if (href) return <a className={base} href={href} target={external ? "_blank" : undefined}>{content}</a>;
  return <button className={base} onClick={onClick}>{content}</button>;
}

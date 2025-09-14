'use client';

export default function ClientWrapper({ children, className }) {
  return <div className={className}>{children}</div>;
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'zzz-sm-d-mergeproof-final-deleteme',
  description: 'AEGIS-generated project',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'RHFSP', description: 'Renewed Hope Fuel Subsidy Palliative registration platform' };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}

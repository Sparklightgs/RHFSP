import { Card } from '@/components/ui/card';
export default function Dashboard(){return <main className="p-6"><h1 className="text-3xl font-bold">super-admin Dashboard</h1><div className="mt-6 grid gap-4 md:grid-cols-3"><Card>Applications by state/LGA</Card><Card>Daily registration statistics</Card><Card>Duplicate and notification alerts</Card></div></main>}

import { NextResponse } from 'next/server'; import { verifyCron } from '@/lib/crypto'; import { processNotifications } from '@/lib/notifications';
export async function GET(req:Request){if(!verifyCron(req)) return NextResponse.json({error:'Unauthorized'},{status:401}); await processNotifications(); return NextResponse.json({ok:true});}

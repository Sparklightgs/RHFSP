import { NextResponse } from 'next/server'; import { verifyCron } from '@/lib/crypto'; import { POST as rotate } from '../../registration-lock/rotate/route';
export async function GET(req:Request){if(!verifyCron(req)) return NextResponse.json({error:'Unauthorized'},{status:401}); return rotate();}

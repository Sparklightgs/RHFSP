import { NextResponse } from 'next/server';

export function GET(){return NextResponse.json({ok:true,service:'rhfsp',timestamp:new Date().toISOString()});}

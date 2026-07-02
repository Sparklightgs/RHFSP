import { createBrowserClient, createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
export function browserSupabase(){return createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)}
export async function serverSupabase(){const store=await cookies();return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!,process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,{cookies:{getAll:()=>store.getAll(),setAll:(cs)=>cs.forEach(c=>store.set(c.name,c.value,c.options))}})}
export function adminSupabase(){const { createClient } = require('@supabase/supabase-js'); return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {auth:{persistSession:false}})}

import { adminSupabase } from './supabase';
export async function audit(event:string, actorId:string|null, metadata:Record<string,unknown>, req?:Request){await adminSupabase().from('audit_logs').insert({event,actor_id:actorId,metadata,ip_address:req?.headers.get('x-forwarded-for')?.split(',')[0],user_agent:req?.headers.get('user-agent')});}

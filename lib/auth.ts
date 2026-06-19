import { adminSupabase } from './supabase';

export async function requireStaff(req:Request, allowedRoles=['super_admin','state_admin']){
  const auth=req.headers.get('authorization');
  const token=auth?.startsWith('Bearer ')?auth.slice('Bearer '.length):null;
  if(!token) return {authorized:false as const, actorId:null};
  const db=adminSupabase();
  const {data:userData,error:userError}=await db.auth.getUser(token);
  if(userError||!userData.user) return {authorized:false as const, actorId:null};
  const {data:profile}=await db.from('users').select('id,role,is_active').eq('id',userData.user.id).maybeSingle();
  const authorized=!!profile?.is_active&&allowedRoles.includes(profile.role);
  return {authorized, actorId:userData.user.id};
}

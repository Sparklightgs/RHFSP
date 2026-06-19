import { secureCode, sha256 } from './crypto';
import { adminSupabase } from './supabase';

export async function rotateRegistrationLockCode(){
  const db=adminSupabase();
  await db.from('registration_lock_codes').update({is_active:false}).eq('is_active',true);
  const code=secureCode(14);
  const {data,error}=await db.from('registration_lock_codes').insert({code_hash:sha256(code),expires_at:new Date(Date.now()+3*60*60*1000).toISOString(),is_active:true}).select('id,expires_at').single();
  return {code,data,error};
}

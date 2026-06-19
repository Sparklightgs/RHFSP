import crypto from 'crypto';
const codeAlphabet='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
export function secureCode(length=12){const b=crypto.randomBytes(length);return Array.from(b,n=>codeAlphabet[n%codeAlphabet.length]).join('')}
export function applicationId(){return `RHFSP-2026-${secureCode(8)}`}
export function sha256(value:string){return crypto.createHash('sha256').update(value.trim().toLowerCase()).digest('hex')}
function key(){const raw=process.env.FIELD_ENCRYPTION_KEY_BASE64;if(!raw) throw new Error('FIELD_ENCRYPTION_KEY_BASE64 missing'); return Buffer.from(raw,'base64')}
export function encryptField(value:string){const iv=crypto.randomBytes(12);const cipher=crypto.createCipheriv('aes-256-gcm',key(),iv);const enc=Buffer.concat([cipher.update(value,'utf8'),cipher.final()]);const tag=cipher.getAuthTag();return Buffer.concat([iv,tag,enc]).toString('base64')}
export function verifyCron(req:Request){return req.headers.get('authorization')===`Bearer ${process.env.CRON_SECRET}`}

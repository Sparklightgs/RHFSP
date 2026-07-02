import type { Config } from 'tailwindcss';
export default { content:['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}','./lib/**/*.{ts,tsx}'], theme:{extend:{colors:{brand:{50:'#effdf5',100:'#d9fbe8',600:'#15803d',700:'#166534',900:'#052e16'},gold:'#d4a017'}}}, plugins:[] } satisfies Config;

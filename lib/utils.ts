import { clsx, type ClassValue } from 'clsx'; import { twMerge } from 'tailwind-merge';
export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
export const nairaRanges=['Below ₦30,000','₦30,000 - ₦75,000','₦75,001 - ₦150,000','Above ₦150,000'] as const;

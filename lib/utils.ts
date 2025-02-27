import { clsx, type ClassValue } from "clsx"
import { headers } from "next/headers"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


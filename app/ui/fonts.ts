// this folder was created to keep fonts that will be used thorughout the application
// imports font
import { Inter } from 'next/font/google'
import { Lusitana } from 'next/font/google';

// specify subset; for more info visit: https://fonts.google.com/knowledge/glossary/subsetting
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({ 
    weight:['400'],
    subsets: ['latin']
 }) 
// add font to the <body> element in ../app/layout.tsx

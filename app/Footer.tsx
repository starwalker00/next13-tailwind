'use client';

import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="p-8 grow flex justify-center shadow-lg bg-indigo-300">
            <a href="https://vercel.com" target="_blank">
                Powered by{' '}
                <span>
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </span>
            </a>
        </footer>
    )
}
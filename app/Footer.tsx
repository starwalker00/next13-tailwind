'use client';

import Image from 'next/image'
import { GlobeAltIcon } from '@heroicons/react/24/outline'

export default function Footer() {
    return (
        <footer className="p-8 grow flex flex-col bg-indigo-300 divide-y-2">
            <div className="p-8 grow flex flex-row justify-evenly">
                <div className="flex flex-col justify-evenly">
                    <p className="text-center font-mono">
                        Making the world a better place<br />by planting vegetables.
                    </p>
                    <div className="flex flex-row justify-evenly">
                        <GlobeAltIcon className="block h-6 w-6" />
                        <GlobeAltIcon className="block h-6 w-6" />
                        <GlobeAltIcon className="block h-6 w-6" />
                        <GlobeAltIcon className="block h-6 w-6" />
                    </div>
                    <a href="https://vercel.com" target="_blank" className="flex flex-col gap-2 self-center">
                        Powered by{' '}
                        <span>
                            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                        </span>
                    </a>
                </div>
                <div className="grow flex flex-row">
                    <div className="grow flex flex-col justify-start text-center">
                        <div className="font-bold">
                            Section
                        </div>
                        <div>
                            main
                        </div>
                        <div >
                            main
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">
                            Section
                        </div>
                        <div>
                            main
                        </div>
                        <div>
                            main
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center pt-4">
                © 2022 Martian Labs Inc. All rights reserved.
            </div>
        </footer>
    )
}
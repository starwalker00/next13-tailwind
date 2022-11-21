export default function ProjectPage() {
    return (
        <div className="grow flex flex-col justify-center items-center">
            <main className="pt-[10%] flex-grow bg-indigo-100">
                <h1 className="text-center text-3xl font-bold underline">
                    ProjectPage
                </h1>

                <p className="text-center py-2">
                    Get started by editing{' '}
                    <code>app/page.tsx</code>
                </p>

                <div className="flex flex-col sm:flex-row p-8 justify-center gap-4">
                    <a href="https://beta.nextjs.org/docs"
                        className="text-center border rounded-xl shadow-lg p-8 space-y-4"
                    >
                        <h2 className="text-center text-xl font-bold">Documentation &rarr;</h2>
                        <p>Find in-depth information about Next.js 13</p>
                    </a>

                    <a
                        href="https://github.com/vercel/next.js/tree/canary/examples"
                        className="text-center border rounded-xl shadow-lg p-8 space-y-4"
                    >
                        <h2 className="text-center text-xl font-bold">Examples &rarr;</h2>
                        <p>Explore the Next.js 13 playground.</p>
                    </a>

                    <a
                        href="https://vercel.com/templates/next.js/app-directory?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center border rounded-xl shadow-lg p-8 space-y-4"
                    >
                        <h2 className="text-center text-xl font-bold">Deploy &rarr;</h2>
                        <p>Deploy your Next.js site to a public URL with Vercel.</p>
                    </a>
                </div>
            </main>
        </div>
    )
}

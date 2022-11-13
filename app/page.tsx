import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <main className="flex-col py-12 border justify-center">
        <h1 className="text-center text-3xl font-bold underline">
          Hello, Next.js!
        </h1>

        <p className="text-center py-2">
          Get started by editing{' '}
          <code >app/page.tsx</code>
        </p>

        <div className="flex flex-col sm:flex-row border p-8 justify-center">
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

      <footer className="min-w-full flex p-4 rounded-lg shadow">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto border"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

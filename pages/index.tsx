import Head from "next/head";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen w-full items-center justify-center">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </main>
    </div>
  );
}

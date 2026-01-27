import { dbConnectionStatus } from "../db/connection-status";

export default async function Home() {
  const result = await dbConnectionStatus();
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>{"Eloise's Garden"}</h1>
        <h2>Lets get growing</h2>
        {result}
      </main>
    </div>
  );
}

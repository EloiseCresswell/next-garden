import { getMonth } from "@/lib/month";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const month = url.searchParams.get("month") || "January";
  const tasks = await getMonth(month);
  return new Response(JSON.stringify(tasks), { status: 200 });
}

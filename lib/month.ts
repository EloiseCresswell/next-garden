import clientPromise from "@/lib/mongodb";

// this function gets ALL months, not specific... guess could make specific or dynamic API routing nextjs
export const getMonth = async (chosenMonth: string): Promise<object> => {
  try {
    const client = await clientPromise;
    if (client) {
      const db = client.db("plan");
      const months = await db
        .collection("month")
        .find({ month: { $eq: chosenMonth } })
        .toArray();
      const serialized = months.map((m) => ({
        ...m,
        _id: m._id.toString(),
      }));
      console.log("months", months);
      return serialized;
    }
  } catch (error) {
    console.error("API ERROR:", error);
    return [];
  }
  console.log({ error: "Unexpected error" }, { status: 500 });
  return [];
};

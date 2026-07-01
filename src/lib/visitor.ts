import { supabase } from "./supabase";

export async function updateVisitorCount() {

  const { data, error } = await supabase
    .from("visitors")
    .select("count")
    .eq("id", 1)
    .single();

  console.log("visitor data:", data);
  console.log("visitor error:", error);

  if (data) {

    const { data: updated, error: updateError } = await supabase
      .from("visitors")
      .update({
        count: data.count + 1,
      })
      .eq("id", 1)
      .select();

    console.log("updated data:", updated);
    console.log("update error:", updateError);
  }
}
const BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://skincare-withered-glitter-1420.fly.dev";

export async function getRecommendations({ skin_type, allergens_list }) {
  const params = new URLSearchParams();
  if (skin_type) params.append("skin_type", skin_type);
  if (allergens_list) params.append("allergens_list", allergens_list);

  const response = await fetch(`${BASE_URL}/recommend?${params.toString()}`);
  if (!response.ok) {
    throw new Error("Failed to fetch recommendations");
  }
  return await response.json();
}

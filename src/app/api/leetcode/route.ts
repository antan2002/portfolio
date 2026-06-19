import { NextResponse } from "next/server";

export async function GET() {
  const query = `query { recentAcSubmissionList(username: "antanroy", limit: 3) { id title titleSlug timestamp } }`;
  try {
    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
      next: { revalidate: 300 },
    });
    const data = await res.json();

    const list = data?.data?.recentAcSubmissionList ?? [];
    if (list.length === 0) {
      return NextResponse.json({ problems: [] });
    }

    const slugs = list.map((p: { titleSlug: string }) => p.titleSlug);
    const diffQuery = `query getQuestionDetail($titleSlugs: [String!]!) {
      questionList(filter: {keywords: $titleSlugs}) {
        data {
          titleSlug
          difficulty
        }
      }
    }`;
    const diffRes = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: diffQuery, variables: { titleSlugs: slugs } }),
    });
    const diffData = await diffRes.json();
    const diffMap: Record<string, string> = {};
    for (const q of diffData?.data?.questionList?.data ?? []) {
      diffMap[q.titleSlug] = q.difficulty;
    }

    const problems = list.map((p: { id: string; title: string; titleSlug: string; timestamp: string }) => ({
      ...p,
      difficulty: diffMap[p.titleSlug] ?? null,
    }));

    return NextResponse.json({ problems });
  } catch {
    return NextResponse.json({ problems: [] });
  }
}

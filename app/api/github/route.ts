import { NextResponse } from "next/server";

export const revalidate = 3600;

export async function GET() {
  try {
    const response = await fetch(
      "https://api.github.com/users/SpanyDev/repos?sort=updated&per_page=30&type=owner",
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "BurakDursun-Portfolio",
        },
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API responded with status ${response.status}`);
    }

    const repos = await response.json();


    interface GitHubRepo {
      id: number;
      name: string;
      full_name: string;
      description: string | null;
      html_url: string;
      homepage: string | null;
      language: string | null;
      stargazers_count: number;
      forks_count: number;
      topics: string[];
      fork: boolean;
      created_at: string;
      updated_at: string;
      pushed_at: string;
    }

    const projects = repos
      .filter((repo: GitHubRepo) => !repo.fork)
      .map((repo: GitHubRepo) => ({
        id: repo.id,
        name: repo.name,
        fullName: repo.full_name,
        description: repo.description,
        url: repo.html_url,
        homepage: repo.homepage,
        language: repo.language,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        topics: repo.topics || [],
        createdAt: repo.created_at,
        updatedAt: repo.updated_at,
        pushedAt: repo.pushed_at,
      }));

    return NextResponse.json(projects);
  } catch (error) {
    console.error("GitHub API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch GitHub repositories" },
      { status: 500 }
    );
  }
}

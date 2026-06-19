"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import { Icons } from "@/components/icons";

const BLUR_FADE_DELAY = 0.04;

interface LeetProblem {
  id: string;
  title: string;
  titleSlug: string;
  timestamp: string;
  difficulty: string | null;
}

function timeAgo(unix: number): string {
  const seconds = Math.floor(Date.now() / 1000 - unix);
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  return `${months}mo ago`;
}

const difficultyColors: Record<string, string> = {
  Easy: "text-green-600 dark:text-green-400",
  Medium: "text-amber-600 dark:text-amber-400",
  Hard: "text-red-600 dark:text-red-400",
};

export default function LeetCodeActivity() {
  const [problems, setProblems] = useState<LeetProblem[]>([]);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    fetch("/api/leetcode")
      .then((r) => r.json())
      .then((json) => {
        setProblems(json?.problems ?? []);
      })
      .catch(() => {});
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % Math.max(problems.length, 1));
  }, [problems.length]);

  useEffect(() => {
    if (problems.length <= 1 || paused) return;
    const timer = setInterval(next, 3500);
    return () => clearInterval(timer);
  }, [next, paused, problems.length]);

  if (problems.length === 0) return null;

  const p = problems[current];

  return (
    <section id="leetcode">
      <BlurFade delay={BLUR_FADE_DELAY * 11}>
        <div className="flex min-h-0 flex-col gap-y-6">
          <div className="flex flex-col gap-y-4 items-center justify-center">
            <div className="flex items-center w-full">
              <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
              <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                <span className="text-background text-sm font-medium">LeetCode</span>
              </div>
              <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
            </div>
            <div className="w-full max-w-lg">
              <div
                className="relative border border-border/60 bg-background/40 backdrop-blur-sm rounded-xl p-4 overflow-hidden transition-opacity duration-500"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                <div className="flex items-center justify-between gap-3 min-h-[40px]">
                  <div className="flex items-center gap-2 min-w-0 flex-1">
                    <Icons.leetcode className="size-4 shrink-0" />
                    <Link
                      href={`https://leetcode.com/problems/${p.titleSlug}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium truncate hover:text-foreground transition-colors flex items-center gap-1"
                    >
                      {p.title}
                      <ArrowUpRight className="size-3 shrink-0" />
                    </Link>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {p.difficulty && (
                      <span className={`text-xs font-medium ${difficultyColors[p.difficulty] ?? ""}`}>
                        {p.difficulty}
                      </span>
                    )}
                    <span className="text-xs text-muted-foreground tabular-nums">
                      {timeAgo(Number(p.timestamp))}
                    </span>
                  </div>
                </div>
                {problems.length > 1 && (
                  <div className="flex items-center justify-center gap-1.5 mt-3">
                    {problems.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`size-1.5 rounded-full transition-all duration-300 ${
                          i === current
                            ? "bg-primary w-3"
                            : "bg-border hover:bg-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </BlurFade>
    </section>
  );
}

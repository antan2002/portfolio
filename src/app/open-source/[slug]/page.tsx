import { formatDate } from "@/lib/utils";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

function getSortedOpenSource() {
  return [...DATA.openSource];
}

export async function generateStaticParams() {
  return DATA.openSource.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata | undefined> {
  const { slug } = await params;
  const item = DATA.openSource.find((p) => p.slug === slug);

  if (!item) return undefined;

  return {
    title: item.title,
    description: item.issue,
    openGraph: {
      title: item.title,
      description: item.issue,
      type: "article",
      url: `${DATA.url}/open-source/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: item.title,
      description: item.issue,
    },
  };
}

export default async function OpenSourcePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sortedItems = getSortedOpenSource();
  const currentIndex = sortedItems.findIndex((p) => p.slug === slug);
  const item = sortedItems[currentIndex];

  if (!item) {
    notFound();
  }

  const previousItem = currentIndex > 0 ? sortedItems[currentIndex - 1] : null;
  const nextItem = currentIndex < sortedItems.length - 1 ? sortedItems[currentIndex + 1] : null;

  return (
    <section id="open-source">
      <div className="flex justify-start gap-4 items-center">
        <Link
          href="/#open-source"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg px-2 py-1 inline-flex items-center gap-1 mb-6 group"
          aria-label="Back to Home"
        >
          <ChevronLeft className="size-3 group-hover:-translate-x-px transition-transform" />
          Back to Home
        </Link>
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="title font-semibold text-3xl md:text-4xl tracking-tighter leading-tight">
          {item.title}
        </h1>
        <p className="text-sm text-muted-foreground flex items-center gap-2 flex-wrap">
          <span>{item.repo}</span>
          <span>·</span>
          <span>{formatDate(item.date)}</span>
          <span>·</span>
          <span
            className={
              item.status === "Merged"
                ? "text-green-600 dark:text-green-400"
                : "text-amber-600 dark:text-amber-400"
            }
          >
            {item.status === "Merged" ? "✅ Merged" : "❌ Open"}
          </span>
        </p>
        <p className="text-muted-foreground">{item.issue}</p>
      </div>

      <div
        className="my-6 flex w-full items-center"
      >
        <div
          className="flex-1 h-px bg-border"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
          }}
        />
      </div>

      <article className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
        {item.description.split("\n").map((paragraph, i) => (
          <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}
      </article>

      <div className="mt-8">
        <Link
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm border border-border rounded-lg px-4 py-2 hover:bg-accent/50 transition-colors"
        >
          View on GitHub
          <ExternalLink className="size-4" />
        </Link>
      </div>

      <nav className="mt-12 pt-8 max-w-2xl">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          {previousItem ? (
            <Link
              href={"/open-source/" + previousItem.slug}
              className="group flex-1 flex flex-col gap-1 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors"
            >
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <ChevronLeft className="size-3" />
                Previous
              </span>
              <span className="text-sm font-medium group-hover:text-foreground transition-colors whitespace-normal wrap-break-word">
                {previousItem.title}
              </span>
            </Link>
          ) : (
            <div className="hidden sm:block flex-1" />
          )}

          {nextItem ? (
            <Link
              href={"/open-source/" + nextItem.slug}
              className="group flex-1 flex flex-col gap-1 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors text-right"
            >
              <span className="flex items-center justify-end gap-1 text-xs text-muted-foreground">
                Next
                <ChevronRight className="size-3" />
              </span>
              <span className="text-sm font-medium group-hover:text-foreground transition-colors whitespace-normal wrap-break-word">
                {nextItem.title}
              </span>
            </Link>
          ) : (
            <div className="hidden sm:block flex-1" />
          )}
        </div>
      </nav>
    </section>
  );
}

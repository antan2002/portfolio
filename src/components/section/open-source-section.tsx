import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function OpenSourceSection() {
  return (
    <>
      <div className="flex min-h-0 flex-col gap-y-8">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">Open Source</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <BlurFade delay={BLUR_FADE_DELAY * 2}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">Open Source Contributions{" "}
                <span className="inline-flex items-center rounded-md border px-3 py-0.5 text-sm font-bold text-foreground align-middle ml-3">
                  {DATA.openSource.length}
                </span>
              </h2>
              <p className="text-muted-foreground text-sm text-balance text-center mt-2">
                I actively contribute to open-source projects, helping improve code quality, fix issues, and implement new features.
              </p>
            </BlurFade>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          {DATA.openSource.map((item, id) => (
            <BlurFade delay={BLUR_FADE_DELAY * 3 + id * 0.05} key={item.url}>
              <Link
                className="flex items-start gap-x-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                href={"/open-source/" + item.slug}
              >
                <span className="text-xs font-mono tabular-nums font-medium mt-[5px]">
                  {String(id + 1).padStart(2, "0")}.
                </span>
                <div className="flex flex-col gap-y-1 flex-1 min-w-0">
                  <p className="tracking-tight text-lg font-medium">
                    <span className="group-hover:text-foreground transition-colors">
                      {item.title}
                      <ChevronRight
                        className="ml-1 inline-block size-4 stroke-3 text-muted-foreground opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                        aria-hidden
                      />
                    </span>
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {item.repo} ·{" "}
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
                  <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                    {item.issue}
                  </p>
                </div>
              </Link>
            </BlurFade>
          ))}
        </div>
      </div>
    </>
  );
}

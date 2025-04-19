import Link from "next/link";
import { cn } from "@/lib/utils";

interface BlogCardProps {
    title: string;
    href: string;
    date: string;
    className?: string;
}

export function BlogCard({ title, href, date, className }: BlogCardProps) {
    return (
        <Link
            href={href}
            className={cn(
                "group relative overflow-hidden rounded-lg border bg-background p-4 transition-all hover:border-foreground/50",
                className
            )}
        >
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col space-y-1.5">
                    <h3 className="font-semibold leading-none tracking-tight group-hover:text-foreground/80">
                        {title}
                    </h3>
                </div>
                <span className="text-sm text-muted-foreground">{date}</span>
            </div>
        </Link>
    );
} 
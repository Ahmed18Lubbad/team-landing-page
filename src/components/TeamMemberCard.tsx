import Image from "next/image";
import Link from "next/link";
import type { TeamMember } from "@/types/content";

export default function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="group">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-hairline/40">
        <Image
          src={member.photo.src}
          alt={member.photo.alt}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="object-contain grayscale-[15%] transition-[filter] duration-300 group-hover:grayscale-0"
        />
      </div>

      <div className="mt-5 border-t border-hairline pt-4">
        <h3 className="font-display text-xl font-medium text-ink">
          {member.name}
        </h3>
        <p className="mt-0.5 text-sm text-accent">{member.role}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {member.bio}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <Link
            href={member.portfolio.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-ink underline decoration-hairline decoration-1 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
          >
            {member.portfolio.label}
          </Link>

          {member.social?.map((link) => (
            <Link
              key={link.platform}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-accent"
            >
              {link.platform}
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}

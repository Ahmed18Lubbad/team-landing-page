import type { TeamContent } from "@/types/content";
import TeamMemberCard from "./TeamMemberCard";

export default function Team({ team }: { team: TeamContent }) {
  return (
    <section id="team" className="border-b border-hairline">
      <div className="mx-auto max-w-content px-6 py-16 sm:px-10 sm:py-24">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl">
            {team.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            {team.subheading}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {team.members.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

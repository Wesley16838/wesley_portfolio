import NewTab from "@/components/NewTab";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 md:flex-row md:px-6">
        <p className="text-sm text-fg-muted">
          © {new Date().getFullYear()} {site.shortName} · {site.location}
        </p>
        <ul className="flex items-center gap-1">
          <li>
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
            >
              <GitHubIcon className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
              <NewTab />
            </a>
          </li>
          <li>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
            >
              <LinkedInIcon className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
              <NewTab />
            </a>
          </li>
          <li>
            <a href={`mailto:${site.links.email}`} className="icon-btn">
              <MailIcon className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

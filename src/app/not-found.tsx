import Link from "next/link";
import Footer from "@/components/Footer";
import { ArrowRightIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <>
      <main
        id="main"
        className="mx-auto max-w-6xl px-4 pb-20 pt-6 md:px-6 md:pb-28 md:pt-10"
      >
        <div className="tile enter flex flex-col items-start p-8 md:p-14">
          <p className="label">404 · Not found</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-fg md:text-6xl">
            This page isn&rsquo;t here.
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-fg-secondary">
            The page you&rsquo;re looking for doesn&rsquo;t exist or was moved.
          </p>
          <Link href="/" className="btn btn-primary mt-8">
            Back to home
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

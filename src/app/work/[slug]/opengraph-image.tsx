import { ImageResponse } from "next/og";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import { site } from "@/content/site";
import { OG_COLORS, OG_SIZE, ogFonts, publicImage, tint } from "@/lib/og";

export const alt = "Case study by Wesley Wong";
export const size = OG_SIZE;
export const contentType = "image/png";

// one image per case study, rendered at build time (it reads files from /public)
export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

const PANEL_WIDTH = 440;
const PANEL_HEIGHT = 550;

/** Case-study social preview: title and tagline beside the study's cover image. */
export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  const fonts = await ogFonts();

  const cover = study?.images?.find((image) => image.src);
  const coverData = cover?.src ? await publicImage(cover.src) : null;
  // phone screenshots and transparent mockups must be shown whole; photos fill
  const whole = cover?.aspect === "phone" || Boolean(cover?.backdrop);
  const brand = study?.brand.accent ?? OG_COLORS.accent;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          padding: 40,
          backgroundColor: OG_COLORS.page,
          fontFamily: "Geist",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            borderRadius: 40,
            border: `2px solid ${OG_COLORS.border}`,
            backgroundColor: OG_COLORS.card,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "52px 44px 52px 56px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                color: OG_COLORS.muted,
                fontSize: 24,
                fontWeight: 500,
              }}
            >
              <div
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: 9999,
                  backgroundColor: brand,
                }}
              />
              {`Case study · ${study?.timeline ?? ""}`}
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  color: OG_COLORS.fg,
                  fontSize: 62,
                  fontWeight: 700,
                  lineHeight: 1.05,
                  letterSpacing: "-0.035em",
                }}
              >
                {study?.title ?? "Case study"}
              </div>
              <div
                style={{
                  marginTop: 20,
                  color: OG_COLORS.secondary,
                  fontSize: 27,
                  fontWeight: 500,
                  lineHeight: 1.35,
                }}
              >
                {study?.cardCopy ?? ""}
              </div>
            </div>

            <div
              style={{ color: OG_COLORS.fg, fontSize: 26, fontWeight: 700 }}
            >
              {site.shortName}
            </div>
          </div>

          {coverData && (
            <div
              style={{
                width: PANEL_WIDTH,
                height: PANEL_HEIGHT,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: tint(brand, 0.14),
              }}
            >
                <img
                src={coverData}
                alt=""
                width={whole ? PANEL_WIDTH - 72 : PANEL_WIDTH}
                height={whole ? PANEL_HEIGHT - 72 : PANEL_HEIGHT}
                style={{ objectFit: whole ? "contain" : "cover" }}
              />
            </div>
          )}
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}

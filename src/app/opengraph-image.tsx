import { ImageResponse } from "next/og";
import { avatar, site } from "@/content/site";
import { OG_COLORS, OG_SIZE, ogFonts, publicImage } from "@/lib/og";

export const alt = "Wesley Wong - Staff Software Engineer";
export const size = OG_SIZE;
export const contentType = "image/png";

/** Home-page social preview: the hero, as a card. */
export default async function OpenGraphImage() {
  const [fonts, face] = await Promise.all([
    ogFonts(),
    publicImage(avatar.poster),
  ]);

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
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 60,
            borderRadius: 40,
            border: `2px solid ${OG_COLORS.border}`,
            backgroundColor: OG_COLORS.card,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
            <img
              src={face}
              alt=""
              width={132}
              height={132}
              style={{
                borderRadius: 9999,
                border: `6px solid ${OG_COLORS.sun}`,
              }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{ color: OG_COLORS.fg, fontSize: 34, fontWeight: 700 }}
              >
                {site.shortName}
              </div>
              <div
                style={{
                  marginTop: 6,
                  color: OG_COLORS.muted,
                  fontSize: 24,
                  fontWeight: 500,
                }}
              >
                {/* one string: the renderer rejects mixed text and expressions */}
                {`Staff Software Engineer at Visa · ${site.location}`}
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                color: OG_COLORS.fg,
                fontSize: 72,
                fontWeight: 700,
                lineHeight: 1.06,
                letterSpacing: "-0.035em",
              }}
            >
              {site.greeting}
            </div>
            <div
              style={{
                marginTop: 6,
                color: OG_COLORS.muted,
                fontSize: 72,
                fontWeight: 700,
                lineHeight: 1.06,
                letterSpacing: "-0.035em",
                maxWidth: 1000,
              }}
            >
              {site.heroTitle}
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}

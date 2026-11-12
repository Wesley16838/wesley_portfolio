import { ImageResponse } from "next/og";

export const alt = "Wesley Wong - Staff Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          padding: 40,
          backgroundColor: "#f6f5f2",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 64,
            borderRadius: 40,
            border: "2px solid rgba(23, 23, 26, 0.1)",
            backgroundColor: "#ffffff",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              color: "#66666f",
              fontSize: 26,
              fontWeight: 600,
            }}
          >
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: 9999,
                backgroundColor: "#4f46e5",
              }}
            />
            Wesley Wong
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                color: "#17171a",
                fontSize: 76,
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
              }}
            >
              Hi, I&rsquo;m Wesley.
            </div>
            <div
              style={{
                marginTop: 8,
                color: "#66666f",
                fontSize: 76,
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                maxWidth: 980,
              }}
            >
              I engineer AI-native systems with a designer&rsquo;s eye.
            </div>
          </div>
          <div style={{ color: "#55555e", fontSize: 28 }}>
            Staff Software Engineer at Visa · AI Developer Experience &amp; UX
            Engineering
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}

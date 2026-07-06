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
          flexDirection: "column",
          justifyContent: "center",
          padding: "88px",
          backgroundColor: "#f4f1ea",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            color: "#8a8478",
            fontSize: 22,
            letterSpacing: "0.25em",
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 9999,
              backgroundColor: "#d97757",
            }}
          />
          WESLEY.SYSTEMS
        </div>
        <div
          style={{
            marginTop: 44,
            color: "#16130f",
            fontSize: 72,
            fontWeight: 500,
            lineHeight: 1.1,
            maxWidth: 980,
            fontFamily: "Georgia, serif",
          }}
        >
          Engineering AI-native systems with a designer&rsquo;s eye.
        </div>
        <div
          style={{
            marginTop: 32,
            color: "#57524a",
            fontSize: 28,
            lineHeight: 1.4,
          }}
        >
          Wesley Wong - Staff Software Engineer at Visa · Founding Engineer
        </div>
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 16,
            backgroundColor: "#d97757",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size },
  );
}

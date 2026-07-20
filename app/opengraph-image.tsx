import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ICSSG-AI 2027 Conference";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to bottom right, #050816, #0a0a2a)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: "radial-gradient(circle at 80% 20%, rgba(79, 142, 247, 0.15), transparent 40%), radial-gradient(circle at 20% 80%, rgba(124, 77, 255, 0.15), transparent 40%)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              padding: "8px 16px",
              background: "rgba(0, 229, 255, 0.1)",
              border: "1px solid rgba(0, 229, 255, 0.3)",
              borderRadius: "100px",
              color: "#00E5FF",
              fontSize: "24px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            ICSSG-AI 2027
          </div>
          <div
            style={{
              padding: "8px 16px",
              background: "rgba(79, 142, 247, 0.1)",
              border: "1px solid rgba(79, 142, 247, 0.3)",
              borderRadius: "100px",
              color: "#4F8EF7",
              fontSize: "24px",
              fontWeight: 600,
            }}
          >
            Bhubaneswar, India
          </div>
        </div>
        <h1
          style={{
            fontSize: "72px",
            fontWeight: 800,
            color: "white",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "24px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Smart Systems &</span>
          <span>Sustainable Governance</span>
          <span style={{ color: "rgba(255,255,255,0.7)" }}>Powered by AI</span>
        </h1>
        <p
          style={{
            fontSize: "32px",
            color: "rgba(255,255,255,0.5)",
            maxWidth: "800px",
            lineHeight: 1.4,
          }}
        >
          An international confluence of researchers, academics, and industry leaders.
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}

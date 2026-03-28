import { ImageResponse } from "next/og";

export const alt = "Miguel Collaço Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0d1120",
          position: "relative",
          overflow: "hidden",
          fontFamily: "sans-serif",
        }}
      >
        {/* Decorative teal line — top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background: "linear-gradient(90deg, #1abc9c, #34d399)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 72px",
            width: "100%",
          }}
        >
          {/* Top badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#1abc9c",
              }}
            />
            <span
              style={{
                fontSize: 15,
                fontWeight: 600,
                letterSpacing: 3,
                color: "#1abc9c",
              }}
            >
              SOFTWARE ENGINEER
            </span>
          </div>

          {/* Main content */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            <div
              style={{
                display: "flex",
                gap: 24,
                fontSize: 84,
                fontWeight: 800,
                lineHeight: 1,
                letterSpacing: -3,
              }}
            >
              <span style={{ color: "#f0f6ff" }}>Miguel Collaço</span>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 6,
                marginTop: 24,
              }}
            >
              <div style={{ fontSize: 26, color: "#c8d8f0" }}>
                CSE Student @ NOVA FCT
              </div>
              <div style={{ fontSize: 26, color: "#c8d8f0" }}>
                Projects Department Director @ In-Nova
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", gap: 10 }}>
              {["React", "Next.js", "TypeScript", "Node.js"].map((tech) => (
                <div
                  key={tech}
                  style={{
                    fontSize: 16,
                    fontWeight: 500,
                    padding: "7px 16px",
                    border: "1px solid rgba(26,188,156,0.3)",
                    borderRadius: 999,
                    color: "#1abc9c",
                    background: "rgba(26,188,156,0.07)",
                  }}
                >
                  {tech}
                </div>
              ))}
            </div>

            <div
              style={{
                fontSize: 18,
                color: "#4a5e78",
                letterSpacing: 0.5,
              }}
            >
              miguelcollaco.com
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

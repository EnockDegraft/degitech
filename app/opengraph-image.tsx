import { ImageResponse } from "next/og"
import { site } from "@/lib/site"

export const alt = `${site.name}: ${site.tagline}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "radial-gradient(ellipse at 30% 0%, #1b3272 0%, #060a16 65%)",
          color: "#e8edf8",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "linear-gradient(135deg, #6d93ff, #3a63e6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="44" height="44" viewBox="0 0 40 40">
              <path d="M13 11h7.5a9 9 0 0 1 0 18H13z" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinejoin="round" />
              <path d="M13 20h6" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" />
              <circle cx="21.5" cy="20" r="2.4" fill="#3ad3f2" />
            </svg>
          </div>
          <div style={{ fontSize: 34, fontWeight: 700, display: "flex" }}>
            DegiTech<span style={{ color: "#8fa9ff", marginLeft: 10 }}>Consults</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, display: "flex", flexWrap: "wrap" }}>
            Software that runs&nbsp;<span style={{ color: "#8fa9ff" }}>serious operations.</span>
          </div>
          <div style={{ fontSize: 30, color: "#97a3bd", marginTop: 28 }}>
            Web platforms · Mobile apps · AI verification · Accra, Ghana
          </div>
        </div>
      </div>
    ),
    size,
  )
}

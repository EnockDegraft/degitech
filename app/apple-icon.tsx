import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #6d93ff, #3a63e6)",
        }}
      >
        <svg width="120" height="120" viewBox="0 0 40 40">
          <path d="M13 11h7.5a9 9 0 0 1 0 18H13z" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinejoin="round" />
          <path d="M13 20h6" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" />
          <circle cx="21.5" cy="20" r="2.4" fill="#3ad3f2" />
        </svg>
      </div>
    ),
    size,
  )
}

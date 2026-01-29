import { ImageResponse } from "next/og"
import { headers } from "next/headers"

export const runtime = "edge"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

function getOrigin() {
  const h = headers()
  const host = h.get("x-forwarded-host") ?? h.get("host")
  const proto = h.get("x-forwarded-proto") ?? "https"
  if (!host) return "http://localhost:3000"
  return `${proto}://${host}`
}

export default function VocaflipOpenGraphImage() {
  const origin = getOrigin()
  const logoUrl = `${origin}/vocaflip/vocaflip_logo.png`

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b1220",
          padding: 64,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 48,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <div
            style={{
              width: 860,
              padding: 56,
              borderRadius: 40,
              background: "#ffffff",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 28,
            }}
          >
            <div
              style={{
                width: 140,
                height: 140,
                borderRadius: 32,
                background: "#f8fafc",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 16,
              }}
            >
              <img
                src={logoUrl}
                width={108}
                height={108}
                style={{ objectFit: "contain" }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div
                style={{
                  fontSize: 64,
                  fontWeight: 700,
                  color: "#0f172a",
                  letterSpacing: "-0.03em",
                }}
              >
                vocaflip
              </div>
              <div
                style={{
                  fontSize: 32,
                  color: "#334155",
                  lineHeight: 1.25,
                  letterSpacing: "-0.02em",
                }}
              >
                단어 암기를 이해 중심 학습으로
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  )
}



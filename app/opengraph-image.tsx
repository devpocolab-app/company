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

export default function OpenGraphImage() {
  const origin = getOrigin()
  const logoUrl = `${origin}/pocolab_logo_footer.png`

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
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 48,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <div
            style={{
              width: 760,
              padding: 56,
              borderRadius: 40,
              background: "#ffffff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 24,
            }}
          >
            <img
              src={logoUrl}
              width={520}
              height={130}
              style={{
                objectFit: "contain",
              }}
            />
            <div
              style={{
                fontSize: 36,
                color: "#334155",
                lineHeight: 1.2,
                textAlign: "center",
                letterSpacing: "-0.02em",
              }}
            >
              Small but useful apps
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  )
}



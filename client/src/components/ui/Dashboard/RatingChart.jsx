"use client"

import { useEffect, useRef } from "react"

const ratings = [
  { name: "Hygiene", value: 85, color: "#5470FF", size: 100 },
  { name: "Food Taste", value: 85, color: "#FFA500", size: 140 },
  { name: "Packaging", value: 92, color: "#22D3EE", size: 100 },
]

export function RatingChart() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
      drawChart(ctx, rect.width, rect.height)
    }

    const observer = new ResizeObserver(resizeCanvas)
    observer.observe(canvas)

    return () => observer.disconnect()
  }, [])

  const drawChart = (ctx, width, height) => {
    ctx.clearRect(0, 0, width, height)

    const centerX = width / 2
    const centerY = height / 2
    const radiusOffset = 80

    const positions = ratings.map((_, index) => ({
      x: centerX + Math.cos((index * Math.PI) / 1.5) * radiusOffset,
      y: centerY + Math.sin((index * Math.PI) / 1.5) * radiusOffset,
    }))

    ratings.forEach((rating, index) => {
      const { x, y } = positions[index]
      const radius = rating.size / 2

      // Draw main circle
      ctx.beginPath()
      ctx.arc(x, y, radius, 0, 2 * Math.PI)
      ctx.fillStyle = rating.color
      ctx.fill()

      // Draw inner white circle
      ctx.beginPath()
      ctx.arc(x, y, radius * 0.8, 0, 2 * Math.PI)
      ctx.fillStyle = "white"
      ctx.fill()

      // Draw text
      ctx.fillStyle = "black"
      ctx.font = "bold 18px Arial"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(`${rating.value}%`, x, y - 8)

      ctx.fillStyle = "black"
      ctx.font = "14px Arial"
      ctx.fillText(rating.name, x, y + 15)
    })
  }

  return (
    <div className="chart-container" style={{ width: "100%", height: "300px" }}>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
    </div>
  )
}

import { useState } from "react"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

const data = [
  { name: "Afternoon", value: 40, color: "#5470FF", time: "1pm - 4pm", orders: "1,890 orders" },
  { name: "Evening", value: 32, color: "#8F9BFF", time: "5pm - 8pm", orders: "1,520 orders" },
  { name: "Morning", value: 28, color: "#E2E8F0", time: "8am - 12pm", orders: "1,200 orders" },
]

export function OrderTimeChart() {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleMouseEnter = (_, index) => {
    setActiveIndex(index)
  }

  const handleMouseLeave = () => {
    setActiveIndex(null)  // Set to null instead of 0 to avoid showing only "Afternoon"
  }

  return (
    <div className="chart-container" style={{ position: "relative" }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={0}
            dataKey="value"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                stroke={index === activeIndex ? "#000" : entry.color}  // Highlight active sector
                strokeWidth={index === activeIndex ? 2 : 0}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* Tooltip - Show dynamic data based on activeIndex */}
      {activeIndex !== null && (
        <div className="donut-tooltip">
          <p className="donut-tooltip-title">{data[activeIndex].name}</p>
          <p className="donut-tooltip-subtitle">{data[activeIndex].time}</p>
          <p className="donut-tooltip-value">{data[activeIndex].orders}</p>
        </div>
      )}

      {/* Legend */}
      <div className="legend">
        {data.map((entry, index) => (
          <div key={index} className="legend-item">
            <div className="legend-color" style={{ backgroundColor: entry.color }}></div>
            <div className="legend-label">
              {entry.name} {entry.value}%
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

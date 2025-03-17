import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { day: "01", lastWeek: 1500, last6Days: 1200 },
  { day: "02", lastWeek: 1600, last6Days: 1800 },
  { day: "03", lastWeek: 1700, last6Days: 1700 },
  { day: "04", lastWeek: 1400, last6Days: 1900 },
  { day: "05", lastWeek: 1800, last6Days: 1600 },
  { day: "06", lastWeek: 1600, last6Days: 2200 },
]

export function OrderChart() {
  const renderTooltip = (props) => {
    const { active, payload } = props

    if (active && payload && payload.length) {
      return (
        <div className="tooltip">
          <p className="tooltip-title">Day {payload[0].payload.day}</p>
          {payload.map((entry, index) => (
            <p key={index} className="tooltip-value" style={{ color: entry.color }}>
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      )
    }

    return null
  }

  return (
    <div className="order-chart-container">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" />
          <YAxis hide />
          <Tooltip content={renderTooltip} />
          <Line
            type="monotone"
            dataKey="last6Days"
            name="Last 6 days"
            stroke="#5470FF"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="lastWeek"
            name="Last Week"
            stroke="#E2E8F0"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="legend">
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: "#5470FF" }}></div>
          <div className="legend-label">Last 6 days</div>
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: "#E2E8F0" }}></div>
          <div className="legend-label">Last Week</div>
        </div>
      </div>
    </div>
  )
}


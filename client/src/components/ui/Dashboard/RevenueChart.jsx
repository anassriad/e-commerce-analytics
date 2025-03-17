import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { day: "01", lastWeek: 30, last6Days: 40 },
  { day: "02", lastWeek: 25, last6Days: 35 },
  { day: "03", lastWeek: 20, last6Days: 40 },
  { day: "04", lastWeek: 15, last6Days: 30 },
  { day: "05", lastWeek: 25, last6Days: 45 },
  { day: "06", lastWeek: 30, last6Days: 50 },
  { day: "07", lastWeek: 20, last6Days: 40 },
  { day: "08", lastWeek: 25, last6Days: 35 },
  { day: "09", lastWeek: 15, last6Days: 40 },
  { day: "10", lastWeek: 20, last6Days: 35 },
  { day: "11", lastWeek: 25, last6Days: 45 },
  { day: "12", lastWeek: 30, last6Days: 50 },
]

export function RevenueChart() {
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
    <div className="chart-container">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" />
          <YAxis hide />
          <Tooltip content={renderTooltip} />
          <Bar dataKey="last6Days" name="Last 6 days" fill="#5470FF" radius={[4, 4, 0, 0]} barSize={20} />
          <Bar dataKey="lastWeek" name="Last Week" fill="#E2E8F0" radius={[4, 4, 0, 0]} barSize={20} />
        </BarChart>
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


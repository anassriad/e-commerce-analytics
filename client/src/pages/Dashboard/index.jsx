import { RevenueChart } from "../../components/ui/Dashboard/RevenueChart"
import { OrderTimeChart } from "../..//components/ui/Dashboard/OrderTimeChart"
import { RatingChart } from "@/components/ui/Dashboard/RatingChart"
import { OrderChart } from "@/components/ui/Dashboard/OrderChart"
import { MostOrderedFood } from "@/components/ui/Dashboard/MostOrderedFood"
import "./index.css"

function Dashboard() {
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Dashboard</h1>

      <div className="charts">
        <div className="group">
          <div className="card revenue">
            <div className="card-header">
              <div>
                <div className="card-title">Revenue</div>
                <div className="card-value">IDR 7.852.000</div>
                <div className="trend trend-up">
                  <svg
                    className="trend-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 19V5M12 5L5 12M12 5L19 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  2.1% vs last week
                </div>
                <div className="subtitle">Sales from 1-12 Dec, 2020</div>
              </div>
              <button className="view-report-btn">View Report</button>
            </div>
            <div className="card-content">
              <RevenueChart />
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <div>
                <div className="card-title">Order Time</div>
                <div className="subtitle">From 1-6 Dec, 2020</div>
              </div>
              <button className="view-report-btn">View Report</button>
            </div>
            <div className="card-content">
              <OrderTimeChart />
            </div>
          </div>

        </div>

        <div className="group">
          
          <div className="card s2">
            <div className="card-header">
              <div>
                <div className="card-title">Your Rating</div>
                <div className="subtitle">Lorem ipsum dolor sit amet, consectetur</div>
              </div>
            </div>
            <div className="card-content">
              <RatingChart />
            </div>
          </div>

          <div className="card s2">
            <div className="card-header">
              <div>
                <div className="card-title">Most Ordered Food</div>
                <div className="subtitle">Adipiscing elit, sed do eiusmod tempor</div>
              </div>
            </div>
            <div className="card-content">
              <MostOrderedFood />
            </div>
          </div>
        </div>

        <div className="card full-width">
            <div className="card-header">
              <div>
                <div className="card-title">Order</div>
                <div className="card-value">2.568</div>
                <div className="trend trend-down">
                  <svg
                    className="trend-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 5V19M12 19L5 12M12 19L19 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  2.1% vs last week
                </div>
                <div className="subtitle">Sales from 1-6 Dec, 2020</div>
              </div>
              <button className="view-report-btn">View Report</button>
            </div>
            <div className="card-content">
              <OrderChart />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Dashboard


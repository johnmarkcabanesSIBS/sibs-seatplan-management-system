"use client"

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A bar chart with a label"

const chartData = [
  { month: "CD Connect", desktop: 186 },
  { month: "CD Collect", desktop: 305 },
  { month: "US Visa", desktop: 237 },
  { month: "Channel Assist", desktop: 73 },
  { month: "PFC", desktop: 209 },
  { month: "SDL", desktop: 214 },
  { month: "Yomdel", desktop: 214 },
  { month: "QDS", desktop: 214 },
  { month: "TL", desktop: 214 },
  { month: "OM", desktop: 214 },
  { month: "TA", desktop: 214 },
  { month: "HR", desktop: 214 },
  { month: "PE", desktop: 214 },
  { month: "WFM", desktop: 214 },
  { month: "WebDev", desktop: 214 },
  { month: "IT", desktop: 214 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function ChartBarLabel() {
  const barWidth = 80 // width per month
  const chartWidth = chartData.length * barWidth

  return (
    <Card>
      <CardHeader>
        <CardTitle>Total Accounts</CardTitle>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        {/* Chart container expands horizontally */}
        <div style={{ width: chartWidth, minWidth: "100%" }}>
          <ChartContainer config={chartConfig}>
            <BarChart
              width={chartWidth}
              height={300}
              data={chartData}
              margin={{
                top: 20,
                right: 20,
                left: 0,
                bottom: 20,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8}>
                <LabelList
                  position="top"
                  offset={12}
                  className="fill-foreground"
                  fontSize={12}
                />
              </Bar>
            </BarChart>
          </ChartContainer>
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm"></CardFooter>
    </Card>
  )
}

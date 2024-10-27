"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A bar chart";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
  { month: "July", desktop: 1233 },
  { month: "August", desktop: 1323 },
  { month: "September", desktop: 232 },
  { month: "October", desktop: 453 },
  { month: "November", desktop: 543 },
  { month: "December", desktop: 543 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function ChartAnalyze() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth > 600 ? 600 : 350,
        height: window.innerWidth > 600 ? 350 : 200,
      });
    };

    updateDimensions(); // Set initial dimensions
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <Card className="h-full w-full">
      <CardHeader>
        <CardTitle>Doanh thu từng tháng 2024</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center items-center h-full w-full">
        <ChartContainer config={chartConfig} className="w-full">
          <div className="relative w-full ">
            <BarChart
              width={dimensions.width}
              height={dimensions.height}
              data={chartData}
              className="w-full h-full"
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
            </BarChart>
          </div>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

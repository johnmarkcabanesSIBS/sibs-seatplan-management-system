"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

export default function DashboardTable() {
  const locationData = [
    { no: 1, location: "Right Wing", station: 130, occupancy: 113, vacant: 17, rate: "86.92%" },
    { no: 2, location: "Left Wing", station: 129, occupancy: 125, vacant: 4, rate: "96.90%" },
    { no: 3, location: "IT Room", station: 6, occupancy: 6, vacant: 0, rate: "100.00%" },
    { no: 4, location: "Training Room", station: 21, occupancy: 0, vacant: 21, rate: "0.00%" },
    { no: 5, location: "Lobby", station: 4, occupancy: 4, vacant: 0, rate: "100.00%" },
    { no: 6, location: "Recruitment Area", station: 3, occupancy: 3, vacant: 0, rate: "100.00%" },
    { no: 7, location: "TA and PE Cubicle", station: 6, occupancy: 6, vacant: 0, rate: "100.00%" },
  ];

  const locationTotals = {
    station: locationData.reduce((sum, row) => sum + row.station, 0),
    occupancy: locationData.reduce((sum, row) => sum + row.occupancy, 0),
    vacant: locationData.reduce((sum, row) => sum + row.vacant, 0),
    rate: (
      (locationData.reduce((s, r) => s + r.occupancy, 0) /
        locationData.reduce((s, r) => s + r.station, 0)) * 100
    ).toFixed(2) + "%",
  };

  const accountData = [
    { no: 1, account: "CD Connect", seats: 0 },
    { no: 2, account: "CD Collect", seats: 0 },
    { no: 3, account: "US Visa", seats: 50 },
    { no: 4, account: "Channel Assist", seats: 30 },
    { no: 5, account: "PFC", seats: 25 },
    { no: 6, account: "SDL", seats: 20 },
    { no: 7, account: "CFAS", seats: 15 },
    { no: 8, account: "Yomdel", seats: 10 },
    { no: 9, account: "TL", seats: 8 },
    { no: 10, account: "QDS", seats: 12 },
    { no: 11, account: "OM", seats: 6 },
    { no: 12, account: "HR", seats: 5 },
    { no: 13, account: "TA", seats: 4 },
    { no: 14, account: "WFM", seats: 5 },
    { no: 15, account: "PE", seats: 3 },
    { no: 16, account: "WebDev", seats: 7 },
    { no: 17, account: "IT", seats: 10 },
  ];

  const accountTotal = accountData.reduce((sum, row) => sum + row.seats, 0);

  const accountIssuesData = [
    { account: "CD Connect", issues: 0 },
    { account: "CD Collect", issues: 0 },
    { account: "US Visa", issues: 5 },
    { account: "Channel Assist", issues: 3 },
    { account: "PFC", issues: 2 },
    { account: "SDL", issues: 1 },
    { account: "CFAS", issues: 0 },
    { account: "Yomdel", issues: 0 },
    { account: "TL", issues: 0 },
    { account: "QDS", issues: 0 },
    { account: "OM", issues: 0 },
    { account: "HR", issues: 0 },
    { account: "TA", issues: 0 },
    { account: "WFM", issues: 0 },
    { account: "PE", issues: 0 },
    { account: "WebDev", issues: 0 },
    { account: "IT", issues: 0 },
  ];

  // Approximate row height in pixels (adjust if needed)
  const rowHeight = 44
  const totalRows = accountData.length + 1; // +1 for total row
  const chartHeight = totalRows * rowHeight;

  return (
    <div className="w-full space-y-8 px-4 font-[Roboto_Condensed] font-bold text-[#042C51]">
      {/* Top: Location Summary Table */}
      <div>
        <h2 className="text-xl mb-4">Location Summary</h2>
        <div className="w-full overflow-x-auto rounded-xl border p-4 bg-white">
          <Table className="min-w-full">
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead className="w-16 text-center">No.</TableHead>
                <TableHead>Location</TableHead>
                <TableHead className="text-center">Station Count</TableHead>
                <TableHead className="text-center">Occupancy</TableHead>
                <TableHead className="text-center">Vacant</TableHead>
                <TableHead className="text-center">Occupancy Rate</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {locationData.map((row) => (
                <TableRow key={row.no}>
                  <TableCell className="text-center">{row.no}</TableCell>
                  <TableCell>{row.location}</TableCell>
                  <TableCell className="text-center">{row.station}</TableCell>
                  <TableCell className="text-center">{row.occupancy}</TableCell>
                  <TableCell className="text-center">{row.vacant}</TableCell>
                  <TableCell className="text-center">{row.rate}</TableCell>
                </TableRow>
              ))}
              <TableRow className="bg-gray-50">
                <TableCell />
                <TableCell>Total</TableCell>
                <TableCell className="text-center">{locationTotals.station}</TableCell>
                <TableCell className="text-center">{locationTotals.occupancy}</TableCell>
                <TableCell className="text-center">{locationTotals.vacant}</TableCell>
                <TableCell className="text-center">{locationTotals.rate}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Account Table */}
        <div className="w-full lg:w-1/3">
          <h2 className="text-xl mb-4">Account Seat Allocation</h2>
          <div className="overflow-x-auto rounded-xl border p-4 bg-white">
            <Table className="min-w-[300px]">
              <TableHeader>
                <TableRow className="bg-gray-100">
                  <TableHead className="w-16 text-center">No.</TableHead>
                  <TableHead>Account</TableHead>
                  <TableHead className="text-center">Seat Count</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {accountData.map((row) => (
                  <TableRow key={row.no} className="h-10">
                    <TableCell className="text-center">{row.no}</TableCell>
                    <TableCell>{row.account}</TableCell>
                    <TableCell className="text-center">{row.seats}</TableCell>
                  </TableRow>
                ))}
                <TableRow className="bg-gray-50 h-10">
                  <TableCell />
                  <TableCell>Total</TableCell>
                  <TableCell className="text-center">{accountTotal}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Seat Requests */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-xl mb-4">Seat Requests Overview</h2>
          <div className="w-full bg-white rounded-xl p-4 border" style={{ height: chartHeight }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={accountIssuesData}
                margin={{ top: 20, right: 20, left: 60, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  type="number"
                  stroke="#042C51"
                  tick={{ fontFamily: "Roboto Condensed", fontWeight: 700 }}
                />
                <YAxis
                  type="category"
                  dataKey="account"
                  stroke="#042C51"
                  tick={{ fontFamily: "Roboto Condensed", fontWeight: 700 }}
                  width={150}
                />
                <Tooltip
                  contentStyle={{
                    fontFamily: "Roboto Condensed",
                    fontWeight: 700,
                    color: "#042C51",
                  }}
                />
                <Bar dataKey="issues" fill="#FF5C28" name="Seat Requests">
                  <LabelList dataKey="issues" position="right" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

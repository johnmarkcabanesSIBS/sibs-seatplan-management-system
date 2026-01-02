"use client";

import { useState } from "react";
import { SeatBookingForm } from "../seatform/SeatBookingForm";

export default function RightWing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSeat, setSelectedSeat] = useState<{
    group: number;
    label: string;
    pcLabel: string;
    side?: string;
  } | null>(null);

  const handleBoxClick = (
    group: number,
    label: string,
    pcLabel: string,
    side?: string
  ) => {
    setSelectedSeat({ group, label, pcLabel, side });
    setIsModalOpen(true);
  };

  const handleBookingSubmit = (seatInfo: any, customerName: string) => {
    console.log("Booking:", seatInfo, "Customer:", customerName);
    // Here you can update your seat state or send API request
  };

  const boxClass =
    "border border-gray-400 rounded-xl bg-gray-50 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200 active:scale-95 transition-all duration-200 shadow-sm w-[22vw] h-[10vh] xs:w-[20vw] sm:w-[14vw] md:w-[8vw] lg:w-[6vw] min-w-[60px] min-h-[45px] max-w-[120px] max-h-[70px]";

  const renderRow = (group: number) => (
    <div className="flex flex-wrap justify-center gap-[2vw] sm:gap-[1vw] w-full">
      {Array.from({ length: 8 }).map((_, i) => {
        const label = "Vacant";
        const pcLabel = "No PC";

        return (
          <div
            key={i}
            onClick={() => handleBoxClick(group, label, pcLabel)}
            className={boxClass}
          >
            <span className="text-[3vw] sm:text-xs md:text-sm font-semibold">
              {label}
            </span>
            <span className="text-[2.5vw] sm:text-[10px] md:text-xs text-gray-500">
              {pcLabel}
            </span>
          </div>
        );
      })}
    </div>
  );

  const renderSideBox = (group: number, side: "left" | "right") => {
    const label = "Vacant";
    const pcLabel = "No PC";

    return (
      <div
        onClick={() => handleBoxClick(group, label, pcLabel, side)}
        className={boxClass}
      >
        <span className="text-[3vw] sm:text-xs md:text-sm font-semibold">
          {label}
        </span>
        <span className="text-[2.5vw] sm:text-[10px] md:text-xs text-gray-500">
          {pcLabel}
        </span>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 px-3 sm:px-6 py-6 w-full min-h-screen bg-white">
      <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-[#042C51] mb-4 text-center leading-tight">
        Right Wing
      </h2>

      {Array.from({ length: 7 }).map((_, group) => (
        <div
          key={group}
          className="flex flex-col md:flex-row items-center justify-center gap-[4vw] sm:gap-[2vw] flex-wrap w-full max-w-[95vw]"
        >
          {renderSideBox(group + 1, "left")}
          <div className="flex flex-col items-center gap-[2vw] sm:gap-[1vw] w-full md:w-auto">
            {renderRow(group + 1)}
            {renderRow(group + 1)}
          </div>
          {renderSideBox(group + 1, "right")}
        </div>
      ))}

      {/* Seat Booking Form */}
      <SeatBookingForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        seatInfo={selectedSeat}
        onSubmit={handleBookingSubmit}
      />
    </div>
  );
}

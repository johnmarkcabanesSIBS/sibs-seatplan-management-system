"use client";

import { useState } from "react";
import { SeatBookingForm } from "../seatform/SeatBookingForm";

export default function RecruitmentArea() {
  const [selectedSeat, setSelectedSeat] = useState<{ group: number; row?: number; index?: number } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBoxClick = (group: number, row: number, index: number) => {
    setSelectedSeat({ group, row, index });
    setIsModalOpen(true);
    console.log(`Clicked seat at Group ${group}, Row ${row}, Index ${index}`);
  };

  const handleBookingSubmit = (seatInfo: any, customerName: string) => {
    console.log("Booking:", seatInfo, "Customer:", customerName);
  };

  const boxClass =
    "border border-gray-400 rounded-xl bg-gray-50 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200 active:scale-95 transition-all duration-200 shadow-sm w-[22vw] h-[10vh] xs:w-[20vw] sm:w-[14vw] md:w-[8vw] lg:w-[6vw] min-w-[60px] min-h-[45px] max-w-[120px] max-h-[70px]";

  return (
    <div className="flex flex-col items-center justify-start gap-8 px-3 sm:px-6 pt-8 w-full min-h-screen bg-white">
      <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-[#042C51] mb-4 text-center leading-tight">
        Recruitment Area
      </h2>

      {/* Top row: 3 horizontal seats */}
      <div className="flex flex-row justify-center items-center gap-[3vw] sm:gap-[1.5vw]">
        {Array.from({ length: 3 }).map((_, seatIndex) => (
          <div
            key={seatIndex}
            onClick={() => handleBoxClick(1, 1, seatIndex)}
            className={boxClass}
          >
            {/* Visual placeholder */}
            <span className="text-[3vw] sm:text-xs md:text-sm font-semibold">
              Vacant
            </span>
            <span className="text-[2.5vw] sm:text-[10px] md:text-xs text-gray-500">
              No PC
            </span>
          </div>
        ))}
      </div>

      {/* Bottom row: 1 seat centered */}
      <div className="flex justify-center items-center mt-4">
        <div
          onClick={() => handleBoxClick(1, 2, 0)}
          className={boxClass}
        >
          <span className="text-[3vw] sm:text-xs md:text-sm font-semibold">
            Vacant
          </span>
          <span className="text-[2.5vw] sm:text-[10px] md:text-xs text-gray-500">
            No PC
          </span>
        </div>
      </div>

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

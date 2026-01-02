"use client";

import { useState } from "react";
import { SeatBookingForm } from "../seatform/SeatBookingForm";

export default function TaAndPeCubicle() {
  const [selectedSeat, setSelectedSeat] = useState<{ group: number; column?: number; index?: number } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBoxClick = (group: number, column: number, index: number) => {
    setSelectedSeat({ group, column, index });
    setIsModalOpen(true);
    console.log(`Clicked seat at Group ${group}, Column ${column}, Index ${index}`);
  };

  const handleBookingSubmit = (seatInfo: any, customerName: string) => {
    console.log("Booking:", seatInfo, "Customer:", customerName);
  };

  const boxClass =
    "border border-gray-400 rounded-xl bg-gray-50 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200 active:scale-95 transition-all duration-200 shadow-sm w-[22vw] h-[10vh] xs:w-[20vw] sm:w-[14vw] md:w-[8vw] lg:w-[6vw] min-w-[60px] min-h-[45px] max-w-[120px] max-h-[70px]";

  // PE Cubicle seats
  const topGroupCounts = [2, 1, 1];

  return (
    <div className="flex flex-col items-center justify-start gap-12 px-3 sm:px-6 pt-8 w-full min-h-screen bg-white">
      <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-[#042C51] mb-4 text-center leading-tight">
        TA and PE Cubicle
      </h2>

      {/* PE Cubicle */}
      <div className="flex flex-col items-center gap-4 w-full">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#042C51] mb-2 text-center">
          PE Cubicle
        </h3>
        <div className="flex flex-row justify-center items-end gap-[3vw] sm:gap-[1.5vw] w-full md:w-auto flex-wrap">
          {topGroupCounts.map((seatCount, colIndex) => (
            <div
              key={colIndex}
              className="flex flex-col items-center justify-end gap-[2vw] sm:gap-[1vw]"
              style={{ minHeight: "150px" }}
            >
              {Array.from({ length: seatCount }).map((_, seatIndex) => (
                <div
                  key={seatIndex}
                  onClick={() => handleBoxClick(1, colIndex + 1, seatIndex)}
                  className={boxClass}
                >
                  <span className="text-[3vw] sm:text-xs md:text-sm font-semibold">
                    Vacant
                  </span>
                  <span className="text-[2.5vw] sm:text-[10px] md:text-xs text-gray-500">
                    No PC
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* TA Cubicle */}
      <div className="flex flex-col items-center gap-4 w-full">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#042C51] mb-2 text-center">
          TA Cubicle
        </h3>
        <div className="flex flex-row justify-center items-center gap-[2vw] sm:gap-[1vw] mt-2">
          {Array.from({ length: 4 }).map((_, seatIndex) => (
            <div
              key={seatIndex}
              onClick={() => handleBoxClick(2, seatIndex + 1, 0)}
              className={boxClass}
            >
              <span className="text-[3vw] sm:text-xs md:text-sm font-semibold">
                Vacant
              </span>
              <span className="text-[2.5vw] sm:text-[10px] md:text-xs text-gray-500">
                No PC
              </span>
            </div>
          ))}
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

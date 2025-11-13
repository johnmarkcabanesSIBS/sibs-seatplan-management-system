"use client";

export default function ItRoom() {
  const handleBoxClick = (
    group: number,
    column: number,
    index: number
  ) => {
    console.log(`Clicked seat at Group ${group}, Column ${column}, Index ${index}`);
  };

  // Unified box style (same as your Right Wing)
  const boxClass =
    "border border-gray-400 rounded-xl bg-gray-50 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200 active:scale-95 transition-all duration-200 shadow-sm w-[22vw] h-[10vh] xs:w-[20vw] sm:w-[14vw] md:w-[8vw] lg:w-[6vw] min-w-[60px] min-h-[45px] max-w-[120px] max-h-[70px]";

  // Seats per column
  const columnSeatCounts = [3, 3, 1, 4];

  return (
    <div className="flex flex-col items-center justify-start gap-8 px-3 sm:px-6 pt-8 w-full min-h-screen bg-white">
      <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-[#042C51] mb-4 text-center leading-tight">
        IT Room
      </h2>

      {/* Seat columns only (no side boxes) */}
      <div className="flex flex-row justify-center items-end gap-[3vw] sm:gap-[1.5vw] w-full md:w-auto flex-wrap">
        {columnSeatCounts.map((seatCount, colIndex) => (
          <div
            key={colIndex}
            className="flex flex-col items-center justify-end gap-[2vw] sm:gap-[1vw]"
            style={{
              height: "auto",
              minHeight: "240px", // adjust this for more/less drop effect
            }}
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
  );
}

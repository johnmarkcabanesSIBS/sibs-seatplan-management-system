"use client";

export default function TrainingRoom() {
  const handleBoxClick = (group: number, col: number, row: number) => {
    console.log(`Clicked seat at Group ${group}, Column ${col}, Row ${row}`);
  };

  const boxClass =
    "border border-gray-400 rounded-xl bg-gray-50 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200 active:scale-95 transition-all duration-200 shadow-sm w-[22vw] h-[10vh] xs:w-[20vw] sm:w-[14vw] md:w-[8vw] lg:w-[6vw] min-w-[60px] min-h-[45px] max-w-[120px] max-h-[70px]";

  const renderSeat = (group: number, col: number, row: number) => (
    <div
      key={row}
      className={boxClass}
      onClick={() => handleBoxClick(group, col, row)}
    >
      <span className="text-[3vw] sm:text-xs md:text-sm font-semibold text-center">
        Vacant
      </span>
      <span className="text-[2.5vw] sm:text-[10px] md:text-xs text-gray-500 text-center">
        No PC
      </span>
    </div>
  );

  const renderColumn = (group: number, col: number) => (
    <div className="flex flex-col gap-[2vw] sm:gap-[1vw]" key={col}>
      {Array.from({ length: 6 }).map((_, row) => renderSeat(group, col, row))}
    </div>
  );

  const renderGroup = (group: number) => (
    <div
      className="flex flex-row gap-[4vw] sm:gap-[2vw] items-start justify-center"
      key={group}
    >
      {Array.from({ length: 2 }).map((_, col) => renderColumn(group, col))}
    </div>
  );

  // Two extra seats at the bottom
  const renderBottomSeats = () => (
    <div className="flex flex-row gap-[4vw] sm:gap-[2vw] items-center justify-center mt-4">
      {Array.from({ length: 2 }).map((_, i) => renderSeat(0, i, 0))}
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-start gap-4 px-3 sm:px-6 pt-4 w-full min-h-screen bg-white">
      {/* Title */}
      <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-[#042C51] mb-2 text-center leading-tight">
        Training Room
      </h2>

      {/* Top groups */}
      <div className="flex flex-row gap-[6vw] flex-wrap justify-center w-full items-start">
        {renderGroup(1)}
        {renderGroup(2)}
      </div>

      {/* Bottom 2 seats */}
      {renderBottomSeats()}
    </div>
  );
}

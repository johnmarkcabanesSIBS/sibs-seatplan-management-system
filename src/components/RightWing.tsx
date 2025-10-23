"use client";

export default function RightWing() {
  const handleBoxClick = (group: number, row: number, index: number, side?: string) => {
    if (side) {
      console.log(`Clicked ${side} box at Group ${group}`);
    } else {
      console.log(`Clicked seat at Group ${group}, Row ${row}, Index ${index}`);
    }
  };

  const boxClass =
    "border border-gray-400 rounded-md bg-gray-50 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200 transition w-16 h-10 sm:w-20 sm:h-12 md:w-24 md:h-14";

  const renderRow = (group: number, row: number) => (
    <div className="flex flex-wrap justify-center gap-2">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          onClick={() => handleBoxClick(group, row, i)}
          className={boxClass}
        >
          <span className="text-[10px] sm:text-xs font-semibold">Vacant</span>
          <span className="text-[8px] sm:text-[10px] text-gray-500">No PC</span>
        </div>
      ))}
    </div>
  );

  const renderSideBox = (group: number, side: "left" | "right") => (
    <div onClick={() => handleBoxClick(group, 0, 0, side)} className={boxClass}>
      <span className="text-[10px] sm:text-xs font-semibold">Vacant</span>
      <span className="text-[8px] sm:text-[10px] text-gray-500">No PC</span>
    </div>
  );

  return (
    <div className="flex flex-col items-center gap-8 p-2 sm:p-4">
      {/* Title */}
      <h2 className="text-xl sm:text-7xl font-bold text-[#042C51] mb-2">Right Wing</h2>

      {Array.from({ length: 7 }).map((_, group) => (
        <div
          key={group}
          className="flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6"
        >
          {/* Left side box */}
          {renderSideBox(group + 1, "left")}

          {/* Seat rows */}
          <div className="flex flex-col items-center gap-2 sm:gap-3">
            {renderRow(group + 1, 1)}
            {renderRow(group + 1, 2)}
          </div>

          {/* Right side box */}
          {renderSideBox(group + 1, "right")}
        </div>
      ))}
    </div>
  );
}


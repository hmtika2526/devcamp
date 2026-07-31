import { useState } from "react";

const typeOptions = [
  { label: "Semua", value: "all" },
  { label: "Peserta", value: "peserta" },
  { label: "Instruktor", value: "instruktor" },
];

function TypeAccordion({
  typeFilter,
  setTypeFilter,
}: {
  typeFilter: string;
  setTypeFilter: (val: string) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-2 w-full">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left font-bold text-lg bg-[#1e1e2f] p-4 rounded-lg hover:bg-[#2a2a3f] transition-all flex justify-between items-center"
      >
        <span>
          Filter :{" "}
          {typeOptions.find((opt) => opt.value === typeFilter)?.label || "Semua"}
        </span>
        <span>{open ? "▲" : "▼"}</span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[500px] mt-4" : "max-h-0"
        }`}
      >
        <div className="space-y-3 pl-4 border-l-4 border-blue-500">
          {typeOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                setTypeFilter(opt.value);
                setOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 rounded-lg bg-[#1b1b2b] text-white hover:bg-[#2e53b0] transition ${
                typeFilter === opt.value ? "border border-[#2e53b0]" : ""
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TypeAccordion;

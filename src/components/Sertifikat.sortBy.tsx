import { useState } from "react";

const sortOptions = [
  { label: "Default (Search)", value: "default" },
  { label: "Nama (A-Z)", value: "nama" },
  { label: "Nomor Sertifikat", value: "nomor" },
];

function SortAccordion({ sortBy, setSortBy }: { sortBy: string; setSortBy: (val: string) => void }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-2 w-full">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left font-bold text-lg bg-[#1e1e2f] p-4 rounded-lg hover:bg-[#2a2a3f] transition-all flex justify-between items-center"
      >
        <span>Urutkan: {sortOptions.find((s) => s.value === sortBy)?.label}</span>
        <span>{open ? "▲" : "▼"}</span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[500px] mt-4" : "max-h-0"
        }`}
      >
        <div className="space-y-3 pl-4 border-l-4 border-blue-500">
          {sortOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                setSortBy(opt.value);
                setOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 rounded-lg bg-[#1b1b2b] text-white hover:bg-[#2e53b0] transition ${
                sortBy === opt.value ? "border border-[#2e53b0]" : ""
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

export default SortAccordion;
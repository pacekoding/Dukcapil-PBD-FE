interface FilterSelectProps {
  region: string;
  setRegion: (value: string) => void;
}

export default function FilterSelect({ region, setRegion }: FilterSelectProps) {
  const options = [
    { value: "provinsi", label: "Provinsi Papua Barat Daya" },
    { value: "kota-sorong", label: "Kota Sorong" },
    { value: "kabupaten-sorong", label: "Kabupaten Sorong" },
    { value: "kabupaten-sorong-selatan", label: "Kabupaten Sorong Selatan" },
    { value: "kabupaten-raja-ampat", label: "Kabupaten Raja Ampat" },
    { value: "kabupaten-maybrat", label: "Kabupaten Maybrat" },
    { value: "kabupaten-tambrauw", label: "Kabupaten Tambrauw" },
  ];

  return (
    <select
      value={region}
      onChange={(e) => setRegion(e.target.value)}
      className="border border-gray-300 rounded-md px-4 py-2 text-sm md:text-base 
                 focus:outline-none focus:ring-2 focus:ring-dukcapil-accent 
                 transition w-full md:w-2/3 mx-auto"
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}

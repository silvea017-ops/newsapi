export default function FilterButton({ active, label, onChange }) {
  return (
    <button
      onClick={onChange}
      className={`rounded-full 
    px-4 py-2 text-sm 
    font-semibold transition
     ${
       active
         ? "bg-slate-800 text-white shadow-md"
         : "border border-slate-300 text-slate-600 hover:border-slate-500 hover:text-slate-900"
     }
     `}
    >
      {label}
    </button>
  );
}

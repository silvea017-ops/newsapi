import FilterButton from "./FilterButton";

export default function FilterButtons({ callStatus, handleChangeStatus }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
      <FilterButton
        active={callStatus === "top-headlines"}
        label={"최신뉴스"}
        onChange={() => handleChangeStatus("top-headlines")}
      />
      <FilterButton
        active={callStatus === "everything"}
        label={"뉴스검색"}
        onChange={() => handleChangeStatus("everything")}
      />
    </div>
  );
}

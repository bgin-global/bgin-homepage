import ArrowRight from "../ArrowRight";

export default function ViewAllButton() {
    return (
        <div className="flex justify-center items-center gap-2 px-6 py-4 rounded-[6px] text-base font-semibold font-Inter min-w-[150px]">
            <div>View All</div>
            <ArrowRight />
        </div>
    )
}
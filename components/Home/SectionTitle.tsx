import ViewAllButton from "./ViewAllButton";

interface Props {
    title: string;
}

export default function SectionTitle(props: Props) {
    return (
        <div className="w-full flex justify-between items-start text-black max-w-4xl m-auto pt-32 pb-12 px-4 lg:px-0">
            <div className="lg:text-6xl text-4xl lg:leading-[77px] leading-60px font-medium font-FamiljenGrotesk">
                {props.title}
            </div>
            {/* <ViewAllButton /> */}
        </div>
    )
}
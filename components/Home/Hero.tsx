import Image from "next/image";
import ArrowRight from "../ArrowRight";
import Link from "next/link";

interface Props {
    type: 1 | 2;
}

const CATCH_COPY = {
    TYPE_1: `
    We are devoted to establishing a common language, fostering
    academic roots, and consistently providing trustworthy resources
    for sustainable blockchain development.
    `,
    TYPE_2: `
    BGIN, short for Blockchain Governance Initiative Network, is
    shaping the future of blockchain. As this technology transforms
    numerous sectors, our current financial systems and regulations
    must adapt. BGIN leads the charge in creating an open, global
    platform where all stakeholders can engage in dialogue, build
    shared understanding, and work together for a thriving ecosphere.
    We are devoted to establishing a common language, fostering
    academic roots, and consistently providing trustworthy resources
    for sustainable blockchain development.
    `
}

export default function Hero({ type }: Props) {
    return (
        <div className="flex-col flex items-start lg:pt-6 pb-16 h-fit max-w-4xl m-auto">
            <Image
                alt="Hero Image"
                src="/images/Hero/Image.svg"
                className="hidden lg:block w-[100%] h-[200px] rounded-2xl"
                width={100}
                height={100}
                style={{
                    objectFit: "cover",
                }}
            />
            <Image
                alt="Hero Image"
                src="/images/Hero/Image_SP.svg"
                className="lg:hidden w-screen h-[444px]"
                width={100}
                height={100}
                style={{
                    objectFit: "cover",
                }}
            />

            <div className="flex-col w-full flex items-center gap-12 pt-16">
                <div className="flex-col flex items-center gap-2 text-center text-black mx-4">
                    <div className="text-4xl lg:text-5xl leading-[48px] lg:leading-[77px] font-medium font-FamiljenGrotesk">
                        Building the Blockchain Future Through Inclusive Collaboration
                    </div>
                    <div className="text-base leading-[19px] font-Inter lg:max-w-[750px]">
                        {type === 1 ? CATCH_COPY.TYPE_1 : CATCH_COPY.TYPE_2}
                    </div>
                </div>
                {type === 1 ??
                    <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-6 text-base font-semibold font-Inter bgin-button">
                        <a
                            href="https://bgin.discourse.group/"
                            className="bg-black flex justify-center items-center gap-2 px-6 py-4 rounded-full text-white"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div>Join Our Community</div>
                            <ArrowRight size="sm" color="white" />
                        </a>
                        <Link href="/about">
                            <div className="flex justify-center items-center gap-2 px-6 py-4 rounded-full border border-[#2d2d2d] text-[#2d2d2d]">
                                <div>Learn About Us</div>
                                <ArrowRight size="sm" color="black" />
                            </div>
                        </Link>
                    </div>
                }
            </div>
        </div>
    )
}
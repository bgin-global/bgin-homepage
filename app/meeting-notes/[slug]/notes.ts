import { MeetingNote } from "@/lib/fetch-meeting-notes";

export const getMeetingNotes = (slug: string): MeetingNote[] => {
    if (slug === "block9") return meetingNoteMetadata.block9;
    return meetingNoteMetadata.block10;
}

export const meetingNoteMetadata = {
    block9: [
        {
            id: "block9_Accountable_Wallet",
            date: "2023-11-21",
            title: "Block#9 IKPWG Interactive Workshop Session 2: Accountable Wallet",
            tag: ["block"],
            description: "",
            url: "https://drive.google.com/file/d/1pfrobU0Yadns2IuBcdAYUtuf-ow9zRsr/view?usp=sharing",
        },
        {
            id: "block9_CBDC",
            date: "2023-11-20",
            title: "Block#9 DTWG Interactive Workshop Session 3: CBDC and Privacy",
            tag: ["block"],
            description: "",
            url: "https://drive.google.com/file/d/1XNeAwuwDTJg37gS2CbJoE97po_BahSOf/view?usp=sharing",
        },
        {
            id: "block9_Global_Discourse",
            date: "2023-11-20",
            title: "Block#9 IKPWG Interactive Workshop Session 3: Digital Identity - a global discourse",
            tag: ["block"],
            description: "",
            url: "https://drive.google.com/file/d/1EIq3WaUWEUgqux5EZ_8XZm4TUr3Bbw6L/view?usp=sharing",
        },
        {
            id: "block9_Stablecoin",
            date: "2023-11-20",
            title: "Block#9 DTWG Interactive Workshop Session 1: Points of Failure of Stablecoins",
            tag: ["block"],
            description: "",
            url: "https://drive.google.com/file/d/1Ltfl_u8IoCHMY8dxkNbDXnRGnEMAEZsA/view?usp=sharing",
        },
        {
            id: "block9_AI",
            date: "2023-11-20",
            title: "Block#9 DTWG Interactive Workshop Session 4: Smart Contract Security, Governance, and Impact of AI",
            tag: ["block"],
            description: "",
            url: "https://drive.google.com/file/d/19cf8L0nqDGnbuDVCuNmRJUFbpVGp6H4R/view?usp=sharing",
        },
        {
            id: "block9_Transparency",
            date: "2023-11-20",
            title: "Block#9 DTWG Interactive Workshop Session 2: Transparency of DApps and Sound DeFi",
            tag: ["block"],
            description: "",
            url: "https://drive.google.com/file/d/1TSY5HiZ3QdmE_1nkUp0OYYLeNVKvGYWR/view?usp=sharing",
        },
        {
            id: "block9_World_Coin",
            date: "2023-11-21",
            title: "Block#9 IKPWG Interactive Workshop Session 3: Token and Privacy Impact: World Coin - Biometric Information",
            tag: ["block"],
            description: "",
            url: "https://drive.google.com/file/d/1wkrMb4xQCgX5Ni1Z6Cs9g5DPDtLEl0Po/view?usp=sharing",
        },
        {
            id: "block9_ZKP",
            date: "2023-11-21",
            title: "Block#9 IKPWG Interactive Workshop Session 1: ZKP and its Applications",
            tag: ["block"],
            description: "",
            url: "https://drive.google.com/file/d/1dP-mGSTS7H7y3nYKzJeSGvIjc76narFV/view?usp=sharing",
        },
    ],
    block10: [
        {
            id: "block10_day1_Financial_Stability_Challenges",
            date: "2024-03-03",
            title: "Block#10 Financial Stability Challenges",
            tag: ["block", "day1"],
            description: "",
            url: "https://docs.google.com/document/d/1sDKK70YJ4wiG_T6elX5Yl02GCaL83KDd/edit?usp=sharing&ouid=106857294797183271466&rtpof=true&sd=true",
        },
        {
            id: "block10_day1_Internet_Governance",
            date: "2024-03-03",
            title: "Block#10 Internet Governance",
            tag: ["block", "day1"],
            description: "",
            url: "https://docs.google.com/document/d/1u68c0nmsmeUK88DYOoQsBpvkTZvk1L6P/edit?usp=sharing&ouid=106857294797183271466&rtpof=true&sd=true",
        },
        {
            id: "block10_day1_Privacy_vs_Discoverability",
            date: "2024-03-03",
            title: "Block#10 Privacy vs Discoverability",
            tag: ["block", "day1"],
            description: "",
            url: "https://docs.google.com/document/d/1w1m9ATgfV9HiUzmOe61l6EpjbQ1F6RKS/edit?usp=sharing&ouid=106857294797183271466&rtpof=true&sd=true",
        },

        {
            id: "block10_day2_Harmonization_of_CBDC_Deposit_Tokens",
            date: "2024-03-04",
            title: "Block#10 Harmonization of CBDC, Deposit Tokens, Stablecoins, and DeFi",
            tag: ["block", "day2"],
            description: "",
            url: "https://docs.google.com/document/d/1DZqXpL2-Wfx4pQj__KF1Ag9gqB1zDvFo/edit?usp=sharing&ouid=106857294797183271466&rtpof=true&sd=true",
        },
        {
            id: "block10_day2_Illicit_Activity",
            date: "2024-03-04",
            title: "Block#10 Illicit Activity",
            tag: ["block", "day2"],
            description: "",
            url: "https://docs.google.com/document/d/1X1VP4ElNH9EhYNIltCt6idXIBJxACv0W/edit?usp=sharing&ouid=106857294797183271466&rtpof=true&sd=true",
        },
        {
            id: "block10_day2_Smart_Contract_Security",
            date: "2024-03-04",
            title: "Block#10 Smart Contract Security",
            tag: ["block", "day2"],
            description: "",
            url: "https://docs.google.com/document/d/1RkENW-r83hZhd_nHALIETCAVRPPupZEO/edit?usp=sharing&ouid=106857294797183271466&rtpof=true&sd=true",
        },
        {
            id: "block10_day2_The_Mutual_Impact_and_Improved_Outcomes",
            date: "2024-03-04",
            title: "Block#10 The Mutual Impact and Improved Outcomes of Blockchain & AI as Synergistic Technologies",
            tag: ["block", "day2"],
            description: "",
            url: "https://docs.google.com/document/d/1FkLUjEwYUvBy47AUfmmWzMKMFZauZg8d/edit?usp=sharing&ouid=106857294797183271466&rtpof=true&sd=true",
        },
        {
            id: "block10_day2_The_Role_of_DAO",
            date: "2024-03-04",
            title: "Block#10 The Role of DAO in the Modern World",
            tag: ["block", "day2"],
            description: "",
            url: "https://docs.google.com/document/d/1_m88fTOFvifDtrXQxV17DkV98VJOZTud/edit?usp=sharing&ouid=106857294797183271466&rtpof=true&sd=true",
        },
        {
            id: "block10_day2_Tokenization_and_Real-World_Assets",
            date: "2024-03-04",
            title: "Block#10 Tokenization and Real-World Assets",
            tag: ["block", "day2"],
            description: "",
            url: "https://docs.google.com/document/d/1G7RaiBUjdRd0Hq14R_bfWFw3jplUbAq9/edit?usp=sharing&ouid=106857294797183271466&rtpof=true&sd=true",
        },
        {
            id: "block10_day2_Transparency",
            date: "2024-03-04",
            title: "Block#10 Transparency of dApps and Sound DeFi",
            tag: ["block", "day2"],
            description: "",
            url: "https://docs.google.com/document/d/1Y1dqM300l3rVz4FiTtdTPFG1fxPsXkVt/edit?usp=sharing&ouid=106857294797183271466&rtpof=true&sd=true",
        },

        {
            id: "block10_day3_On-chain_Analysis",
            date: "2024-03-05",
            title: "Block#10 Challenges and Innovations in On-chain Analysis",
            tag: ["block", "day3"],
            description: "",
            url: "https://docs.google.com/document/d/1u68c0nmsmeUK88DYOoQsBpvkTZvk1L6P/edit?usp=sharing&ouid=106857294797183271466&rtpof=true&sd=true",
        },
        {
            id: "block10_day3_IKP_Wrap-Up",
            date: "2024-03-05",
            title: "Block#10 IKP Day 3 Wrap-Up Session",
            tag: ["block", "day3"],
            description: "",
            url: "https://docs.google.com/document/d/1Uj_eovWiMDbc-PQlkPMEldl3hTbUKcsD/edit?usp=sharing&ouid=106857294797183271466&rtpof=true&sd=true",
        },
        {
            id: "block10_day3_Incident_Response",
            date: "2024-03-05",
            title: "Block#10 Incident Response and Cybersecurity",
            tag: ["block", "day3"],
            description: "",
            url: "https://docs.google.com/document/d/1HH0trpBQLSoZdBTQqUfebM92AKJnHIU5/edit?usp=sharing&ouid=106857294797183271466&rtpof=true&sd=true",
        },
        {
            id: "block10_day3_Layer_2_Governance_Keynote",
            date: "2024-03-05",
            title: "Block#10 Layer 2 Governance: Keynote",
            tag: ["block", "day3"],
            description: "",
            url: "https://docs.google.com/document/d/185CYnbS1OoT92XPWL06jSSBXt59dzEU1/edit?usp=sharing&ouid=106857294797183271466&rtpof=true&sd=true",
        },
        {
            id: "block10_day3_Layer2_Governance_Roundtable",
            date: "2024-03-05",
            title: "Block#10 Layer2 Governance Roundtable",
            tag: ["block", "day3"],
            description: "",
            url: "https://docs.google.com/document/d/1d0DRCq74AknHKGik9D1ap6l7TcAn4GjW/edit?usp=sharing&ouid=106857294797183271466&rtpof=true&sd=true",
        },
        {
            id: "block10_day3_Accountable_Wallet",
            date: "2024-03-05",
            title: "Block#10 Accountable Wallet and Privacy Pools",
            tag: ["block", "day3"],
            description: "",
            url: "https://docs.google.com/document/d/1RVnrbUY6NOAQa_ZnJmfX9XJkSiPM3XCO/edit?usp=sharing&ouid=106857294797183271466&rtpof=true&sd=true",
        },
        {
            id: "block10_day3_SBT_Paper",
            date: "2024-03-05",
            title: "Block#10 SBT Paper Part 2, On-chain identity, reputation and attestations",
            tag: ["block", "day3"],
            description: "",
            url: "https://docs.google.com/document/d/17tLznPGZ5Ar8Z-nIY0OjXDo_S9FIpf0u/edit?usp=sharing&ouid=106857294797183271466&rtpof=true&sd=true",
        },
        {
            id: "block10_day3_Wallet_Governance",
            date: "2024-03-05",
            title: "Block#10 Wallet Governance and Credential Management",
            tag: ["block", "day3"],
            description: "",
            url: "https://docs.google.com/document/d/1UKukoD7wGNK_-ipvDS4LwWvTuoVl40Mt/edit?usp=sharing&ouid=106857294797183271466&rtpof=true&sd=true",
        },
        {
            id: "block10_day3_ZKP",
            date: "2024-03-05",
            title: "Block#10 Workshop - ZKP and its application",
            tag: ["block", "day3"],
            description: "",
            url: "https://docs.google.com/document/d/1jpZk2U8TIuM-DicQDTDVviSgJFNpS8EU/edit?usp=sharing&ouid=106857294797183271466&rtpof=true&sd=true",
        },
    ]
}
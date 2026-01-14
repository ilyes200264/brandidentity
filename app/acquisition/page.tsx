import { Metadata } from "next";
import { AcquisitionHero } from "@/components/sections/acquisition/AcquisitionHero";
import { AcquisitionGoals } from "@/components/sections/acquisition/AcquisitionGoals";
import { AcquisitionSegmentation } from "@/components/sections/acquisition/AcquisitionSegmentation";
import { AcquisitionBudget } from "@/components/sections/acquisition/AcquisitionBudget";
import { AcquisitionDigital } from "@/components/sections/acquisition/AcquisitionDigital";
import { AcquisitionLocal } from "@/components/sections/acquisition/AcquisitionLocal";
import { AcquisitionKPIs } from "@/components/sections/acquisition/AcquisitionKPIs";
import { AcquisitionFunnel } from "@/components/sections/acquisition/AcquisitionFunnel";

export const metadata: Metadata = {
    title: "Stratégie Acquisition | Collecte Consignée",
    description: "Plan de stratégie d'acquisition utilisateurs pour l'application mobile de collecte de contenants consignés à Fribourg.",
};

export default function AcquisitionPage() {
    return (
        <main className="flex flex-col w-full bg-black text-white selection:bg-sinntrag-red selection:text-white">
            <AcquisitionHero />
            <AcquisitionGoals />
            <AcquisitionSegmentation />
            <AcquisitionBudget />
            <AcquisitionDigital />
            <AcquisitionLocal />
            <AcquisitionKPIs />
            <AcquisitionFunnel />
        </main>
    );
}

import { Metadata } from "next";
import { BPHero } from "@/components/sections/business-plan/BPHero";
import { BPProblem } from "@/components/sections/business-plan/BPProblem";
import { BPSolution } from "@/components/sections/business-plan/BPSolution";
import { BPMarket } from "@/components/sections/business-plan/BPMarket";
import { BPModel } from "@/components/sections/business-plan/BPModel";
import { BPProjections } from "@/components/sections/business-plan/BPProjections";
import { BPOperations } from "@/components/sections/business-plan/BPOperations";
import { BPVision } from "@/components/sections/business-plan/BPVision";

export const metadata: Metadata = {
    title: "Business Plan | Application de Collecte Consignée",
    description: "Plan d'affaires pour une application mobile de collecte de contenants consignés à Fribourg, Suisse.",
};

export default function BusinessPlanPage() {
    return (
        <main className="flex flex-col w-full bg-black text-white selection:bg-sinntrag-red selection:text-white">
            <BPHero />
            <BPProblem />
            <BPSolution />
            <BPMarket />
            <BPModel />
            <BPProjections />
            <BPOperations />
            <BPVision />
        </main>
    );
}

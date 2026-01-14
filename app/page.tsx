import { VeranomiCover } from "@/components/sections/veranomi/VeranomiCover";
import { VeranomiConstat, VeranomiProblem } from "@/components/sections/veranomi/VeranomiProblem";
import { VeranomiSolution, VeranomiHowItWorks } from "@/components/sections/veranomi/VeranomiHowItWorks";
import { VeranomiTarget, VeranomiUseCases } from "@/components/sections/veranomi/VeranomiUseCases";
import { VeranomiDifferent, VeranomiBusinessModel } from "@/components/sections/veranomi/VeranomiBusinessModel";
import { VeranomiMarket, VeranomiVision } from "@/components/sections/veranomi/VeranomiVision";
import { VeranomiBranding, VeranomiSlogan, VeranomiNext } from "@/components/sections/veranomi/VeranomiNext";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-black text-white selection:bg-sinntrag-red selection:text-white pb-20">
      <VeranomiCover />
      <VeranomiConstat />
      <VeranomiProblem />
      <VeranomiSolution />
      <VeranomiHowItWorks />
      <VeranomiTarget />
      <VeranomiUseCases />
      <VeranomiDifferent />
      <VeranomiBusinessModel />
      <VeranomiMarket />
      <VeranomiVision />
      <VeranomiBranding />
      <VeranomiSlogan />
      <VeranomiNext />
    </main>
  );
}

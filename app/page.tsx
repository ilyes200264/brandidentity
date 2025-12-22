import { Cover } from "@/components/sections/Cover";
import { TheObservation } from "@/components/sections/TheObservation";
import { TheInvisibleProblem } from "@/components/sections/TheInvisibleProblem";
import { ThePostulate } from "@/components/sections/ThePostulate";
import { TheName } from "@/components/sections/TheName";
import { Philosophy } from "@/components/sections/Philosophy";
import { HumanDimension } from "@/components/sections/HumanDimension";
import { IntergenerationalResponsibility } from "@/components/sections/IntergenerationalResponsibility";
import { ImpactModel } from "@/components/sections/ImpactModel";
import { Positioning } from "@/components/sections/Positioning";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-black text-white selection:bg-sinntrag-red selection:text-white">
      <Cover />
      <TheObservation />
      <TheInvisibleProblem />
      <ThePostulate />
      <TheName />
      <Philosophy />
      <HumanDimension />
      <IntergenerationalResponsibility />
      <ImpactModel />
      <Positioning />
    </main>
  );
}

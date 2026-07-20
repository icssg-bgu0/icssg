import { HeroSimplified } from "@/components/sections/HeroSimplified";
import { AboutSimplified } from "@/components/sections/AboutSimplified";
import { TracksSimplified } from "@/components/sections/TracksSimplified";
import { CommitteeSimplified } from "@/components/sections/CommitteeSimplified";
import { CallForPapersSimplified } from "@/components/sections/CallForPapersSimplified";
import { RegistrationSimplified } from "@/components/sections/RegistrationSimplified";
import { DatesSimplified } from "@/components/sections/DatesSimplified";

export default function Home() {
  return (
    <>
      <HeroSimplified />
      <AboutSimplified />
      <TracksSimplified />
      <CommitteeSimplified />
      <CallForPapersSimplified />
      <RegistrationSimplified />
      <DatesSimplified />
    </>
  );
}

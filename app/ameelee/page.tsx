import HeroMobile from "@/components/ameelee/HeroMobile";
import HeroDesktop from "@/components/ameelee/HeroDesktop";
import CollectionMobile from "@/components/ameelee/CollectionMobile";
import Collection from "@/components/ameelee/Collection";
import MarqueeStrip from "@/components/ameelee/MarqueeStrip";
import EditorsPickMobile from "@/components/ameelee/EditorsPickMobile";
import EditorsPick from "@/components/ameelee/EditorsPick";
import WhyGrid from "@/components/ameelee/WhyGrid";
import WhySentence from "@/components/ameelee/WhySentence";
import CrossedStrips from "@/components/ameelee/CrossStrips";
import Footer from "@/components/ameelee/Footer";
import FooterMobile from "@/components/ameelee/FooterMobile";

const SIZES_LINE = ["54 → 56 → 58 → 60 → 62 → 64", "READY TO SHIP"];
const INSTAGRAM_LINE = ["@AMEELEE_ABAYA", "@AMEELEE__ABAYA"];

export default function AmeeleePage() {
  return (
    <>
      <main>
        {/* heroes: each hides at the other's screen size */}
        <HeroMobile />
        <HeroDesktop insanity={2} />

        {/* mobile: rows, then the sizes strip and editor's pick, then the rest of the rows */}
        <CollectionMobile
          interlude={
            <>
              <MarqueeStrip items={SIZES_LINE} tone="sizes" />
              <EditorsPickMobile />
            </>
          }
        />

        {/* desktop */}
        <Collection />
        <EditorsPick />
        <WhySentence />
        <CrossedStrips />

        {/* mobile */}
        <WhyGrid />
        <MarqueeStrip items={INSTAGRAM_LINE} tone="insta" />
      </main>

      <Footer />
      <FooterMobile />
    </>
  );
}

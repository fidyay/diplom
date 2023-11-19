"use client";
import FormStepper from "@/components/FormStepper";
import FormSlider from "@/components/FormSlider";
import PageWrapper from "@/components/PageWrapper";
import store, { catWeightArr, waistBreakpoints } from "@/core/store";
import { observer } from "mobx-react";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

export default observer(function BreedPage() {
  const [weight, setWeight] = useState(store.catWeight);
  const [waist, setWaist] = useState(store.catWaist);
  const router = useRouter();

  const handleContinue = useCallback(() => {
    store.catWaist = waist;
    store.catWeight = weight;
    router.push("/activity");
  }, [router, waist, weight]);

  return (
    <PageWrapper
      previousLink="/breed"
      title="Вага"
      handleContinue={handleContinue}
    >
      <FormStepper value={weight} onChange={setWeight} steps={catWeightArr} />

      <FormSlider
        value={waist}
        onChange={setWaist}
        sx={{ mt: 3 }}
        label="Статура"
        breakpoints={waistBreakpoints}
      />
    </PageWrapper>
  );
});

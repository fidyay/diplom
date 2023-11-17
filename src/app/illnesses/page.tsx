"use client";
import FormRadioGroup from "@/components/FormRadioGroup";
import PageWrapper from "@/components/PageWrapper";
import store, { boolValuesUA } from "@/core/store";
import { observer } from "mobx-react";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, useCallback, useState } from "react";

export default observer(function ActivityPage() {
  const router = useRouter();

  const [illness, setIllness] = useState(
    store.hasIllness ? boolValuesUA[1] : boolValuesUA[2]
  );

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      const value = e.target.value;
      if (value) setIllness(value);
    },
    []
  );

  const handleContinue = useCallback(() => {
    router.push("/sterilization");
    store.hasIllness = illness === "Є";
  }, [illness, router]);

  return (
    <PageWrapper
      handleContinue={handleContinue}
      previousLink="/activity"
      title="Хвороби"
    >
      <FormRadioGroup
        value={illness}
        onChange={handleChange}
        values={boolValuesUA}
      />
    </PageWrapper>
  );
});

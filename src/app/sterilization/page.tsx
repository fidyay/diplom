"use client";
import FormRadioGroup from "@/components/FormRadioGroup";
import PageWrapper from "@/components/PageWrapper";
import store, { boolValuesUA } from "@/core/store";
import { observer } from "mobx-react";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, useCallback, useState } from "react";

export default observer(function ActivityPage() {
  // const router = useRouter();
  console.log(store);

  const [sterilization, setSterilization] = useState(
    store.hasSterilization ? boolValuesUA[1] : boolValuesUA[2]
  );

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      const value = e.target.value;
      if (value) setSterilization(value);
    },
    []
  );

  const handleContinue = useCallback(() => {
    // router.push("/sterilization");
    store.hasIllness = sterilization === "Є";
  }, [sterilization]);
  return (
    <PageWrapper
      previousLink="/illnesses"
      title="Стерилізація"
      handleContinue={handleContinue}
    >
      <FormRadioGroup
        value={sterilization}
        onChange={handleChange}
        values={boolValuesUA}
      />
    </PageWrapper>
  );
});

"use client";
import FormSlider from "@/components/FormSlider";
import PageWrapper from "@/components/PageWrapper";
import store, { activityBreakpoints } from "@/core/store";
import { observer } from "mobx-react";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

export default observer(function ActivityPage() {
  const router = useRouter();
  const [activity, setActivity] = useState(store.catActivity);

  const handleContinue = useCallback(() => {
    router.push("/illnesses");
    store.catActivity = activity;
  }, [activity, router]);

  return (
    <PageWrapper
      handleContinue={handleContinue}
      previousLink="/breed"
      title="Активність"
    >
      <FormSlider
        value={activity}
        onChange={setActivity}
        label="Рівень активності"
        breakpoints={activityBreakpoints}
      />
    </PageWrapper>
  );
});

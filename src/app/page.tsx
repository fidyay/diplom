"use client";
import ContinueButton from "@/components/ContinueButton";
import PageTitle from "@/components/PageTitle";
import { Box } from "@mui/material";
import Paws from "@/components/Paws";
import FormField from "@/components/FormField";
import store from "@/core/store";
import { ChangeEventHandler, useCallback, useState } from "react";
import { observer } from "mobx-react";
import { useRouter } from "next/navigation";

export default observer(function StartPage() {
  const [catName, setCatName] = useState(store.catName);
  const [userName, setUserName] = useState(store.userName);
  const router = useRouter();

  const handleCatNameChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      const value = e.target.value;
      if (value) setCatName(value);
    },
    []
  );

  const handleUserNameChange: ChangeEventHandler<HTMLInputElement> =
    useCallback((e) => {
      const value = e.target.value;
      if (value) setUserName(value);
    }, []);

  const handleContinue = useCallback(() => {
    store.catName = catName;
    store.userName = userName;
    router.push("/breed");
  }, [catName, router, userName]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
      <Box sx={{ flexGrow: 1 }}>
        <PageTitle>Про мене</PageTitle>
        <FormField
          value={catName}
          onChange={handleCatNameChange}
          label="У мене є улюбленець на імʼя"
        />
        <FormField
          value={userName}
          onChange={handleUserNameChange}
          label="Мене звати"
        />
        <ContinueButton
          disabled={!catName || !userName}
          onClick={handleContinue}
        />
      </Box>

      <Paws />
    </Box>
  );
});

import { useEffect, useState } from "react";

export function useFocus(ref) {
  useEffect(() => {
    ref.current.focus();
  }, []);
}

export function useNotification(content: string, type: "OK" | "ERROR") {}

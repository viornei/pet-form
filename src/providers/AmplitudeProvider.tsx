"use client";
import { useEffect, createContext } from "react";
import { init, track } from "@amplitude/analytics-browser";

const AMPLITUDE_API_KEY = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY;

type AmplitudeContextValue = {
  trackAmplitudeEvent: (eventName: string, eventProperties?: Record<string, any>) => void;
};

export const AmplitudeContext = createContext<AmplitudeContextValue | undefined>(undefined);

type Props = { children: React.ReactNode };

const AmplitudeContextProvider = ({ children }: Props) => {
  useEffect(() => {
    if (AMPLITUDE_API_KEY) {
      init(AMPLITUDE_API_KEY, undefined, {
        defaultTracking: {
          sessions: true,
        },
      });
    }
  }, []);

  const trackAmplitudeEvent = (eventName: string, eventProperties?: Record<string, any>) => {
    track(eventName, eventProperties);
  };

  const value: AmplitudeContextValue = { trackAmplitudeEvent };

  return (
    <AmplitudeContext.Provider value={value}>
      {children}
    </AmplitudeContext.Provider>
  );
};

export default AmplitudeContextProvider;

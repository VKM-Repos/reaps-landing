import React from "react";

export const ProgressLoader = () => {
  return <div></div>;
};

export const WobbleSpinnerPlain: React.FC = () => {
  return (
    <div
      className="relative inline-block animate-spin"
      style={
        {
          "--uib-size": "50px",
          "--uib-color": "#FFDB00",
          "--uib-speed": "1.3s",
          "--uib-dot-size": "30%",
          height: "var(--uib-size)",
          width: "var(--uib-size)",
        } as React.CSSProperties
      }
    >
      <div
        className="absolute h-full"
        style={{
          left: "calc(50% - var(--uib-dot-size) / 2)",
          width: "var(--uib-dot-size)",
          transform: "rotate(120deg)",
        }}
      >
        <div
          className="absolute left-0 top-0 w-full rounded-full"
          style={
            {
              paddingBottom: "100%",
              backgroundColor: "var(--uib-color)",
              animation: `wobble var(--uib-speed) infinite ease-in-out`,
            } as React.CSSProperties
          }
        ></div>
      </div>

      <div
        className="absolute h-full"
        style={{
          left: "calc(50% - var(--uib-dot-size) / 2)",
          width: "var(--uib-dot-size)",
          transform: "rotate(-120deg)",
        }}
      >
        <div
          className="absolute left-0 top-0 w-full rounded-full"
          style={
            {
              paddingBottom: "100%",
              backgroundColor: "var(--uib-color)",
              animation: `wobble var(--uib-speed) infinite ease-in-out`,
            } as React.CSSProperties
          }
        ></div>
      </div>

      <div
        className="absolute h-full"
        style={{
          left: "calc(50% - var(--uib-dot-size) / 2)",
          width: "var(--uib-dot-size)",
        }}
      >
        <div
          className="absolute left-0 top-0 w-full rounded-full"
          style={
            {
              paddingBottom: "100%",
              backgroundColor: "var(--uib-color)",
              animation: `wobble var(--uib-speed) infinite ease-in-out`,
            } as React.CSSProperties
          }
        ></div>
      </div>
    </div>
  );
};

export const WobbleSpinner: React.FC = () => {
  return (
    <div className="bg-black/20 fixed inset-0 z-[99900] flex cursor-not-allowed items-center justify-center backdrop-blur-sm">
      <WobbleSpinnerPlain />
    </div>
  );
};

"use client";
import React from "react";
import "@/app/globals.css";
import Card from "@/app/components/ui/Card";
interface StepsProps {
  id?: string;
  className?: string;
}
const StepSection = ({ id, className }: StepsProps) => {
  const steps = [
    {
      iconText: "1",
      title: "Sign up & choose role",
      description:
        "Create an account and pick student or instructor for tailored features",
    },
    {
      iconText: "2",
      title: "Input Classes",
      description:
        "Add subjects using dropdowns or drag-and-drop, edit times, rooms, and instructors easily.",
    },
    {
      iconText: "3",
      title: "Instant Feedback",
      description: "Alert users when there are conflicts between schedules.",
    },
    {
      iconText: "4",
      title: "Export & Share",
      description:
        "Export schedules to PDF/CSV or share them with classmates and faculty",
    },
  ];

  return (
    <section id={`${id}`} className={`${className}`}>
      <h2 className="text-2xl font-bold mb-6">How it Works</h2>

      <div className="flex flex-col items-center relative md:hidden">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-300 to-blue-400"></div>

        <div className="flex flex-col gap-6 items-center">
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 w-full max-w-[280px]">
              <Card
                variant="step"
                iconText={step.iconText}
                iconBgColor="bg-gradient-to-br from-indigo-500 to-blue-600"
                iconShape="rounded-2xl"
                title={step.title}
                description={step.description}
                className="flex-col h-full min-h-[200px]"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:flex lg:hidden flex-col items-center relative">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-300 to-blue-400"></div>

        {steps.map((step, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className={`relative flex items-center w-full min-h-[220px] ${
                isEven ? "justify-start pl-6 pr-8" : "justify-end pl-8 pr-6"
              }`}
            >
              <div
                className={`absolute top-1/2 -translate-y-1/2 h-0.5 z-0 ${
                  isEven
                    ? "right-1/2 bg-gradient-to-r from-indigo-300 to-blue-400"
                    : "left-1/2 bg-gradient-to-l from-indigo-300 to-blue-400"
                }`}
                style={{
                  width: isEven
                    ? "calc(50% - 120px - 24px)"
                    : "calc(50% - 120px - 24px)",
                }}
              ></div>

              <div className="w-[240px] z-10">
                <Card
                  variant="step"
                  iconText={step.iconText}
                  iconBgColor="bg-gradient-to-br from-indigo-500 to-blue-600"
                  iconShape="rounded-2xl"
                  title={step.title}
                  description={step.description}
                  className="flex-col h-full min-h-[200px]"
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="hidden lg:grid lg:grid-cols-4 lg:gap-4 xl:gap-6 2xl:gap-8">
        {steps.map((step, index) => (
          <div key={index} className="relative flex flex-col items-center">
            <div className="w-full">
              <Card
                variant="step"
                iconText={step.iconText}
                iconBgColor="bg-gradient-to-br from-indigo-500 to-blue-600"
                iconShape="rounded-2xl"
                title={step.title}
                description={step.description}
                className="flex-col h-full min-h-[240px]"
              />
            </div>

            {index < steps.length - 1 && (
              <div className="absolute top-[120px] left-full w-4 lg:w-4 xl:w-6 2xl:w-8 h-0.5 bg-gradient-to-r from-indigo-300 to-blue-400"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default StepSection;

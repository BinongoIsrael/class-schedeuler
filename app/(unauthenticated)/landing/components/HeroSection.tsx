"use client";
import Image from "next/image";

export default function HeroSection({ className }: { className?: string }) {
  return (
    <section
      className={`w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8 py-12 md:py-16 ${className}`}
    >
      <div className="flex-1 lg:max-w-2xl">
        <span className="inline-block text-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.08)] font-medium text-sm px-3 py-1 rounded-full mb-4">
          Conflict-free scheduling
        </span>

        <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-4">
          Create conflict-free class schedules — effortlessly.
        </h1>

        <p className="font-inter text-gray-600 text-base md:text-lg mb-8">
          Streamline timetables with real-time conflict detection, drag-and-drop
          plotting, role-based access, and productivity tools (Pomodoro &
          tasks). Built for students and instructors.
        </p>

        <div className="flex flex-wrap gap-4 mb-8 md:mb-12">
          <button className="px-6 py-3 rounded-full bg-[var(--color-primary)] text-white font-bold text-base hover:scale-110 hover:bg-[rgba(var(--color-primary-rgb),0.9)] transition-all shadow-sm hover:shadow-md">
            Get Started
          </button>
          <button className="px-6 py-3 rounded-full border border-gray-300 font-bold text-base text-[var(--color-primary)] hover:scale-110 transition-all">
            Learn More
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 md:gap-6 text-center md:text-left">
          <div>
            <h3 className="font-semibold text-gray-900 font-poppins text-sm">
              Real-time
            </h3>
            <p className="text-gray-500 text-xs md:text-sm font-inter">
              Conflict detection
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 font-poppins text-sm">
              Export
            </h3>
            <p className="text-gray-500 text-xs md:text-sm font-inter">
              PDF / CSV
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 font-poppins text-sm">
              Role-based
            </h3>
            <p className="text-gray-500 text-xs md:text-sm font-inter">
              Student & Instructors
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white px-8 py-4 rounded-2xl shadow-lg w-full lg:max-w-lg ">
        <div className="flex justify-between items-baseline mb-2.5">
          <h1 className="font-bold text-xl md:text-2xl">My Week</h1>
          <p className="text-sm md:text-base text-[var(--color-text-desc)]">
            Mon-Fri
          </p>
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col bg-[var(--color-header-bg)] p-3 md:p-4 flex-1 justify-between rounded-2xl gap-3 md:gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-sm bg-[#8274FF] flex-shrink-0"></div>
                <p className="text-sm md:text-base">Algorithms</p>
              </div>
              <span className="text-xs md:text-sm text-[var(--color-text-desc)] whitespace-nowrap ml-2">
                8:00 - 9:00
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-sm bg-[#4169E1] flex-shrink-0"></div>
                <p className="text-sm md:text-base">Database Systems</p>
              </div>
              <span className="text-xs md:text-sm text-[var(--color-text-desc)] whitespace-nowrap ml-2">
                10:00 - 11:30
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-sm bg-[#06D146] flex-shrink-0"></div>
                <p className="text-sm md:text-base">Discrete Structures</p>
              </div>
              <span className="text-xs md:text-sm text-[var(--color-text-desc)] whitespace-nowrap ml-2">
                1:30 - 3:00
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3 md:gap-4 w-20 md:w-24">
            <span className="text-center px-2 py-2 rounded-lg text-[var(--color-text-desc)] text-xs md:text-sm bg-[linear-gradient(-180deg,#EAF2FF_0%,#F6F6FF_100%)]">
              Pomodoro
            </span>
            <span className="text-center px-2 py-2 rounded-lg text-[var(--color-text-desc)] text-xs md:text-sm bg-[linear-gradient(-180deg,#E9FBE9_0%,#F6F6FF_100%)]">
              Tasks
            </span>
            <span className="text-center px-2 py-2 rounded-lg text-[var(--color-text-desc)] text-xs md:text-sm bg-[linear-gradient(-180deg,#FFF7E6_0%,#FFFBF0_100%)]">
              Export
            </span>
          </div>
        </div>
        <div className="flex justify-center md:justify-start mt-4">
          <button className="rounded-full bg-[linear-gradient(-90deg,#4169E1_0%,#8274FF_100%)] text-white px-4 md:px-5 py-2 text-sm md:text-base font-semibold cursor-pointer transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-md">
            Create Schedule
          </button>
        </div>
      </div>
    </section>
  );
}

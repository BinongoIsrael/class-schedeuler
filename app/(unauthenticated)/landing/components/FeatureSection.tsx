"use client";
import Card from "@/app/components/ui/Card";
import { Clock, GripVertical, CalendarRange, ListTodo } from "lucide-react";

interface FeatureProps {
  id?: string;
  className?: string;
}
const FeatureSection = ({ id, className }: FeatureProps) => {
  return (
    <section id={`${id}`} className={`${className} mb-8`}>
      <div
        className={`bg-white px-5 pt-5 pb-8 rounded-2xl flex flex-col gap-3 lg:px-16`}
      >
        <h2 className="text-2xl font-bold">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Card
            variant="feature"
            icon={<Clock size={24} color="#4169e1" />}
            title="Real-time Conflict Detection"
            description="Instant alerts for time overlaps, room double-booking, and instructor clashes so you never schedule wrongly."
            className="hover:scale-101 hover:drop-shadow-sm"
          />
          <Card
            variant="feature"
            icon={<GripVertical size={24} color="#4169e1" />}
            title="Drag & Drop Interface"
            description="Instant alerts for time overlaps, room double-booking, and instructor clashes so you never schedule wrongly."
            className="hover:scale-101 hover:drop-shadow-sm"
          />
          <Card
            variant="feature"
            icon={<CalendarRange size={24} color="#4169e1" />}
            title="Multiple Views"
            description="Instant alerts for time overlaps, room double-booking, and instructor clashes so you never schedule wrongly."
            className="hover:scale-101 hover:drop-shadow-sm"
          />
          <Card
            variant="feature"
            icon={<ListTodo size={24} color="#4169e1" />}
            title="Productivity Tools"
            description="Instant alerts for time overlaps, room double-booking, and instructor clashes so you never schedule wrongly."
            className="hover:scale-101 hover:drop-shadow-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

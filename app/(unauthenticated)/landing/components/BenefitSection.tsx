import React from "react";
interface BenefitProps {
  id?: string;
  className?: string;
}
const BenefitSection = ({ id, className }: BenefitProps) => {
  return (
    <section id={`${id}`} className={`${className} flex flex-col gap-3 mb-8`}>
      <h2 className="text-2xl font-bold">Why Choose SchedEuler?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <div className="p-6 font-inter text-base bg-white rounded-3xl shadow-[0_32px_64px_0_rgba(65,105,225,0.12),_0_8px_24px_0_rgba(65,105,225,0.0784)] flex h-full">
          <ul className="flex flex-col gap-3 justify-between w-full">
            <li>
              <strong className="text-lg">Save Time &#8212; </strong> No more
              Manual errors or overlaps
            </li>
            <li>
              <strong className="text-lg">Boost Productivity &#8212; </strong>{" "}
              Pomodoro and tasks keep you focused.
            </li>
            <li>
              <strong className="text-lg">Accessible Anywhere &#8212; </strong>{" "}
              Works on mobile, tablet, or desktop.
            </li>
            <li>
              <strong className="text-lg">Secure & Private &#8212; </strong>{" "}
              Database-protected data and role-based controls.
            </li>
          </ul>
        </div>

        <div className="w-full overflow-x-auto rounded-2xl bg-white p-4 shadow-[0_32px_64px_0_rgba(65,105,225,0.12),_0_8px_24px_0_rgba(65,105,225,0.0784)] h-full flex flex-col justify-between">
          <div className="inline-block min-w-full align-middle">
            <table className="min-w-full border-collapse text-sm md:text-base">
              <thead>
                <tr className="bg-gradient-to-r from-[#4169e1] to-[#6a5acd] text-white">
                  <th className="py-3 px-4 text-left rounded-tl-2xl rounded-bl-2xl">
                    Feature
                  </th>
                  <th className="py-3 px-4 text-left">SchedEuler</th>
                  <th className="py-3 px-4 text-left rounded-tr-2xl rounded-br-2xl">
                    Others
                  </th>
                </tr>
              </thead>
              <tbody className="text-black bg-white">
                <tr>
                  <td className="py-3 px-4">No Ads / No Paywalls</td>
                  <td className="py-3 px-4 text-center text-green-600 text-xl">
                    ✓
                  </td>
                  <td className="py-3 px-4 text-center text-red-500 text-xl">
                    ✕
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Real-time Conflicts</td>
                  <td className="py-3 px-4 text-center text-green-600 text-xl">
                    ✓
                  </td>
                  <td className="py-3 px-4 text-center">Partial</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Role-based Access</td>
                  <td className="py-3 px-4 text-center text-green-600 text-xl">
                    ✓
                  </td>
                  <td className="py-3 px-4 text-center">Limited</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;

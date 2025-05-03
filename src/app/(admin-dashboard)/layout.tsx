// import type { Metadata } from "next";
import { Mulish } from "next/font/google";
// import "../globals.css";
import "../globals.css";
import { RiGraduationCapFill } from "react-icons/ri";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { TfiLayoutMediaOverlayAlt2 } from "react-icons/tfi";
import { TbReportSearch } from "react-icons/tb";
import { GrTransaction } from "react-icons/gr";
import { CiSettings } from "react-icons/ci";
import { LuScroll } from "react-icons/lu";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mulish",
});

const dashboardLinksData = [
  {
    text: "Dashboard",
    icon: MdOutlineSpaceDashboard,
  },
  {
    text: "Users",
    icon: FiUsers,
  },
  {
    text: "Courses",
    icon: TfiLayoutMediaOverlayAlt2,
  },
  {
    text: "Enrollment",
    icon: LuScroll,
  },
  {
    text: "Transactions",
    icon: GrTransaction,
  },
  {
    text: "Reposts",
    icon: TbReportSearch,
  },
  {
    text: "Settings",
    icon: CiSettings,
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${mulish.variable} font-lato antialiased bg-[#FBFBFF]`}>
        <div className="grid grid-cols-[20%_80%] w-full h-full">
          <div className="bg-white row-span-full shadow">
            <h1 className="font-bold p-5 text-3xl justify-center tracking-wider flex items-center gap-2 text-[#1A2D62]">
              <RiGraduationCapFill size={50} className="text-[#2ECA7F]" />
              Elrn
            </h1>
            <ul className="mt-5">
              {dashboardLinksData.map((value) => {
                const Icon = value.icon;
                return (
                  <li
                    key={value.text}
                    className="flex items-center gap-2 font-semibold hover:bg-gray-100 cursor-pointer transition-all duration-300 text-base text-[#1A2D62] p-4">
                    <Icon size={20} color="#2ECA7F" /> {value.text}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="">{children}</div>
        </div>
      </body>
    </html>
  );
}

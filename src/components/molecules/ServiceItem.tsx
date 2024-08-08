import Image from "next/image";
import React from "react";
import Atm from "@/assets/Atm.jpg";
import Energy from "@/assets/Solar.jpg"; // Assuming you have different images
import Software from "@/assets/Code.jpg"; // for each service
import Monitoring from "@/assets/Pos.jpg";
import AtmIcon from "@/assets/Atm.svg";
import EnergyIcon from "@/assets/solar.svg";
import SoftwareIcon from "@/assets/software.svg";
import MonitoringIcon from "@/assets/security.svg";

const ServiceItem = () => {
  return (
    <div className="flex flex-col">
      {services.map((service, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-stretch mb-10 rounded-3xl overflow-hidden  ${service.style} ${
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <div className="flex flex-1">
            <div
              className={`flex flex-col gap-6 py-10 ${
                index % 2 === 0 ? "px-4 md:px-5" : "px-4 md:px-14"
              }`}
            >
              <Image
                src={service.icon}
                alt={`${service.title} icon`}
                className="w-14 h-14 border border-royalBlue-950 p-2 rounded-xl"
              />
              <div className="flex flex-col gap-5">
                <div className="flex flex-col">
                  <h3 className="text-2xl">{service.title}</h3>
                  <p className="text-base">{service.description}</p>
                </div>
                <div className="flex px-4">
                  <ul className="text-base list-disc pl-1 md:px-4 flex flex-col gap-4">
                    {service.features.map((feature, i) =>
                      typeof feature === "string" ? (
                        <li key={i}>{feature}</li>
                      ) : (
                        <li key={i}>
                          {feature.label}
                          <ul className="list-disc pl-5">
                            {feature.children.map((child, j) => (
                              <li key={j}>{child}</li>
                            ))}
                          </ul>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="relative md:flex flex-1">
            <Image fill src={service.image} alt={`${service.title} image`} className="w-full h-full"/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceItem;

const services = [
  {
    title: "ATM Solutions",
    description: "Enhancing Efficiency and Security for Your ATM Operations",
    icon: AtmIcon,
    image: Atm,
    features: [
      "ATM Sales & Deployment: Our expert team handles the sale and deployment of ATMs, ensuring a smooth and seamless transition and setup for your business.",
      "ATM Installation: We specialize in the precise installation of ATM hardware and software, guaranteeing secure and efficient operation.",
      "ATM Maintenance: Keep your ATMs running flawlessly with our comprehensive maintenance services, covering both hardware and software aspects.",
      "ATM Kiosk Fabrication: Enhance accessibility and usability with custom-fabricated ATM kiosks tailored to your specific needs.",
    ],
    style: "bg-royalBlue-50"
  },
  {
    title: "Energy Solutions",
    description:
      "Empowering Your Business with Sustainable and Reliable Energy Solutions",
    icon: EnergyIcon,
    image: Energy,
    features: [
      "Energy Supply: We supply top-quality solar inverters, UPS, stabilizers, batteries, and solar panels to meet all your energy needs.",
      "Energy Installation: Our experts install solar energy systems, including inverters, batteries, and panels, optimizing energy efficiency for your operations.",
      "Energy Maintenance: Ensure continuous energy efficiency with our maintenance services for batteries, inverters, and solar panels.",
      "Electrical Installations: Our professional team handles the wiring and installation of electrical systems, ensuring safe and reliable operations.",
      "Smart Inverter Monitoring: Benefit from advanced monitoring solutions for inverters to ensure optimal performance and prevent downtime.",
    ],
    style: "bg-fiord-50"
  },
  {
    title: "Software Solutions",
    description: "Transforming Your Business with Advanced Software Solutions",
    icon: SoftwareIcon,
    image: Software,
    features: [
      "Software Upgrades: Enhance performance and security with our expertise in migrating and upgrading systems.",
      "Multilingual Solutions: Implement multilingual software to cater to diverse user bases, making your services accessible to all.",
      "Content Management: Manage and publish content on ATM screens effortlessly. Update, change, or delete images, text, video, or audio, keeping your customer screens organized and engaging.",
      "Custom Integration: Achieve seamless and cohesive operations with our custom integration services, uniting various IT systems.",
      "Comprehensive Reporting: Track performance and make informed decisions with our detailed reporting and analytics solutions.",
    ],
    style: "bg-royalBlue-50"
  },
  {
    title: "Monitoring and Security Solutions",
    description: "Securing Your Business with Advanced Monitoring Solutions",
    icon: MonitoringIcon,
    image: Monitoring,
    features: [
      "ATM Monitoring: Manage, maintain, and monitor ATM operations with our new-generation solution, featuring on-premise monitoring via a bank-hosted URL and a mobile (Android) app for on-the-go access.",
      {
        label:
          "POS Monitoring: Ensure secure transactions with our comprehensive POS monitoring:",
        children: [
          "Terminal Status: Active, inactive, decommissioned, or faulty.",
          "Hardware Status: Battery, network, paper, and printer status.",
          "Real-Time Status: Total terminals, merchants, and accounts.",
          "Top Performers: Leading merchants, managers, support officers, and PTSPs.",
          "Transaction Overview: Terminal activity, transaction volume, and values.",
          "Graphical Representation: Easy-to-read transaction and performance graphs.",
        ],
      },
      "Anti-Skimming Monitoring: Protect against card fraud with our advanced anti-skimming solutions, enhancing transaction security.",
      "Journal/Image Archiving: Securely archive and manage electronic journals and footage captured at ATMs for dispute resolution, transaction exceptions, and transaction reporting.",
    ],
    style: "bg-fiord-50"
  },
];

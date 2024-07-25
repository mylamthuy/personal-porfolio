"use client";
import React, {useState, useTransition} from "react";
import TabButton from "./TabButton";
import EducationData from "./EducationData";
import CertificateData from "./CertificateData";

const TAB_DATA = [
    {
      title: "Education",
      id: "education",
      content: <EducationData />,
    },
    {
        title: "Certifications",
        id: "certifications",
        content: <CertificateData />,
    },
  ];

function Qualification()
{
    const [tab, setTab] = useState("education");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }

  return (
    <div className="mb-10">
        <div className="flex flex-row justify-start mt-8 space-x-8">
          <TabButton
            selectTab={() => handleTabChange("education")}
            active={tab === "education"}
          >
            {" "}
            Education{" "}
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("certifications")}
            active={tab === "certifications"}
          >
            {" "}
            Certifications{" "}
          </TabButton>
          </div>
          <div className="mt-8 ml-3">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
    </div>
  )
}

export default Qualification;
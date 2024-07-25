import React from "react";
import {CalendarDaysIcon} from "@heroicons/react/24/solid";

const CertificateData = () => {
  return (
    <ul className="mb-3">
        <li>
            <div className="space-y-1">
                <div className="flex items-center space-x-3">
                <div className="bullet-circle w-3 h-3">
                    <div className="bullet-blur w-3 h-3"></div>
                </div>
                <h3 className="font-semibold">Applied Data Science Certificate</h3>
                </div>
                
                <div className="flex items-center space-x-2 text-sm mb-1 pl-7">
                    <CalendarDaysIcon className="h-4 w-4" />
                    <p>2022</p>
                </div>
            </div>
        </li>
    </ul>
  )
}

export default CertificateData
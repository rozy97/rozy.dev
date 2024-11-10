"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { saveAs } from "file-saver";



function handleDownload() {
    saveAs('/assets/resume/rozy-resume.pdf', 'firmansyah-rozy-SWE.pdf');
}

const DownloadResume = () => {
    return (
        <Button
            variant={"default"}
            size="lg"
            className="uppercase flex items-center gap-2"
            onClick={handleDownload}
        >
            <span>Download CV</span>
            <FiDownload className="text-xl" />
        </Button>
    )
}

export default DownloadResume
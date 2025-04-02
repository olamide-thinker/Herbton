"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { CopyIcon, Globe } from "lucide-react";

const CopyText = ({ text }: { text: string }) => {
  const handleCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for insecure contexts
        const textarea = document.createElement("textarea");
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }

      toast("Copied!", {
        description: "The text has been copied to clipboard.",
      });
    } catch (error) {
      console.error("Failed to copy:", error);
      toast("Error", {
        description: `Failed to copy text.`,
        // variant: "destructive",
      });
    }
  };

  return (
    <div className="flex items-center gap-2 p-2 text-sm border border-gray-200 rounded-lg group w-fit">
      <Globe className="w-4 h-4 text-primary group-hover:scale-110" />
      <span className="text-gray-700 hover:underline cursor-pointer">
        {text}
      </span>
      <Button
        className="p-1 w-fit h-fit"
        variant="ghost"
        size="icon"
        onClick={handleCopy}
      >
        <CopyIcon className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default CopyText;

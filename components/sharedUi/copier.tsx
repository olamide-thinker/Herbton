"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

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
    <div className="flex items-center gap-2">
      <span className="text-gray-700">{text}</span>
      <Button variant="outline" size="sm" onClick={handleCopy}>
        Copy
      </Button>
    </div>
  );
};

export default CopyText;

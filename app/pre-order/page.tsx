import { WizardHeader } from "@/components/preorder/WizardHeader";
import { PreOrderWizard } from "@/components/preorder/PreOrderWizard";

export default function PreOrder() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-space-xl w-full">
      <WizardHeader />
      <PreOrderWizard />
    </div>
  );
}

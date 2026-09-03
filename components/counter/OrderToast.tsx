import { CheckCircle } from "lucide-react";

export function OrderToast({
  visible,
  message,
}: {
  visible: boolean;
  message: string;
}) {
  return (
    <div
      className={
        visible
          ? "fixed bottom-20 md:bottom-8 right-6 z-50 bg-inverse-surface text-inverse-on-surface px-space-md py-space-sm rounded-xl shadow-xl flex items-center gap-space-xs transform translate-y-0 opacity-100 transition-all duration-300"
          : "fixed bottom-20 md:bottom-8 right-6 z-50 bg-inverse-surface text-inverse-on-surface px-space-md py-space-sm rounded-xl shadow-xl flex items-center gap-space-xs transform translate-y-24 opacity-0 pointer-events-none transition-all duration-300"
      }
    >
      <CheckCircle className="text-emerald-400" size={20} />
      <span className="font-body text-body-md font-medium">{message}</span>
    </div>
  );
}

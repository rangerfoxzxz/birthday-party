import { PartyScreen } from "@/components/party-screen";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function NotFound() {
  return (
    <PartyScreen>
      <div className="m-auto max-w-sm text-center">
        <p className="font-display text-5xl italic">หลงทาง</p>
        <p className="mt-3 text-muted-foreground">หน้านี้ไม่มีในปาร์ตี้</p>
        <Link
          href="/"
          className={cn(
            buttonVariants({ size: "lg" }),
            "mt-6 inline-flex h-12 cursor-pointer rounded-full px-6",
          )}
        >
          กลับหน้าแรก
        </Link>
      </div>
    </PartyScreen>
  );
}

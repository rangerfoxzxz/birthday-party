import { PartyScreen } from "@/components/party-screen";

export function SorryScreen() {
  return (
    <PartyScreen quiet>
      <div className="m-auto w-full max-w-md">
        <section className="rise-in rounded-[2rem] border border-foreground/10 bg-card/85 px-6 py-12 text-center shadow-[0_30px_80px_oklch(0.12_0.06_305/0.5)] backdrop-blur-sm sm:px-10">
          <h1 className="font-display text-5xl italic leading-none text-balance sm:text-6xl">เสียใจด้วย</h1>
          <p className="mt-5 text-2xl font-semibold">ตอบผิด</p>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">กลับเข้าไลฟ์มาคุยกันต่อ</p>
        </section>
      </div>
    </PartyScreen>
  );
}

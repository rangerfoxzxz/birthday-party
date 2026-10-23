import { PartyScreen } from "@/components/party-screen";

export default function Loading() {
  return (
    <PartyScreen>
      <div className="m-auto h-2 w-24 animate-pulse rounded-full bg-primary/60" />
    </PartyScreen>
  );
}

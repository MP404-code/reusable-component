import Card from "@/components/card";

export default function HomePage() {
  return (
    <div className="space-y-4">
      <Card title="Home Card 1" description="Reusable card component" />
      <Card title="Home Card 2" description="Used on home page" />
    </div>
  );
}

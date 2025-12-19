import Hero from "@/components/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="flex-1 flex flex-col gap-6 px-4">
        <div className="text-center py-8">
          <p className="text-lg text-muted-foreground">
            Ready to start building your next project!
          </p>
        </div>
      </main>
    </>
  );
}

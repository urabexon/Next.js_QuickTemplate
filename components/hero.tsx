export default function Hero() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <div className="text-center">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">
          Your Project
        </h1>
        <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto">
          Built with Next.js, Supabase, and modern web technologies
        </p>
      </div>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}

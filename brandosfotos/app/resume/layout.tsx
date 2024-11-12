export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="inline-block max-w-screen-2xl text-center justify-center">
        {children}
      </div>
    </section>
  );
}

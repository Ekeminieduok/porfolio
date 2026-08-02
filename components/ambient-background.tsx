export function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-sky-600/15 blur-[120px] animate-float" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[100px] animate-float-slow" />
      <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] rounded-full bg-blue-600/10 blur-[90px]" />
    </div>
  );
}

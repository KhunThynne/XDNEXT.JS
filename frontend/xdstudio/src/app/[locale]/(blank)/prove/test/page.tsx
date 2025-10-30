export default function Page() {
  return (
    <div className="relative min-h-screen border">
      {/* Sticky Header */}
      <div id="header" className="sticky top-0 z-40 h-10 bg-yellow-200" />

      {/* Main Content */}
      <div
        className="absolute right-0 left-0 border bg-slate-100 "
        style={{
          top: "2.5rem",
          bottom: 0,
          height: "100vh",
        }}
      >
        <div className="h-full overflow-auto p-4">
          เนื้อหาส่วนกลาง (สูง 100vh จริง ไม่ชน header/footer)
        </div>
      </div>

      {/* Footer */}
      <div className="relative border bg-amber-700 p-4 flex-none">
        Footer ที่สูงเท่าไรก็ได้
      </div>
    </div>
  );
}

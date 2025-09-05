export default function TestWidth() {
  return (
    <div className="w-80 space-y-4 border border-amber-400 p-4">
      <div className=" space-y-4 border border-amber-400 p-4">
        <div className="w-max border bg-blue-100">
          <span>loooooooooooooongwordwithoutspaces</span>
        </div>
      </div>
      <div className="w-min border bg-green-100">
        <span>loooooooooooooongwordwithoutspaces</span>
      </div>
    </div>
  );
}

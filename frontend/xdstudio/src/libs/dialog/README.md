# 💬 Dynamic Dialog Hook Library (React + Shadcn(Radix) + Tailwind)

A flexible utility for rendering dynamic dialog components in React using Radix UI, Tailwind CSS, and custom configuration. This library helps you manage dialogs declaratively or imperatively with fine control over behavior, transitions, and structure.

---

## 🚀 Features

- ✅ Create reusable dialog instances using a hook or a component
- 🔁 Support for animations with transition-aware cleanup
- 🎯 Fine-grained control via options (`title`, `description`, `content`, `footer`, etc.)
- 🧩 Customizable Radix props (`modal`, `onOpenChange`, etc.)
- 🎨 Tailwind-compatible classes with optional animation handling
- 🧠 `DialogProvider` to manage global dialog rendering
- 🧪 Strong TypeScript support

---

## 📦 Installation

```bash
# This assumes you already use React, Tailwind and Radix UI
pnpm add @radix-ui/react-dialog



🚀 Usage
Wrap your app with <DialogProvider>
tsx
Copy
Edit
import { DialogProvider } from "@/libs/dialog/DialogProvider";

function App() {
  return (
    <DialogProvider>
      <YourApp />
    </DialogProvider>
  );
}



 Create a dialog with createHookDialog
tsx
Copy
Edit
import { createHookDialog } from "@/libs/dialog/createDialog";

export const useDeleteDialog = createHookDialog({
  title: "Delete Item",
  description: "Are you sure you want to delete this item?",
});


Open it in your component
tsx
Copy
Edit
import { useDeleteDialog } from "@/hooks/useDeleteDialog";

function MyComponent() {
  const { openDialog } = useDeleteDialog();

  return (
    <Button onClick={openDialog}>
      Delete
    </Button>
  );
}



 Runtime Override (Optional)
tsx
Copy
Edit
openDialog({
  title: "Confirm Logout",
  description: "Are you sure you want to log out?",
  content: <p>This will end your session.</p>,
  footer: (
    <>
      <Button variant="outline">Cancel</Button>
      <Button variant="destructive">Logout</Button>
    </>
  ),
});





 Dialog Options
You can customize specific parts of the dialog by passing props to:

dialog: root <Dialog /> props (e.g. modal, onOpenChange)

portal: Radix Dialog.Portal props

overlay: Radix Dialog.Overlay props

content: Radix Dialog.Content props

disableBackdropClose: Prevent closing on overlay click

Example:

tsx
Copy
Edit
openDialog({
  options: {
    dialog: { modal: true },
    overlay: { className: "bg-black/50" },
    disableBackdropClose: true,
  }
});




📘 API Reference
createHookDialog(initialProps: DialogInstanceProps)
Returns a hook that provides:

Method	Description
openDialog()	Opens dialog using initial props
openDialog(runtimeProps)	Opens dialog with merged runtime props
closeDialog()	Closes the dialog manually (if needed)

🛠 Built With
shadcn/ui

Radix UI Dialog

Framer Motion (optional)

Tailwind CSS

🧪 Example
tsx
Copy
Edit
const useDialogTest = createHookDialog({
  title: "Hello",
  description: "This is a dialog",
});

function MyComponent() {
  const { openDialog } = useDialogTest();

  return <Button onClick={() => openDialog()}>Open Dialog</Button>;
}
📂 File Structure Example
bash
Copy
Edit
/libs/dialog/
│
├── DialogProvider.tsx
├── DialogInstance.tsx
├── createDialog.ts
├── dialog.type.ts
🧠 Notes
Make sure you use <DialogProvider> high in the tree.

Hooks created from createHookDialog() must be called inside a React component.

ref is used internally for transition end cleanup; no forwardRef needed in React 19+.

📄 License
MIT © YourNameHere

yaml
Copy
Edit

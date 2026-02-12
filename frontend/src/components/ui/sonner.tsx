import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      position="top-right"
      richColors
      closeButton
      expand={true}
      visibleToasts={5}
      toastOptions={{
        classNames: {
          toast:
            "group toast bg-white text-foreground border border-border shadow-xl rounded-lg",
          description: "text-muted-foreground text-sm",
          actionButton: "bg-accent text-white font-medium",
          cancelButton: "bg-muted text-muted-foreground",
          error: "bg-red-50 border-red-200 text-red-800",
          success: "bg-green-50 border-green-200 text-green-800",
          warning: "bg-amber-50 border-amber-200 text-amber-800",
          info: "bg-blue-50 border-blue-200 text-blue-800",
        },
        duration: 5000,
      }}
      {...props}
    />
  );
};

export { Toaster, toast };

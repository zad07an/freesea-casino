import cn from "@/lib/utils";
import { createContext, HTMLAttributes, ReactNode, useContext } from "react";
import { Overlay } from "./Overlay";
import { XButton } from "./XButton";
import { usePreventScroll } from "@/hooks/usePreventScroll";

const DialogContext = createContext<boolean | undefined>(undefined);

const useDialogContext = (componentName: string) => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error(`${componentName} should be used within DialogContext`);
  }
  return context;
};

type DialogProps = {
  children: ReactNode;
  className?: string;
  onCloseDialog: () => void;
};

export const Dialog = ({ className, onCloseDialog, children }: DialogProps) => {
  usePreventScroll();

  return (
    <DialogContext.Provider value={true}>
      <Overlay onClose={onCloseDialog}>
        <div className={cn("relative", className)}>
          <XButton onClick={onCloseDialog} />
          {children}
        </div>
      </Overlay>
    </DialogContext.Provider>
  );
};

const DialogHeaderContext = createContext<boolean | undefined>(undefined);

const useDialogHeaderContext = (componentName: string) => {
  const context = useContext(DialogHeaderContext);
  if (!context) {
    throw new Error(
      `${componentName} should be used within DialogHeaderContext`
    );
  }
};

type DialogHeaderProps = HTMLAttributes<HTMLElement>;

export const DialogHeader = ({
  children,
  className,
  ...props
}: DialogHeaderProps) => {
  useDialogContext("DialogHeader");

  return (
    <DialogHeaderContext.Provider value={true}>
      <header className={cn(className)} {...props}>
        {children}
      </header>
    </DialogHeaderContext.Provider>
  );
};

type DialogTitleProps = HTMLAttributes<HTMLHeadingElement>;

export const DialogTitle = ({
  children,
  className,
  ...props
}: DialogTitleProps) => {
  useDialogHeaderContext("DialogTitle");

  return (
    <h4 className={cn(className)} {...props}>
      {children}
    </h4>
  );
};

type DialogDescriptionProps = HTMLAttributes<HTMLParagraphElement>;

export const DialogDescription = ({
  children,
  className,
  ...props
}: DialogDescriptionProps) => {
  useDialogHeaderContext("DialogDescription");

  return (
    <p className={cn(className)} {...props}>
      {children}
    </p>
  );
};

type DialogContentProps = HTMLAttributes<HTMLDivElement>;

export const DialogContent = ({
  children,
  className,
  ...props
}: DialogContentProps) => {
  useDialogContext("DialogContent");

  return (
    <div className={cn(className)} {...props}>
      {children}
    </div>
  );
};

type DialogFootertProps = HTMLAttributes<HTMLElement>;

export const DialogFootert = ({
  children,
  className,
  ...props
}: DialogFootertProps) => {
  useDialogContext("DialogFootert");

  return (
    <footer className={cn(className)} {...props}>
      {children}
    </footer>
  );
};

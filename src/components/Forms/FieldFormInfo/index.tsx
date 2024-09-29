import { cn } from "@/lib/utils";
import { FieldApi } from "@tanstack/react-form";

/**
 * Displays error messages for the provided field
 */
const FieldInfo = ({
  field,
  className,
}: {
  // Disabling this rule because the field structure is dynamic and we need flexibility. Field prop is already type-safe.
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: FieldApi<any, any, any, any>;
  className?: string;
}) => {
  return (
    <>
      {field.state.meta.isTouched && field.state.meta.errors.length ? (
        <p className={cn("text-sm font-medium text-destructive", className)}>
          {JSON.stringify(field.state.meta.errors)}
        </p>
      ) : null}
    </>
  );
};
export { FieldInfo };

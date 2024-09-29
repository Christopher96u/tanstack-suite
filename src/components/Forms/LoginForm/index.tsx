import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { LoginSchema } from "./schemas";
import { FieldInfo } from "../FieldFormInfo";

const LoginForm = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validatorAdapter: zodValidator(),
    validators: {
      onChange: LoginSchema,
    },
    onSubmit: ({ value }) => {
      console.log("Value to submit", value);
    },
  });

  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>Get back to you account in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          className="my-4 space-y-2"
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <form.Field name="email">
            {(field) => (
              <div className="grid gap-1.5">
                <Label htmlFor={field.name}>Email</Label>
                <Input
                  placeholder="jhon@doe.com"
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                <FieldInfo field={field} />
              </div>
            )}
          </form.Field>
          <form.Field name="password">
            {(field) => (
              <div className="grid gap-1.5">
                <Label htmlFor={field.name}>Password</Label>
                <Input
                  placeholder="test123"
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                <FieldInfo field={field} />
              </div>
            )}
          </form.Field>
          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
            children={([canSubmit, isSubmitting]) => (
              <Button type="submit" size="sm" disabled={!canSubmit}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            )}
          />
        </form>
      </CardContent>
    </Card>
  );
};
export { LoginForm };

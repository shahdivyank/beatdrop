import { z } from "zod";

export const submit = <T extends z.ZodObject<any>>({
  data,
  field,
  schema,
}: {
  data: Partial<z.infer<T>>;
  field: string;
  schema: T;
}) => {
  const optional = schema.partial();
  const test = optional.required({
    [field]: true,
  });
  const result = test.safeParse(data);

  if (!result.success) {
    return result.error.errors[0].message;
  }
};

import { z } from "zod";

export const schema = z.object({
  username: z.string().min(1, { message: "This username is not available." }),
  name: z.string().min(1, { message: "This name is not available." }),
});

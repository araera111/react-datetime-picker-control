import { createTRPCReact } from "@trpc/react-query";
// eslint-disable-next-line import/no-relative-packages -- trpcでバックエンドの型を参照するため
import type { AppRouter } from "../../../back/src/server";

export const trpc = createTRPCReact<AppRouter>();

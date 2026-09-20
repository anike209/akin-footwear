// Server-side Supabase client (used in vendor dashboard routes) — wired up in Step 7.
// import { createServerClient } from "@supabase/ssr";
// import { cookies } from "next/headers";
//
// export function createClient() {
//   const cookieStore = cookies();
//   return createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//     { cookies: { get: (name) => cookieStore.get(name)?.value } }
//   );
// }

import { auth } from "@/src/lib/auth";
import { ROUTES } from "@/src/lib/routes";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect(ROUTES.auth.login);
  } else {
    redirect(ROUTES.dashboard.root);
  }
};

export default page;

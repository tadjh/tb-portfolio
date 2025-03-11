// ./src/pages/donate/[project].ts
import type { APIRoute } from "astro";

export const prerender = false;

const projects = {
  chatjack: "https://www.paypal.com/donate/?hosted_button_id=XHXZN8C8MZ2B6",
};

export const GET: APIRoute = ({ params, redirect }) => {
  const project = params.project as keyof typeof projects;
  if (project in projects) {
    return redirect(projects[project], 307);
  }
  // If the project is not found, redirect to the main donation page
  return redirect("https://tadjh.com");
};

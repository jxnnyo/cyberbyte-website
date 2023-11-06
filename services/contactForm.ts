"use server";
import {redirect} from "next/navigation";

export async function contactForm(data: FormData) {
  const res = await fetch("https://formspree.io/f/mqkwewrv", {
    method: "POST",
    body: data,
  });

  redirect("/contact/thanks");
}
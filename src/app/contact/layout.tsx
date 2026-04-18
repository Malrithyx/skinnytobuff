import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Skinny to Buff",
  description: "Have a question about your home workout or a product recommendation? Get in touch with the Skinny to Buff team.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

"use client";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  useEffect(() => {
    // Redirect to the new portfolio page
    window.location.href = "https://kokas340.github.io/portfolio2.0/";
  }, []);

  // This component won't render because the page will be redirected before it gets a chance to render
  return null;
}

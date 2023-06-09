"use client";

import React from "react";
import useSWR from "swr";

const url = "https://api.quotable.io/random?tags=technology";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function StaticPage() {
  const { data, error, isLoading } = useSWR(url, fetcher);

  <h1>Client Page</h1>;
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return <div>{data.content}</div>;
}

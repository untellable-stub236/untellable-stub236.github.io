"use client";

export default function ErrorPage({ error }: { error: Error }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold mb-4">An unexpected error occurred</h1>
      <p className="text-gray-600">{error.message}</p>
    </div>
  );
}

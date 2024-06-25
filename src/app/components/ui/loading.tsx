import Image from "next/image";

export function Loading() {
  return (
    <Image
      src="/images/loading.gif"
      alt="loading..."
      width={150}
      height={150}
    />
  );
}

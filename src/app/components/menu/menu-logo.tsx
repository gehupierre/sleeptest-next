import Image from "next/image";

export function MenuLogo() {
  return (
    <div className="flex-1 items-center flex-shrink-0 mr-6 pl-3">
      <Image
        src="/images/logo.gif"
        alt="GetSleepTest.com"
        width={163}
        height={71}
      />
      <span className="font-semibold text-xl tracking-tight">
        <span className="sr-only">home diagnostics division ION my Sleep</span>
      </span>
    </div>
  );
}

import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 flex flex-col text-center item-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold">
          Your Marketplace for highquality{" "}
          <span className="text-blue-500">digital assets</span>
        </h1>
      </div>
    </MaxWidthWrapper>
  );
}

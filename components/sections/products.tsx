import Image from "next/image";
import React from "react";

const ProductsSection = () => {
  return (
    <section className="flex min-h-screen w-screen shrink-0 flex-col justify-center px-6 py-24 md:px-12">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="font-sans text-5xl font-light leading-[1.1] tracking-tight text-foreground md:text-6xl">
            <span className="text-balance">Our Products</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-foreground/80">
            Access our platform across all your devices with our mobile app and
            browser extension.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Mobile App Card */}
          <div className="animate-in fade-in slide-in-from-bottom-4 rounded-2xl border border-foreground/20 bg-foreground/10 p-8 backdrop-blur-md duration-700 delay-100">
            <div className="mb-6 flex h-48 items-center justify-center rounded-lg bg-foreground/5">
              <Image
                src="/mobile-app-interface.png"
                alt="Mobile App"
                width={200}
                height={300}
                className="h-full w-auto object-contain"
              />
            </div>
            <h3 className="mb-2 font-sans text-2xl font-semibold text-foreground">
              Mobile App
            </h3>
            <p className="mb-6 text-foreground/80">
              Manage your cross-chain payments on the go with our native mobile
              application.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button className="flex-1 rounded-lg bg-foreground px-4 py-3 font-sans font-semibold text-background transition-all duration-300 hover:bg-foreground/90">
                Download iOS
              </button>
              <button className="flex-1 rounded-lg border border-foreground/30 px-4 py-3 font-sans font-semibold text-foreground transition-all duration-300 hover:bg-foreground/10">
                Download Android
              </button>
            </div>
          </div>

          {/* Browser Extension Card */}
          <div className="animate-in fade-in slide-in-from-bottom-4 rounded-2xl border border-foreground/20 bg-foreground/10 p-8 backdrop-blur-md duration-700 delay-200">
            <div className="mb-6 flex h-48 items-center justify-center rounded-lg bg-foreground/5">
              <Image
                src="/browser-extension-interface.jpg"
                alt="Browser Extension"
                width={300}
                height={300}
                className="h-full w-auto object-contain"
              />
            </div>
            <h3 className="mb-2 font-sans text-2xl font-semibold text-foreground">
              Browser Extension
            </h3>
            <p className="mb-6 text-foreground/80">
              Seamlessly integrate cross-chain payments into your browser for
              quick access.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button className="flex-1 rounded-lg bg-foreground px-4 py-3 font-sans font-semibold text-background transition-all duration-300 hover:bg-foreground/90">
                Add to Chrome
              </button>
              <button className="flex-1 rounded-lg border border-foreground/30 px-4 py-3 font-sans font-semibold text-foreground transition-all duration-300 hover:bg-foreground/10">
                Add to Edge
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

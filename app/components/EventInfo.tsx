import Image from "next/image";

export default function EventInfo() {
  return (
    <section className="py-2 bg-accent px-6 flex flex-col w-full items-start justify-center">
      <div className="w-full flex justify-center">
        <Image
          src="/ornament-up-green.svg"
          alt=""
          width={360}
          height={360}
          className="ml-auto mr-auto"
        />
      </div>
      <div className="flex flex-col md:flex-row max-w-6xl w-full mx-auto text-center items-start gap-12">
        {/* Civil */}
        <div className="flex flex-col w-full md:w-1/2 justify-center">
          <div className="flex h-[150px] items-center justify-center">
            <Image
              src="/argollas.svg"
              alt=""
              width={222}
              height={222}
              className="ml-auto mr-auto"
            />
          </div>
          <h3 className="font-[var(--font-playfair)] text-4xl mb-4 font-bold">
            Ceremonia Civil
          </h3>
          <p className="text-2xl">Registro Civil</p>
          <p className="text-sm opacity-70">24 de Abril · 10:00 AM</p>

          <div className="flex flex-col w-full mt-10">
            <a
              href="https://maps.app.goo.gl/R34YHTmVXjLSkMjXA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <Image src="/location.svg" alt="" width={50} height={50} />

              <p className="text-md opacity-70 mt-5 hover:underline">
                20 de noviembre #415
              </p>
              <p className="text-md opacity-70 hover:underline">
                Centro histórico de Morelia
              </p>
            </a>
          </div>
        </div>

        {/* Brunch */}
        <div className="flex flex-col w-full md:w-1/2 justify-center">
          <div className="flex h-[150px] items-center justify-center">
            <Image
              src="/brunch.svg"
              alt=""
              width={112}
              height={112}
              className="ml-auto mr-auto"
            />
          </div>
          <h3 className="font-[var(--font-playfair)] text-2xl text-4xl mb-4 font-bold">
            Brunch
          </h3>
          <p className="text-2xl">Restaurante Casa Paula</p>
          <p className="text-sm opacity-70">24 de Abril · 11:00 AM</p>
          <div className="flex flex-col w-full mt-10">
            <a
              href="https://maps.app.goo.gl/Jp2AKMbiZEpD6KXV8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <Image src="/location.svg" alt="" width={50} height={50} />

              <p className="text-md opacity-70 mt-5 hover:underline">
                Mariano Arista #315
              </p>
              <p className="text-md opacity-70 hover:underline">
                Chapultepec Oriente
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Image
          src="/ornament-down-green.svg"
          alt=""
          width={360}
          height={360}
          className="ml-auto mr-auto mt-8"
        />
      </div>
    </section>
  );
}

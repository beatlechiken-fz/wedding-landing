import Image from "next/image";

export default function Quotes() {
  return (
    <section className="py-2 px-6 text-center max-w-3xl mx-auto">
      <div className="w-full flex justify-center">
        <Image
          src="/ornament-up-green.svg"
          alt=""
          width={360}
          height={360}
          className="ml-auto mr-auto"
        />
      </div>

      <p className="italic text-xl mb-6 mt-12">
        “A nuestros padres, gracias por su amor. Hoy iniciamos esta nueva etapa
        con gratitud en el corazón.”
      </p>

      <p className="italic text-xl mb-6 mt-12">
        “El amor no consiste en mirarse el uno al otro, sino en mirar juntos en
        la misma dirección.”
      </p>

      <p className="italic text-xl">
        “Encontrarte fue el destino, quedarme contigo fue mi elección.”
      </p>
    </section>
  );
}

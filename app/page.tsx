import Image from 'next/image'

export default function Home() {
  return (
    < div className="flex h-screen max-hscreen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12"
          />
        </div>
      </section>
    </ div>
  )

}

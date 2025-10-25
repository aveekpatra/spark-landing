import Image from 'next/image'

export default function ContentSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="font-sans relative z-10 mx-auto max-w-xl text-center text-4xl font-medium lg:text-5xl">O nas</h2>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div className="relative mb-6 sm:mb-0">
                        <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            <Image src="/mydesk.png" className="rounded-[15px] shadow" alt="Spark Service workspace" width={1207} height={929} />
                        </div>
                    </div>

                    <div className="relative space-y-4">
                        <p className="text-muted-foreground">
                            Spark Service je v razvoju rastoče podjetje, ki združuje računalniške servise, programiranje, izdelavo spletnih strani in aplikacij.
                        </p>
                        <p className="text-muted-foreground">
                            Nastalo je z željo ponuditi <span className="font-sans text-accent-foreground font-bold">vse digitalne rešitve na enem mestu</span>, od popravila računalnika do postavitve moderne spletne strani ali razvojne rešitve po meri.
                        </p>
                        <p className="text-muted-foreground">
                            Čeprav je projekt še v razvoju, že zdaj delamo z mislijo na kakovost, zanesljivost in jasno komunikacijo s strankami.
                        </p>
                        <p className="text-muted-foreground">
                            Naš cilj je ustvariti preproste, učinkovite in trajne rešitve, ki ljudem in podjetjem olajšajo vsakdan pri uporabi tehnologije.
                        </p>

                        <div className="pt-6">
                            <blockquote className="border-l-4 pl-4">
                                <p>Z vsakim korakom širimo znanje, nadgrajujemo storitve in gradimo zaupanje, da bo Spark Service postal sinonim za zanesljivo tehnično podporo in sodobne spletne rešitve.</p>

                                <div className="mt-6 space-y-3">
                                    <cite className="font-sans block font-medium">Spark Service ekipa</cite>
                                    <p className="text-sm text-muted-foreground">IT rešitve na enem mestu</p>
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

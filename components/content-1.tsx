import Image from 'next/image'

export default function ContentSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
                    <h2 className="font-['Comfortaa'] text-balance text-4xl font-semibold lg:text-6xl">O nas</h2>
                    <p className="font-['Comfortaa']">Spark Service ponuja celovite IT rešitve - od računalniškega servisa do razvoja spletnih strani in aplikacij. Vse na enem mestu.</p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div className="relative mb-6 sm:mb-0">
                        <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            <Image 
                                src="/min/Cozy Coding Workspace-min.png" 
                                className="rounded-[15px] shadow" 
                                alt="Cozy coding workspace - Spark Service development environment" 
                                width={2700} 
                                height={1440} 
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    </div>

                    <div className="relative space-y-4">
                        <p className="text-muted-foreground font-['Comfortaa']">
                            Spark Service je dinamično podjetje, specializirano za celovite IT storitve, ki obsegajo sistemsko podporo, razvoj programskih rešitev ter izdelavo spletnih platform in aplikacij.
                        </p>
                        <p className="text-muted-foreground font-['Comfortaa']">
                            Naša vizija je zagotoviti <span className="font-['Comfortaa'] text-accent-foreground font-bold">integrirane digitalne rešitve pod eno streho</span> – od tehnične podpore in vzdrževanja do razvoja naprednih spletnih platform in prilagojenih programskih rešitev.
                        </p>
                        <p className="text-muted-foreground font-['Comfortaa']">
                            Kot rastoče podjetje se zavezujemo k visokim standardom kakovosti, zanesljivosti in transparentni komunikaciji z našimi poslovnimi partnerji.
                        </p>
                        <p className="text-muted-foreground font-['Comfortaa']">
                            Naš pristop temelji na razvoju skalabilnih, učinkovitih rešitev, ki optimizirajo poslovne procese in povečujejo konkurenčnost naših strank.
                        </p>

                        <div className="pt-6">
                            <blockquote className="border-l-4 pl-4">
                                <p className="font-['Comfortaa']">Kontinuirano razvijamo naše kompetence, širimo portfelj storitev in krepimo partnerstva, da postanemo vodilni ponudnik zanesljivih IT rešitev in inovativnih digitalnih platform.</p>

                                <div className="mt-6 space-y-3">
                                    <cite className="font-['Comfortaa'] block font-medium">Spark Service ekipa</cite>
                                    <p className="text-sm text-muted-foreground font-['Comfortaa']">Celovite IT rešitve za poslovni uspeh</p>
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

'use client'
import { cn } from '@/lib/utils'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Bold, Calendar1, Ellipsis, Italic, Strikethrough, Underline } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function FeaturesSection() {
    return (
        <section>
            <div className="py-24">
                <div className="mx-auto w-full max-w-5xl px-6">
                    <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
                        <h2 className="font-['Comfortaa'] text-balance text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Zakaj izbrati nas?</h2>
                        <p className="font-['Comfortaa'] text-base leading-7 text-gray-600 dark:text-gray-300">Spark Service izstopa s svojo predanostjo kakovosti, hitro odzivnostjo in osebnim pristopom. Naša ekipa strokovnjakov zagotavlja celovite digitalne rešitve, ki presegajo pričakovanja strank in prinašajo dolgoročno vrednost.</p>
                    </div>

                    <div className="mt-12 grid gap-4 sm:grid-cols-2 md:mt-16">
                        <Card className="p-6">
                            <div className="flex aspect-video items-center justify-center">
                                <CodeIllustration className="w-full" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-foreground text-xl font-semibold font-['Comfortaa']">Strokovnost in izkušnje</h3>
                                <p className="text-muted-foreground mt-4 text-balance text-lg font-['Comfortaa']">Naša ekipa ima bogate izkušnje na področju IT storitev, programiranja in spletnega razvoja. Vsak projekt obravnavamo s profesionalnostjo in strokovnim znanjem.</p>
                            </div>
                        </Card>
                        <Card className="p-6">
                            <div className="flex aspect-video items-center justify-center">
                                <ScheduleIllustation
                                    className="border"
                                    variant="mixed"
                                />
                            </div>
                            <div className="text-center">
                                <h3 className="text-foreground text-xl font-semibold font-['Comfortaa']">Celovite rešitve</h3>
                                <p className="text-muted-foreground mt-4 text-balance text-lg font-['Comfortaa']">Ponujamo vse digitalne storitve na enem mestu - od popravila računalnikov do razvoja spletnih aplikacij. To vam prihrani čas in zagotavlja konsistentnost.</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

type IllustrationProps = {
    className?: string
    variant?: 'elevated' | 'outlined' | 'mixed'
}

export const ScheduleIllustation = ({ className, variant = 'elevated' }: IllustrationProps) => {
    return (
        <div className={cn('relative', className)}>
            <div
                className={cn('bg-background -translate-x-1/8 absolute flex -translate-y-[110%] items-center gap-2 rounded-lg p-1', {
                    'shadow-black-950/10 shadow-lg': variant === 'elevated',
                    'border-foreground/10 border': variant === 'outlined',
                    'border-foreground/10 border shadow-md shadow-black/5': variant === 'mixed',
                })}>
                <Button
                    size="sm"
                    className="rounded-sm">
                    <Calendar1 className="size-3" />
                    <span className="text-sm font-medium font-['Comfortaa']">Schedule</span>
                </Button>
                <span className="bg-border block h-4 w-px"></span>
                <ToggleGroup
                    type="multiple"
                    size="sm"
                    className="gap-0.5 *:rounded-md">
                    <ToggleGroupItem
                        value="bold"
                        aria-label="Toggle bold">
                        <Bold className="size-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="italic"
                        aria-label="Toggle italic">
                        <Italic className="size-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="underline"
                        aria-label="Toggle underline">
                        <Underline className="size-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="strikethrough"
                        aria-label="Toggle strikethrough">
                        <Strikethrough className="size-4" />
                    </ToggleGroupItem>
                </ToggleGroup>
                <span className="bg-border block h-4 w-px"></span>
                <Button
                    size="icon"
                    className="size-8"
                    variant="ghost"
                    aria-label="Več možnosti">
                    <Ellipsis className="size-3" />
                </Button>
            </div>
            <span className="font-['Comfortaa']">
                <span className="bg-secondary text-secondary-foreground py-1 font-['Comfortaa']">Tomorrow 8:30 pm</span> is our priority.
            </span>
        </div>
    )
}

export const CodeIllustration = ({ className }: { className?: string }) => {
    return (
        <div className={cn('[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_50%,transparent_100%)]', className)}>
            <ul className="text-muted-foreground mx-auto w-fit font-['Comfortaa'] text-2xl font-medium">
                {['Images', 'Variables', 'Pages', 'Components', 'Styles'].map((item, index) => (
                    <li
                        key={index}
                        className={cn(index == 2 && "text-foreground before:absolute before:-translate-x-[110%] before:text-orange-500 before:content-['Import'] before:font-['Comfortaa']")}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

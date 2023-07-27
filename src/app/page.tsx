import EndSection from '@/components/EndSection'
import Hero from '@/components/Hero'
import MidSection from '@/components/MidSection'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <MidSection />
      <EndSection />
    </main>
  )
}

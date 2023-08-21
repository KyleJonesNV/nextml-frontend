import Images from '@/components/Images/Images'

export default function Home() {
  return (
    <>
      <div className="navbar bg-base-100">        
        <a className="btn text-white bg-violet-500 normal-case text-xl">NextML</a>
      </div>
      <main className="flex min-h-screen flex-col items-center p-24">
        <Images />
      </main>
    </>
  )
}

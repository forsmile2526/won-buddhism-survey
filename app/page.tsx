import SurveyForm from '@/components/SurveyForm'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          원불교 설문조사
        </h1>
        <p className="text-center text-lg mb-12">
          환영합니다! 원불교에 대한 여러분의 의견을 들려주세요.
        </p>
        <SurveyForm />
        <div className="mt-8 text-center">
          <Link
            href="/admin"
            className="text-primary hover:text-primary/80 underline"
          >
            관리자 페이지
          </Link>
        </div>
      </div>
    </main>
  )
} 
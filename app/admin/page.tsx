'use client'

import { useEffect, useState } from 'react'

interface Survey {
  id: number
  name: string
  age: number
  gender: string
  experience: string
  feedback: string
  createdAt: string
}

export default function AdminPage() {
  const [surveys, setSurveys] = useState<Survey[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchSurveys = async () => {
      try {
        const response = await fetch('/api/survey')
        if (!response.ok) {
          throw new Error('Failed to fetch surveys')
        }
        const data = await response.json()
        setSurveys(data)
      } catch (error) {
        console.error('Error fetching surveys:', error)
        setError('설문조사 결과를 불러오는데 실패했습니다.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchSurveys()
  }, [])

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="text-lg font-semibold">로딩 중...</h2>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-red-600">{error}</h2>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">설문조사 결과</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                이름
              </th>
              <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                나이
              </th>
              <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                성별
              </th>
              <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                접촉 경험
              </th>
              <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                의견
              </th>
              <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                제출일
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {surveys.map((survey) => (
              <tr key={survey.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {survey.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {survey.age}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {survey.gender === 'male' ? '남성' : survey.gender === 'female' ? '여성' : '기타'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {survey.experience === 'never' ? '없음' :
                   survey.experience === 'once' ? '1-2회' :
                   survey.experience === 'sometimes' ? '가끔' : '자주'}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {survey.feedback}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {new Date(survey.createdAt).toLocaleDateString('ko-KR')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
} 
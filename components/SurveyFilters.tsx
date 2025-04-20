'use client'

interface SurveyFiltersProps {
  onFilterChange: (filters: {
    gender: string
    experience: string
    ageRange: string
  }) => void
}

export default function SurveyFilters({ onFilterChange }: SurveyFiltersProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    onFilterChange({ [name]: value } as any)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow mb-8">
      <h3 className="text-lg font-semibold mb-4">필터</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
            성별
          </label>
          <select
            id="gender"
            name="gender"
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          >
            <option value="">전체</option>
            <option value="male">남성</option>
            <option value="female">여성</option>
            <option value="other">기타</option>
          </select>
        </div>

        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
            접촉 경험
          </label>
          <select
            id="experience"
            name="experience"
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          >
            <option value="">전체</option>
            <option value="never">없음</option>
            <option value="once">1-2회</option>
            <option value="sometimes">가끔</option>
            <option value="often">자주</option>
          </select>
        </div>

        <div>
          <label htmlFor="ageRange" className="block text-sm font-medium text-gray-700 mb-1">
            나이대
          </label>
          <select
            id="ageRange"
            name="ageRange"
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          >
            <option value="">전체</option>
            <option value="10">10대</option>
            <option value="20">20대</option>
            <option value="30">30대</option>
            <option value="40">40대</option>
            <option value="50">50대</option>
            <option value="60">60대 이상</option>
          </select>
        </div>
      </div>
    </div>
  )
} 
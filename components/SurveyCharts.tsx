'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts'

interface Survey {
  id: number
  name: string
  age: number
  gender: string
  experience: string
  feedback: string
  createdAt: string
}

interface SurveyChartsProps {
  surveys: Survey[]
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

export default function SurveyCharts({ surveys }: SurveyChartsProps) {
  // 성별 분포 계산
  const genderData = surveys.reduce((acc, survey) => {
    const gender = survey.gender === 'male' ? '남성' : survey.gender === 'female' ? '여성' : '기타'
    acc[gender] = (acc[gender] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const genderChartData = Object.entries(genderData).map(([name, value]) => ({
    name,
    value
  }))

  // 접촉 경험 분포 계산
  const experienceData = surveys.reduce((acc, survey) => {
    const experience = survey.experience === 'never' ? '없음' :
                      survey.experience === 'once' ? '1-2회' :
                      survey.experience === 'sometimes' ? '가끔' : '자주'
    acc[experience] = (acc[experience] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const experienceChartData = Object.entries(experienceData).map(([name, value]) => ({
    name,
    value
  }))

  // 나이대 분포 계산
  const ageData = surveys.reduce((acc, survey) => {
    const ageGroup = Math.floor(survey.age / 10) * 10
    const ageRange = `${ageGroup}대`
    acc[ageRange] = (acc[ageRange] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const ageChartData = Object.entries(ageData)
    .sort(([a], [b]) => parseInt(a) - parseInt(b))
    .map(([name, value]) => ({
      name,
      value
    }))

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">성별 분포</h3>
        <PieChart width={400} height={300}>
          <Pie
            data={genderChartData}
            cx={200}
            cy={150}
            labelLine={false}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {genderChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">접촉 경험 분포</h3>
        <PieChart width={400} height={300}>
          <Pie
            data={experienceChartData}
            cx={200}
            cy={150}
            labelLine={false}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {experienceChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>

      <div className="bg-white p-6 rounded-lg shadow md:col-span-2">
        <h3 className="text-lg font-semibold mb-4">나이대 분포</h3>
        <BarChart
          width={800}
          height={300}
          data={ageChartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" name="응답자 수" />
        </BarChart>
      </div>
    </div>
  )
} 
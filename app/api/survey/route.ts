import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // 임시 데이터
    const mockData = [
      {
        id: 1,
        name: "홍길동",
        age: 25,
        gender: "male",
        experience: "never",
        feedback: "원불교에 대해 더 알고 싶습니다.",
        createdAt: new Date().toISOString()
      },
      {
        id: 2,
        name: "김영희",
        age: 35,
        gender: "female",
        experience: "sometimes",
        feedback: "좋은 인상을 받았습니다.",
        createdAt: new Date().toISOString()
      }
    ];

    return NextResponse.json(mockData)
  } catch (error) {
    console.error('Error fetching surveys:', error)
    return NextResponse.json(
      { error: "데이터를 불러오는데 실패했습니다." },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Error saving survey:', error)
    return NextResponse.json(
      { error: "데이터 저장에 실패했습니다." },
      { status: 500 }
    )
  }
}

export const dynamic = 'force-dynamic'; 
import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const surveys = await prisma.survey.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })
    return NextResponse.json(surveys)
  } catch (error) {
    console.error('Error fetching surveys:', error)
    return NextResponse.json(
      { error: 'Failed to fetch surveys' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, age, gender, experience, feedback } = body

    const survey = await prisma.survey.create({
      data: {
        name,
        age: parseInt(age),
        gender,
        experience,
        feedback,
      },
    })

    return NextResponse.json(survey, { status: 201 })
  } catch (error) {
    console.error('Error creating survey:', error)
    return NextResponse.json(
      { error: 'Failed to create survey' },
      { status: 500 }
    )
  }
} 
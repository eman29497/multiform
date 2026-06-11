import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/mongodb';
import User from '../../models/User';
export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const newUser = await User.create(body);
    return NextResponse.json({ message: "Data saved!", user: newUser }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error saving data" }, { status: 500 });
  }
}
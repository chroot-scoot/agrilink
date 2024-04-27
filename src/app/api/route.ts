import { NextRequest, NextResponse } from 'next/server';
import { StatusCodes } from 'http-status-codes';

export async function GET() {
  return NextResponse.json({ msg: 'Hello, World' }, { status: StatusCodes.OK });
}

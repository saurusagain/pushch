import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export interface ChannelUser {
  name: string;
  idch: string[];
}

const DEFAULT_DATA: ChannelUser[] = [
  {
    name: 'saurus',
    idch: [
      '120363418964199743@newsletter',
      '120363429190136593@newsletter',
    ],
  },
];

// In-memory cache for serverless lifetime
let memoryStore: ChannelUser[] = [...DEFAULT_DATA];

function getFilePath(): string {
  return path.join(process.cwd(), 'data', 'idch.json');
}

function readStoredData(): ChannelUser[] {
  try {
    const filePath = getFilePath();
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf-8');
      const parsed = JSON.parse(content);
      if (Array.isArray(parsed) && parsed.length > 0) {
        memoryStore = parsed;
        return parsed;
      }
    }
  } catch (err) {
    console.error('Failed reading file, falling back to memoryStore', err);
  }
  return memoryStore;
}

function writeStoredData(data: ChannelUser[]): void {
  memoryStore = data;
  try {
    const filePath = getFilePath();
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.warn('Filesystem is read-only on Vercel runtime, kept in memory store', err);
  }
}

export async function GET() {
  const data = readStoredData();
  return NextResponse.json(data, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Cache-Control': 'no-store, max-age=0',
    },
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Support direct full array update (Admin replacement)
    if (Array.isArray(body)) {
      writeStoredData(body);
      return NextResponse.json(
        {
          success: true,
          message: 'Database /idch.json berhasil diperbarui secara penuh.',
          data: body,
        },
        {
          status: 200,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Cache-Control': 'no-store, max-age=0',
          },
        }
      );
    }

    const { name, idch } = body;

    if (!name || typeof name !== 'string') {
      return NextResponse.json(
        { error: 'Field "name" is required and must be a string.' },
        { status: 400, headers: { 'Access-Control-Allow-Origin': '*' } }
      );
    }

    const cleanName = name.trim();
    if (!cleanName) {
      return NextResponse.json(
        { error: 'Field "name" cannot be empty.' },
        { status: 400, headers: { 'Access-Control-Allow-Origin': '*' } }
      );
    }

    let rawList: string[] = [];
    if (Array.isArray(idch)) {
      rawList = idch;
    } else if (typeof idch === 'string') {
      rawList = idch
        .split(/[\n,]+/)
        .map((s) => s.trim())
        .filter(Boolean);
    }

    if (rawList.length === 0) {
      return NextResponse.json(
        { error: 'Field "idch" must contain at least one newsletter channel ID.' },
        { status: 400, headers: { 'Access-Control-Allow-Origin': '*' } }
      );
    }

    const currentData = readStoredData();
    const existingIndex = currentData.findIndex(
      (item) => item.name.toLowerCase() === cleanName.toLowerCase()
    );

    if (existingIndex !== -1) {
      // Append unique channels to existing name
      const existingChannels = new Set(currentData[existingIndex].idch);
      rawList.forEach((c) => existingChannels.add(c));
      currentData[existingIndex].idch = Array.from(existingChannels);
    } else {
      // Create new user entry
      currentData.push({
        name: cleanName,
        idch: Array.from(new Set(rawList)),
      });
    }

    writeStoredData(currentData);

    return NextResponse.json(
      {
        success: true,
        message: `ID Channel successfully merged for ${cleanName}`,
        data: currentData,
      },
      {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'no-store, max-age=0',
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body or JSON syntax.' },
      { status: 400, headers: { 'Access-Control-Allow-Origin': '*' } }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}


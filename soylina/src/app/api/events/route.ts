import { NextResponse } from 'next/server';
import { supabaseServer } from '@/config/supabaseconfig';
import { EventI } from '@/utils/interfaces/interfaces';

export interface EventsAPII {
  dataType: string;
  data: EventI[];
}

const responseData: EventsAPII = { dataType: 'Events', data: [] };

export async function GET() {
  try {
    const { data: events, error } = await supabaseServer
      .from('events')
      .select('title,date,picture,country,locationLink,locationName,tickets')
      .eq('deleted', 0);

    if (error) {
      console.error('Supabase response error');
      console.log(error);
    }

    if (events) {
      responseData.data = events.sort(
        (a: EventI, b: EventI) =>
          new Date(a.date).getTime() - new Date(b.date).getTime()
      );
      return new NextResponse(JSON.stringify(responseData), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      return new NextResponse(JSON.stringify(responseData), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    console.error('Error fetching pictures:', error);
    return new NextResponse(JSON.stringify(responseData), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
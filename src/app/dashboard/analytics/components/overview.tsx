'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { llmResponse } from '../../../api/llm/llm';
import { stringify } from 'querystring';

export function Overview() {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    async function fetchSummary() {
      try {
        const result = await llmResponse(
          'dfa01413-e753-449a-8804-5d10c12716ae'
        );
        const resultString = JSON.stringify(result);
        setSummary(resultString);
      } catch (error) {
        console.error('Error fetching summary:', error);
      }
    }

    fetchSummary();
  }, []);

  return (
    <>
      <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-1">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </CardHeader>

          <CardContent>
            {summary !== null ? (
              <>
                <div className="text-lg font-semibold text-muted-foreground">
                  Here is What Gemini has to Summarize:
                </div>
                <p className="text-xl font-bold">{summary}</p>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
}

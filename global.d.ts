import React from 'react';
import type { PrismaClient } from '@prisma/client';
import type { MongoClient } from 'mongodb';

declare global {
  namespace globalThis {
    var prismadb: PrismaClient
  }
}


declare module 'react' {
  interface JSX {
    // This interface can be extended to include any additional HTML or SVG elements your project uses.
    // Here we're including just the 'div' and 'svg' elements as an example.
    // You can add more elements as needed.
    intrinsicElements: {
      div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
      svg: React.SVGProps<SVGSVGElement>;
    }
  }
}


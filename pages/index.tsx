import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';


interface Experience {
  title: string; 
  company: string; 
  date: string;
  highlights: string[];
}

interface HomeProps {
  experiences: Experience[];
}

const Home: React.FC<HomeProps> = ({ experiences }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Learn NextJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">My Experiences</h1>
        <div className="mt-6 w-full max-w-4xl">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold mb-2">{exp.title}</h2>
              <h3 className="text-xl mb-2">{exp.company}</h3>
              <p className="text-gray-600 mb-4">{exp.date}</p>
              <ul className="list-disc list-inside text-left mb-4">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
      
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const filePath = path.join(process.cwd(), 'pages/markdown', 'work-experience.md');

  const fileContents = fs.readFileSync(filePath, 'utf8');

  // Split the file content by '---' and filter out empty entries
  const rawEntries = fileContents.split('\n---\n').filter(entry => entry.trim().length > 0);

  const experiences: Experience[] = [];

  rawEntries.forEach(rawEntry => {
    const parsedEntry = matter(rawEntry);
    
    experiences.push({
      title: parsedEntry.data.title || '',
      company: parsedEntry.data.company || '',
      date: parsedEntry.data.date || '',
      highlights: parsedEntry.data.highlights || [],
    });
  });
  
  return {
    props: {
      experiences,
    },
  };
};

export default Home

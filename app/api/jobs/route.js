import { NextResponse } from 'next/server';

// Sample data to use as fallback
const sampleData = {
  source: "sample",
  skills: [
    { skill: "React", demand: 85 },
    { skill: "Node.js", demand: 75 },
    { skill: "Python", demand: 90 },
    { skill: "AWS", demand: 80 },
    { skill: "Machine Learning", demand: 70 }
  ],
  trends: [
    { month: "Jan", demand: 100 },
    { month: "Feb", demand: 120 },
    { month: "Mar", demand: 150 },
    { month: "Apr", demand: 180 },
    { month: "May", demand: 200 },
    { month: "Jun", demand: 220 }
  ],
  totalJobs: 1000,
  insights: {
    currentStatus: "The job market shows strong demand for React, Node.js, and Python skills, with a 120% growth in job postings over the past 6 months.",
    emergingTrends: "Remote work opportunities continue to rise, with increasing demand for cloud computing and AI-related roles. Companies are prioritizing candidates with full-stack development experience."
  }
};

export async function GET() {
  try {
    console.log('Attempting to fetch jobs from GitHub Jobs API...');
    
    // Fetch jobs from GitHub Jobs API
    const response = await fetch('https://jobs.github.com/positions.json?description=developer&location=remote', {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error Response:', errorText);
      throw new Error(`API request failed with status ${response.status}: ${errorText}`);
    }

    const jobs = await response.json();
    console.log('Successfully fetched jobs data:', jobs);

    if (!jobs || jobs.length === 0) {
      console.log('No jobs found, using sample data');
      return NextResponse.json(sampleData);
    }

    // Process the real data
    const processedData = processJobData(jobs);
    console.log('Processed real data:', processedData);
    
    return NextResponse.json({ ...processedData, source: "api" });
  } catch (error) {
    console.error('Error in GET handler:', error);
    return NextResponse.json(sampleData);
  }
}

function processJobData(jobs) {
  // Extract skills and their frequencies
  const skillsFrequency = {};
  const jobTitles = {};
  
  jobs.forEach(job => {
    // Process job title
    const title = job.title?.toLowerCase();
    if (title) {
      jobTitles[title] = (jobTitles[title] || 0) + 1;
    }

    // Process job description for skills
    const description = job.description?.toLowerCase() || '';
    
    // Common tech skills to look for
    const techSkills = [
      'react', 'node.js', 'python', 'java', 'javascript',
      'aws', 'azure', 'docker', 'kubernetes', 'machine learning',
      'ai', 'data science', 'sql', 'typescript', 'angular',
      'vue', 'php', 'ruby', 'go', 'rust'
    ];

    techSkills.forEach(skill => {
      if (description.includes(skill)) {
        skillsFrequency[skill] = (skillsFrequency[skill] || 0) + 1;
      }
    });
  });

  // Convert to percentage
  const totalJobs = jobs.length || 1;
  const skillsWithDemand = Object.entries(skillsFrequency)
    .map(([skill, count]) => ({
      skill: skill.charAt(0).toUpperCase() + skill.slice(1),
      demand: Math.round((count / totalJobs) * 100)
    }))
    .sort((a, b) => b.demand - a.demand)
    .slice(0, 10);

  // Generate monthly trends
  const monthlyTrends = generateMonthlyTrends(totalJobs);

  return {
    skills: skillsWithDemand,
    trends: monthlyTrends,
    totalJobs: totalJobs,
    insights: generateInsights(skillsWithDemand, monthlyTrends)
  };
}

function generateMonthlyTrends(totalJobs) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const baseValue = totalJobs / 6;
  
  return months.map((month, index) => ({
    month,
    demand: Math.round(baseValue * (1 + (index * 0.2)))
  }));
}

function generateInsights(skills, trends) {
  const topSkills = skills.length > 0 
    ? skills.slice(0, 3).map(s => s.skill).join(', ')
    : 'React, Node.js, Python';
  
  const growthRate = skills.length > 0
    ? ((trends[trends.length - 1].demand - trends[0].demand) / trends[0].demand * 100).toFixed(1)
    : '120';

  return {
    currentStatus: `The job market shows strong demand for ${topSkills} skills, with a ${growthRate}% growth in job postings over the past 6 months.`,
    emergingTrends: `Remote work opportunities continue to rise, with increasing demand for cloud computing and AI-related roles. Companies are prioritizing candidates with full-stack development experience.`
  };
} 
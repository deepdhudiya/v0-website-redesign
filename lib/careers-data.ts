export interface JobOpening {
  id: string
  title: string
  department: string
  location: string
  type: string
}

export const openings: JobOpening[] = [
  {
    id: "1",
    title: "Creative Director",
    department: "Dhudiya Pictures",
    location: "Ahmedabad",
    type: "Full-time",
  },
  {
    id: "2",
    title: "Music Producer",
    department: "Dhudiya Music Group",
    location: "Ahmedabad",
    type: "Full-time",
  },
  {
    id: "3",
    title: "Game Developer",
    department: "Dhudiya Games",
    location: "Remote",
    type: "Full-time",
  },
  {
    id: "4",
    title: "Marketing Manager",
    department: "Corporate",
    location: "Ahmedabad",
    type: "Full-time",
  },
  {
    id: "5",
    title: "VFX Artist",
    department: "Phantastic Studioz",
    location: "Ahmedabad",
    type: "Contract",
  },
]

export function getJobOpening(id: string): JobOpening | undefined {
  return openings.find((job) => job.id === id)
}

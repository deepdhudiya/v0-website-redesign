export interface NewsArticle {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  featured?: boolean
}

export const newsArticles: NewsArticle[] = [
  {
    id: "music-publishing-upgrade",
    title: "Music Publishing Is Now Upgraded Into Extreme Level",
    excerpt:
      "Dhudiya Entertainment is to launch Gujarat's first independent music publishing company on the Music Digital Publishing platform named Dhudiya Music Publishing. It will be the beginning of a new concept on the music digital publishing platform.",
    category: "Business",
    date: "Sep 5, 2020",
    readTime: "4 min read",
    featured: true,
  },
  {
    id: "games-division-launch",
    title:
      "Dhudiya Entertainment Launches New Games Division to Expand on Diverse Content",
    excerpt:
      "Dhudiya Games secures multiple distribution deals for mobile games. Dhudiya to leverage latest mobile technologies to provide unique entertainment experience.",
    category: "Business",
    date: "Jul 4, 2018",
    readTime: "3 min read",
    featured: true,
  },
  {
    id: "new-studio-expansion",
    title: "Phantastic Studioz Expands Post-Production Capabilities",
    excerpt:
      "Our post-production studio has been a part of some world-class film restoration and VFX projects, now expanding to serve global clients.",
    category: "Studios",
    date: "Mar 15, 2019",
    readTime: "5 min read",
  },
  {
    id: "music-label-anniversary",
    title: "Dhudiya Music Celebrates 3 Years of Musical Excellence",
    excerpt:
      "Since launching in 2016 with 'Duru Duru', Dhudiya Music has become a cornerstone of the Gujarati music industry.",
    category: "Music",
    date: "Jun 20, 2019",
    readTime: "4 min read",
  },
  {
    id: "partnership-announcement",
    title: "Strategic Partnership Announced with International Distributors",
    excerpt:
      "Dhudiya Entertainment expands global reach with new distribution partnerships in the UK, Middle East, and Southeast Asia.",
    category: "Business",
    date: "Oct 12, 2019",
    readTime: "3 min read",
  },
  {
    id: "talent-acquisition",
    title: "New Creative Leadership Joins Dhudiya Pictures",
    excerpt:
      "Industry veterans join our film division to lead upcoming projects and expand our creative capabilities.",
    category: "Company",
    date: "Jan 8, 2020",
    readTime: "2 min read",
  },
]

export const newsCategories = ["All", "Business", "Music", "Studios", "Company"]

export function getNewsArticle(id: string): NewsArticle | undefined {
  return newsArticles.find((article) => article.id === id)
}

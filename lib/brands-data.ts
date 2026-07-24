import {
  Film,
  Music,
  Gamepad2,
  Mic,
  BookOpen,
  Video,
  Radio,
  type LucideIcon,
} from "lucide-react"

export interface Brand {
  id: string
  name: string
  tagline: string
  description: string
  icon: LucideIcon
  features: string[]
}

export const brands: Brand[] = [
  {
    id: "pictures",
    name: "Dhudiya Pictures",
    tagline: "Motion picture company",
    description:
      "Dhudiya Pictures is our flagship film production and distribution company, bringing cinematic stories to life on the big screen. We specialize in creative development, production, marketing, and distribution of motion pictures for global audiences.",
    icon: Film,
    features: ["Film Production", "Distribution", "Marketing", "Licensing"],
  },
  {
    id: "music",
    name: "Dhudiya Music Group",
    tagline: "Music company",
    description:
      "Dhudiya Music Group is our comprehensive music division, encompassing recording, production, and artist management. We nurture talent and create music that resonates with audiences across generations.",
    icon: Music,
    features: [
      "Music Production",
      "Artist Management",
      "Recording",
      "Distribution",
    ],
  },
  {
    id: "games",
    name: "Dhudiya Games",
    tagline: "Video game company",
    description:
      "Dhudiya Games is our video game development studio, creating immersive gaming experiences across platforms. We leverage cutting-edge technology to deliver unique entertainment experiences.",
    icon: Gamepad2,
    features: [
      "Game Development",
      "Mobile Games",
      "Console Games",
      "Distribution",
    ],
  },
  {
    id: "interactive",
    name: "Dhudiya Interactive",
    tagline: "Video game publisher",
    description:
      "Dhudiya Interactive focuses on publishing and distributing video games, partnering with developers worldwide to bring their visions to market with our expertise in marketing and distribution.",
    icon: Video,
    features: [
      "Game Publishing",
      "Marketing",
      "Global Distribution",
      "Developer Relations",
    ],
  },
  {
    id: "publishing",
    name: "Dhudiya Music Publishing",
    tagline: "Music publishing company",
    description:
      "Gujarat's first independent music publishing company on the digital platform. We manage music rights, royalties, and licensing, ensuring creators receive fair compensation for their work.",
    icon: Mic,
    features: [
      "Rights Management",
      "Royalty Collection",
      "Licensing",
      "Digital Publishing",
    ],
  },
  {
    id: "phantastic",
    name: "Phantastic Studioz",
    tagline: "Production studio",
    description:
      "Phantastic Studioz is our creative production hub, specializing in visual effects, post-production, and content creation. We bring imagination to life with cutting-edge technology.",
    icon: BookOpen,
    features: [
      "Visual Effects",
      "Post-Production",
      "Content Creation",
      "Animation",
    ],
  },
  {
    id: "imagery",
    name: "Imagery Records",
    tagline: "Record label",
    description:
      "Imagery Records is our independent music label focused on discovering and nurturing emerging artists. We provide a platform for new voices to reach audiences worldwide.",
    icon: Radio,
    features: [
      "Artist Development",
      "Music Production",
      "Marketing",
      "Distribution",
    ],
  },
]

export function getBrand(id: string): Brand | undefined {
  return brands.find((brand) => brand.id === id)
}

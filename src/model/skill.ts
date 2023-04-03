export interface Skill {
  img?: string;
  skillName: string;
  duration: number;
  relations: number[];
}

export interface SkillSet {
  title: string;
  skillSet: Skill[];
  total: number;
}

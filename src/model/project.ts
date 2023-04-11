export type ProjectType = 'Web' | 'FullStack' | 'Application' | '반응형 Web' | 'Mobile' | '기타';

export interface Project {
  title: string;
  role: string;
  skill: string[];
  descriptions: string[];
  contributions: string[];
  img: string[];
  imgType?: 'kiosk';
  url?: string;
  type: ProjectType;
}

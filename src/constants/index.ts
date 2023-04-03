import { Company } from '@/model/company';
import { SkillSet } from '@/model/skill';

export const MENU_CONFIG = ['Ryu MyungHan', 'Career', 'Project', 'Education'];

export const INTRODUCTION_CONFIG = {
  name: '류명한',
  email: 'ryum7han@gmail.com',
  comment: '호기심이 많은 개발자 류명한 입니다.',
};

export const CAREER_PATH: Company[] = [
  {
    name: 'LG 전자',
    duration: 1.2,
    description: '"시스템 에어컨 실외기 SW 제어로직 개발 및 시험 측정"',
    relation: 1,
  },
  {
    name: 'SDPLEX',
    duration: 2.8,
    description: '"윈도우/리눅스 기반의 IoT 플랫폼 개발 및 제어 프로그램 FE/BE 개발"',
    relation: 2,
  },
  {
    name: '콩테크',
    duration: 0.9,
    description: '"3D 오브젝트, 위치 기반의 관리자 서비스 FE 개발, 키오스크 앱 개발"',
    relation: 3,
  },
  {
    name: '이직 준비중',
    duration: 0,
    description: '""',
    relation: 4,
  },
];

export const SKILLSET_CONFIG: SkillSet[] = [
  {
    total: 5.5,
    title: 'Languages',
    skillSet: [
      { skillName: 'C/C++', duration: 2.5, img: '/images/c-image.png', relations: [1] },
      { skillName: 'Go', duration: 0.6, img: '/images/go-image.png', relations: [2] },
      { skillName: 'TypeScript', duration: 2.4, img: '/images/typescript-image.png', relations: [2, 3] },
    ],
  },
  {
    total: 5.1,
    title: 'Front End',
    skillSet: [
      { skillName: 'Electron', duration: 1, img: '/images/electron-image.png', relations: [2, 3] },
      { skillName: 'React(CSR)', duration: 2, img: '/images/react-image.png', relations: [2, 3] },
      { skillName: 'ReactNative', duration: 0.3, relations: [3] },
      { skillName: 'NextJs', duration: 0.6, img: '/images/nextjs-image.png', relations: [3] },
      { skillName: 'Mobx', duration: 0.3, img: '/images/mobx-image.png', relations: [3] },
      { skillName: 'Redux', duration: 0.9, img: '/images/redux-image.png', relations: [3] },
    ],
  },
  {
    total: 1.2,
    title: 'Deployment',
    skillSet: [
      { skillName: 'Kubernetes', duration: 0.6, img: '/images/kubernetes-image.png', relations: [2] },
      { skillName: 'Docker', duration: 0.6, img: '/images/docker-image.png', relations: [2] },
    ],
  },
  {
    total: 5,
    title: 'Git',
    skillSet: [
      { skillName: 'GitLab', duration: 2, img: '/images/gitlab-image.png', relations: [2] },
      { skillName: 'BitBucket', duration: 3, img: '/images/bitbucket-image.jpeg', relations: [3] },
    ],
  },
  {
    total: 3.6,
    title: 'Test',
    skillSet: [
      { skillName: 'Gtest', duration: 2.8, relations: [2] },
      { skillName: 'Jest', duration: 0.8, relations: [2, 3] },
    ],
  },
  {
    total: 2.1,
    title: 'Etc',
    skillSet: [
      { skillName: 'Kubernetes API Server', duration: 0.8, relations: [2] },
      { skillName: 'Public Transportation API', duration: 1, relations: [3] },
      { skillName: 'Yarn Berry(PM)', duration: 0.5, relations: [3, 4] },
      { skillName: 'NestJS(BE)', duration: 0.3, relations: [4] },
      { skillName: 'GraphQL)', duration: 0.3, relations: [4] },
    ],
  },
];

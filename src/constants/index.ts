import { Company } from '@/model/company';

export const MENU_CONFIG = ['Ryu MyungHan', 'Career', 'Project', 'Education'];

export const INTRODUCTION_CONFIG = {
  name: '류명한',
  email: 'ryum7han@gmail.com',
  comment: '아직 호기심이 많은 개발자 류명한 입니다.',
};

export const CAREER_PATH: Company[] = [
  {
    name: 'LG 전자',
    duration: 1.2,
    description: '"시스템 에어컨 실외기 SW 제어로직 개발 및 시험 측정"',
  },
  {
    name: 'SDPLEX',
    duration: 2.8,
    description: '"윈도우/리눅스 기반의 IoT 플랫폼 개발 및 제어 프로그램 FE/BE 개발"',
  },
  {
    name: '콩테크',
    duration: 0.9,
    description: '"3D 오브젝트, 위치 기반의 관리자 서비스 FE 개발, 키오스크 앱 개발"',
  },
  {
    name: '이직 준비중',
    duration: 0,
    description: '""',
  },
];

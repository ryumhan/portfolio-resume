import { Company } from '@/model/company';
import { Project } from '@/model/project';
import { SkillSet } from '@/model/skill';

export const MENU_CONFIG = ['Ryu MyungHan', 'Career', 'Project', 'Education'];

export const INTRODUCTION_CONFIG = {
  name: '류명한',
  email: 'ryum7han@gmail.com',
  comment: '호기심 많은 FE 개발자 류명한 입니다.',
  hobby: '축구, 영화보기, 글쓰기',
  appeal: ['생산적인 이야기를 통해 다양한 사람들의 개발 노하우를 이야기하는 것을 굉장히 즐거워 합니다.'],
  education: [
    { location: '인하대학교 정보통신공학과,기계공학(복)', duration: ['2011.03', '2018.02'] },
    { location: 'LG전자 SW 교육', duration: ['2018.03', '2018.05'] },
    { location: 'OPC UA IoT 교육', duration: ['2019.12', '2019.01'] },
  ],
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
      { skillName: 'ReactNative', duration: 0.6, relations: [3] },
      { skillName: 'NextJs', duration: 0.5, img: '/images/nextjs-image.png', relations: [3] },
      { skillName: 'Mobx', duration: 0.4, img: '/images/mobx-image.png', relations: [3] },
      { skillName: 'Redux', duration: 1.1, img: '/images/redux-image.png', relations: [3] },
    ],
  },
  {
    total: 1.2,
    title: 'Deployment',
    skillSet: [
      { skillName: 'Kubernetes', duration: 0.6, img: '/images/kubernetes-image.png', relations: [2] },
      { skillName: 'Docker', duration: 0.6, img: '/images/docker-image.png', relations: [2, 3] },
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
      { skillName: 'Yarn Berry(PM)', duration: 0.5, relations: [3] },
      { skillName: 'NestJS(BE)', duration: 0.3, relations: [] },
      { skillName: 'GraphQL)', duration: 0.3, relations: [] },
    ],
  },
];

export const PROJECT_CONFIG: Project[] = [
  {
    title: 'ORBRO 플랫폼',
    role: 'V1 유지 보수 및 V2 신규 FE 개발(참여)',
    skill: ['react', 'redux', 'mapbox', 'stylus', 'emotion/styled-component'],
    descriptions: [
      '3D 오브젝트, 위치 기반의 관리자 서비스 FE 개발',
      '사용자의 사업적 목적에 따라, 관리자 서비스를 커넥티드앱 형태로 확장 가능한 플랫폼',
      '주변 공공 교통 수단에 대한 정보 수집 및 날씨 정보 Display',
      'MapBox를 통한 3D 오브젝트 표시',
      'EventBus 를 통한 MapBox 상태 관리',
      'Post Message 를 통해, iframe 으로 연동된 커넥티드앱, 플랫폼간 필요 데이터 통신',
    ],
    contributions: [
      '키오스크 전용 UI 개발',
      '키오스크 전용 화면 보호기 개발',
      '의존성이 높은 기존의 코드 View, Fetch, State 를 분리 하기 위해 Custom Hook 도입',
      '재사용성을 높이기 위해 공통 컴포넌트 및 공통 Hook 으로 통일',
      'Code Convention 정립 및 Code Review 도입',
    ],
    img: ['/project/platform1.png', '/project/platform2.png', '/project/platform3.png'],
    url: 'https://home.orbro.io',
  },
  {
    title: '상차 리프트 키오스크 앱',
    role: '신규 FE 개발(개인)',
    skill: ['react', 'electron', 'serial-communication', 'mqtt'],
    descriptions: [
      '의료폐기물 처리용 로봇을 제어를 위한 키오스크 어플리케이션',
      '키오스크에 연동된 HW 장비를 시리얼 통신을 통해 제어 명령',
      '현재 제어 상태에 따라 사용자에게 Display 되는 화면이 결정됨',
      '제어 상태는 MQTT Broker로 업데이트',
    ],
    contributions: [
      '현장 오류를 발견 할 수 있도록 LogReport 구현',
      'HW 연동 및 MQTT 통합 테스트 전 테스트 코드 도입을 통해, 자체적으로 유지보수 및 변경사항에 대한 검증수단 확보',
      'MQTT Client, Serial Controller, Rest API 세 가지 통신 로직의 Dependancy 를 줄이기 위해 각각 비동기식으로 구현',
    ],
    img: [
      '/project/lift_1.png',
      '/project/lift_2.png',
      '/project/lift_3.png',
      '/project/lift_4.png',
      '/project/lift_5.png',
      '/project/lift_6.png',
      '/project/lift_7.png',
    ],
    imgType: 'kiosk',
  },
  {
    title: '공공 교통 Platform 앱',
    role: 'FE V2 개발(개인)',
    skill: ['react', 'nextJs', 'emotion/styled-component'],
    descriptions: [
      'ORBRO 플랫폼 내의 공공 데이터의 정보를 보여줄 수 있는 LS App',
      '플랫폼 내의 공공 Object 클릭시 해당 앱 Display',
      '플랫폼에 내재된 iframe 형태로 해당앱 존재',
    ],
    contributions: [
      '기존의 CSR 방식에서 클릭시 앱이 늦게 뜨던 문제를 NextJS로 Migration을 통해 해결',
      '플랫폼에서 클릭시 해당 Object에 대한 데이터 수신을 위한 postMessage 구현',
    ],
    img: [
      '/project/public-app1.png',
      '/project/public-app2.png',
      '/project/public-app3.png',
      '/project/public-app4.png',
      '/project/public-app5.png',
    ],
    url: 'https://home.orbro.io',
  },
  {
    title: 'Access 커넥티드 앱',
    role: '유지 보수 및 신규 기능 FE 개발(참여)',
    skill: ['react', 'mapbox', 'redux', 'emotion/styled-component'],
    descriptions: [
      '실내 출입 기록 관리용 서비스',
      '허용된 사용자 및 방문자의 모바일이 출입문을 통과시 출입 여부를 판단하여 기록을 관리하는 것이 주된 기능',
    ],
    contributions: [
      '한번에 다량의 데이터를 불러오는 응답 latency를 줄이기 위해 인피니티 스크롤로 수정',
      '테이블 Input Component의 onChange Event 시 불필요한 Rendering 방지를 위하여 useMemo로 수정',
      '기존의 의존성 심한 stylus 마크업 방식을 styled-component 로 변경',
    ],
    img: ['/project/access1.png', '/project/access2.png', '/project/access3.png', '/project/access4.png'],
  },
  {
    title: 'Asset 커넥티드 앱',
    role: 'FE 신규 개발(참여)',
    skill: ['react', 'nextJs', 'emotion/styled-component', 'mobx', 'websocket'],
    descriptions: [
      '실내 특정 자산의 위치를 보여주는 서비스',
      '기기 ID가 할당된 Tag를 자산에 부착해 이를 관리자 페이지에 Display',
      '자산의 반출 반입 여부를 추적 할 수 있음',
    ],
    contributions: [
      'NextJs 최초 도입',
      '모든 Hook 에 대해 Custom Hook으로 구현하여 의존성 최소화',
      '데이터 전달시 기존의 브라우저 Event를 활용하던 SDK를 NextJs에 알맞게 신규 개발(Server Path Cookie 저장 방식으로 변경)',
    ],
    img: [],
  },
];

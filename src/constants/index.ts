import { Company } from '@/model/company';
import { Project } from '@/model/project';
import { SkillSet } from '@/model/skill';

export const MENU_CONFIG = ['Ryu MyungHan', 'Career', 'Project'];

export const INTRODUCTION_CONFIG = {
  name: '류명한',
  email: 'ryum7han@gmail.com',
  phone: '010-9947-7564',
  comment: '호기심 많은 FE 개발자 류명한 입니다.',
  appeal: ['생산적인 이야기를 통해 다양한 사람들의 개발 노하우를 이야기하는 것을 굉장히 즐거워 합니다.'],
  education: [
    { location: '인하대학교 정보통신공학과, 기계공학(복)', duration: ['2011.03', '2018.02'] },
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
    name: '이직중',
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
      { skillName: 'C/C++', duration: 2.5, img: '/images/c-image.png', relations: [1, 2] },
      { skillName: 'Go', duration: 0.6, img: '/images/go-image.png', relations: [2] },
      { skillName: 'TypeScript', duration: 2.4, img: '/images/typescript-image.png', relations: [2, 3] },
    ],
  },
  {
    total: 5.1,
    title: 'FrontEnd',
    skillSet: [
      { skillName: 'Electron', duration: 1, img: '/images/electron-image.png', relations: [2, 3] },
      { skillName: 'React(CSR)', duration: 2, img: '/images/react-image.png', relations: [2, 3] },
      { skillName: 'ReactNative', duration: 0.6, img: '/images/react-native-image.png', relations: [3] },
      { skillName: 'NextJs', duration: 0.5, img: '/images/nextjs-image.png', relations: [3] },
      { skillName: 'ReactQuery', duration: 0.6, img: '/images/react-query-image.png', relations: [3] },
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
      '3D 오브젝트, 위치 기반의 관리자 서비스',
      '사용자가 거주하는 건물 클릭시, 사용자가 구독한 앱 리스트 Display',
      '사용자의 사업적 목적에 따라, 관리자 서비스를 커넥티드앱 형태로 확장 가능한 플랫폼',
      'MapBox를 통한 3D 오브젝트 표시',
      '주변 공공 교통 수단에 대한 정보 수집 및 날씨 정보 Display',
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
    img: ['/project/platform1.jpg', '/project/platform2.jpg'],
    url: 'https://home.orbro.io',
  },
  {
    title: '공공 교통 Platform 앱',
    role: 'FE V2 개발(개인)',
    skill: ['react', 'nextJs', 'emotion/styled-component'],
    descriptions: [
      'ORBRO 플랫폼 내의 공공 데이터의 정보를 보여줄 수 있는 LS App',
      '플랫폼 내의 공공 Object(CCTV, 버스, 지하철, 비행기 클릭시) 클릭시 해당 앱 Display',
      '각 Object의 현재 정보를 실시간으로 보여줌',
      '플랫폼에 내재된 iframe 형태로 해당앱 존재',
    ],
    contributions: [
      '기존의 CSR 방식에서 클릭시 앱이 늦게 뜨던 문제를 NextJS로 Migration을 통해 해결',
      '플랫폼에서 클릭시 해당 Object에 대한 데이터 수신을 위한 postMessage 구현',
    ],
    img: [
      '/project/public-app1.jpg',
      '/project/public-app2.jpg',
      '/project/public-app3.jpg',
      '/project/public-app4.jpg',
      '/project/public-app5.jpg',
      '/project/public-app6.png',
    ],
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
    title: '건설 안전 관리자 서비스',
    role: 'FE 신규 개발(개인)',
    skill: ['react', 'emotion/styled-component', 'redux', 'mabbox'],
    descriptions: [
      '건설작업 환경을 위해 해당 지역에 사용자를 등록하고, 위헙 구역을 설정, 관리 하는 서비스',
      'mapbox를 통해 위험 구역을 설정 하능 기능',
      '해당 작업장에 사용자를 등록하는 기능',
      '사용자가 위험구역에 진입시 Push 알림을 전달 할 수 있도록 장치와 사용자를 맵핑하는 기능',
    ],
    contributions: ['mapbox를 통해 지도상에 위험구역을 설정 할 수 있도록 UI 구현.'],
    img: [
      '/project/smart-safety-app2.png',
      '/project/smart-safety-app1.png',
      '/project/smart-safety-app3.png',
    ],
  },
  {
    title: 'Access 관리자 서비스',
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
    img: [
      '/project/access1.jpg',
      '/project/access2.jpg',
      '/project/access3.jpg',
      '/project/access4.jpg',
      '/project/access5.jpg',
      '/project/access6.jpg',
    ],
  },
  {
    title: '모두의 안심벨',
    role: '홈페이지 리뉴얼 FE 개발(참여)',
    skill: ['react', '반응형 UI', 'emotion/styled-component'],
    descriptions: [
      '범죄 취약지구를 위한 안심벨 홍보 및 신청 홈페이지',
      '안심벨 소개, 신청, 신청조회가 주된 기능',
      '주소 및 개인정보 입력후 안심벨을 배송 요청 할 수 있음',
      '신상정보를 이용하여 배송 상태를 확인 할 수 있음',
      '반응형 UI로 각 장치에 따라 style 분기',
    ],
    contributions: ['반응형 UI 도입', '코드 리뷰를 통해 각 페이지 별 소스 일치화'],
    url: 'https://modubell.com',
    img: ['/project/safety1.jpg', '/project/safety2.jpg', '/project/safety3.jpg', '/project/safety4.jpg'],
  },
  {
    title: '프리미엄 체크V2',
    role: 'FE 신규 개발(참여)',
    skill: ['react-native', 'mobx-state-tree', 'styled-component', 'react-query'],
    descriptions: [
      '지식산업센터 매물 거래 중계 어플리케이션',
      '당근 마켓을 모티브로 하여 지식산업센터 부동산 거래를 활성화 시키기 위한 어플리케이션',
      '주요 슬라이드 - 삽니다 / 팝니다 / 채팅 / 마이페이지',
    ],
    contributions: [
      'React Query 를 통한 상태 관리 최적화 및 편의성 증대, Inifite Scroll 구현',
      '구매,판매 매물 게시물을 올릴 수 있는 기능 구현 , 구매, 판매 매물을 검색 할 수 있는 기능 구현',
    ],
    img: ['/project/premium.jpg'],
    imgType: 'kiosk',
  },
  {
    title: '의료폐기물 관리자 서비스',
    role: 'FE 신규 개발(개인)',
    skill: ['react', 'stylus', 'redux'],
    descriptions: [
      '의료 폐기물 등록 로봇 관리자 앱',
      '기기 ID가 할당된 Tag를 자산에 부착해 이를 관리자 페이지에 Display',
      '자산의 반출 반입 여부를 추적 할 수 있음',
    ],
    contributions: [
      'NextJs로 공통 Component Migration',
      '모든 Hook 에 대해 Custom Hook으로 구현하여 의존성 최소화',
      '데이터 전달시 기존의 브라우저 Event를 활용하던 SDK를 NextJs에 알맞게 신규 개발(Server Path Cookie 저장 방식으로 변경)',
    ],
    img: ['/project/connected-app1.jpg'],
  },
];

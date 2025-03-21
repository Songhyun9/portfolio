import React from 'react';
import { Calendar, Code, Coffee, GitBranch, Globe, Users } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-6 p-6 max-w-6xl mx-auto">
      <header className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Astarmize</h1>
        <p className="text-lg text-muted-foreground md:text-xl">B2B 마케팅 콘텐츠 자동화 AI 서비스 클라이언트 개발</p>
      </header>

      <div className="grid auto-rows-min gap-4 md:grid-cols-2">
        <Card>
          <CardContent className="flex justify-center">
            <Image src={'/astarmize2.webp'} width={300} height={300} alt="astarmize editor" />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex justify-center">
            <Image src={'/astzrmize3.webp'} width={300} height={300} alt="astarmize instagram" />
          </CardContent>
        </Card>
      </div>

      {/* 프로젝트 상세 정보 */}
      <div className="flex flex-col gap-6 rounded-xl bg-muted/20 p-6 md:min-h-min">
        {/* 프로젝트 메타 정보 */}
        <div className="grid gap-4 md:grid-cols-3">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-muted-foreground">회사</span>
            <span className="font-medium">아스타</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-muted-foreground">기간</span>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">07/2023 - 07/2024</span>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-muted-foreground">기여도</span>
            <span className="font-medium">100%</span>
          </div>
        </div>

        {/* 프로젝트 개요 */}
        <div>
          <h2 className="mb-3 text-xl font-semibold tracking-tight">프로젝트 개요</h2>
          <p className="text-muted-foreground">
            B2B 마케팅 콘텐츠 자동화 AI 서비스의 클라이언트를 개발했습니다. 사용자 친화적인 인터페이스와 다양한 기능을
            통해 마케팅 콘텐츠 제작 프로세스를 간소화하고 자동화하는 서비스로, 주요 기능으로는 WYSIWYG 에디터,
            인스타그램 게시물 자동 배포 시스템, 멀티레이어 이미지 편집 기능 등이 있습니다.
          </p>
        </div>

        {/* 주요 성과 */}
        <div>
          <h2 className="mb-3 text-xl font-semibold tracking-tight">주요 성과</h2>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <Badge>
                <Code />
              </Badge>
              <p>ProseMirror 기반 WYSIWYG 에디터 및 커스텀 플러그인 개발로 사용자 콘텐츠 작성 효율 개선</p>
            </li>
            <li className="flex gap-3">
              <Badge>
                <Globe />
              </Badge>
              <p>Meta Graph API를 활용한 인스타그램 게시물 자동 배포 시스템 구현으로 콘텐츠 업로드 시간 70% 단축</p>
            </li>
            <li className="flex gap-3">
              <Badge>
                <Coffee />
              </Badge>
              <p>
                Canvas API 활용 멀티레이어 이미지 편집 기능 구현하여 외부 그래픽 도구 의존도를 제거하고 워크플로우를
                간소화, 사용자 작업 시간 40% 절감
              </p>
            </li>
            <li className="flex gap-3">
              <Badge>
                <Users />
              </Badge>
              <p>i18next를 활용한 다국어 지원 시스템 구축 (한국어, 영어, 프랑스어)</p>
            </li>
            <li className="flex gap-3">
              <Badge>
                <GitBranch />
              </Badge>
              <p>
                Github Actions를 활용하여 CI/CD 파이프라인을 최적화하고 자동화함으로써 배포 시간을 15분에서 3분으로 80%
                단축하고 개발 생산성 향상
              </p>
            </li>
          </ul>
        </div>

        {/* 사용 기술 및 도구 */}
        <div>
          <h2 className="mb-3 text-xl font-semibold tracking-tight">사용 기술 및 도구</h2>
          <div className="flex flex-wrap gap-2">
            <Badge>Vitejs</Badge>
            <Badge>React</Badge>
            <Badge>Zustand</Badge>
            <Badge>TailwindCSS</Badge>
            <Badge>i18next</Badge>
            <Badge>Konva.js</Badge>
            <Badge>ProseMirror</Badge>
            <Badge>Meta Graph API</Badge>
            <Badge>Github Actions</Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

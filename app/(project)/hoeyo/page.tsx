import React from 'react';
import { Calendar, Code, Globe, Palette, Layout } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-6 p-6 max-w-6xl mx-auto">
      <header className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">호이요</h1>
        <p className="text-lg text-muted-foreground md:text-xl">문화예술공간 호이요 웹사이트 제작</p>
      </header>

      <div className="grid auto-rows-min gap-4 md:grid-cols-2">
        <Card>
          <CardContent className="flex justify-center">
            <Image src={'/hoeyo2.webp'} width={500} height={300} alt="호이요 데스크탑" />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex justify-center">
            <Image src={'/hoeyo3.webp'} width={100} height={300} alt="호이요 모바일" />
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col gap-6 rounded-xl bg-muted/20 p-6 md:min-h-min">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-muted-foreground">고객사</span>
            <span className="font-medium">호이요</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-muted-foreground">기간</span>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">09/2024 - 10/2024</span>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-muted-foreground">기여도</span>
            <span className="font-medium">100%</span>
          </div>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold tracking-tight">프로젝트 개요</h2>
          <p className="text-muted-foreground">
            문화예술공간 호이요의 브랜드 아이덴티티를 담은 웹사이트를 설계 및 개발했습니다. 호이요만의 독특한 예술적
            감성을 웹 공간에 구현하고, 다양한 디바이스에서 최적화된 사용자 경험을 제공하는 것을 목표로 했습니다. 순수
            HTML, CSS, JavaScript를 활용하여 모던하고 직관적인 인터페이스를 구축했습니다.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold tracking-tight">주요 성과</h2>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <Badge>
                <Palette />
              </Badge>
              <p>
                JavaScript, HTML5, CSS3를 활용하여 문화예술공간 호이요의 브랜드 아이덴티티를 구현한 웹사이트를 설계 및
                개발함
              </p>
            </li>
            <li className="flex gap-3">
              <Badge>
                <Layout />
              </Badge>
              <p>
                CSS3 미디어 쿼리와 Flexbox/Grid 레이아웃을 활용하여 반응형 웹 디자인을 구현하여 다양한 디바이스에서
                최적화된 사용자 경험을 제공
              </p>
            </li>
            <li className="flex gap-3">
              <Badge>
                <Code />
              </Badge>
              <p>
                순수 바닐라 JavaScript를 사용하여 갤러리 슬라이더, 모달 팝업, 스크롤 애니메이션 등 인터랙티브한 요소
                구현
              </p>
            </li>
            <li className="flex gap-3">
              <Badge>
                <Globe />
              </Badge>
              <p>SEO 최적화 및 성능 개선으로 검색 엔진 노출도 향상 및 페이지 로딩 속도 개선</p>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold tracking-tight">사용 기술 및 도구</h2>
          <div className="flex flex-wrap gap-2">
            <Badge>HTML5</Badge>
            <Badge>CSS3</Badge>
            <Badge>JavaScript</Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

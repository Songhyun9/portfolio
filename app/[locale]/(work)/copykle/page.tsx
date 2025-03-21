import React from 'react';
import { Calendar, Code, CreditCard, Globe, Server, User } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-6 p-6 max-w-6xl mx-auto">
      <header className="flex flex-col gap-4">
        <Link className="underline text-blue-700 text-3xl font-bold tracking-tight md:text-4xl" href={'copykle.ai'}>
          Copykle
        </Link>
        <p className="text-lg text-muted-foreground md:text-xl">B2C 마케팅 콘텐츠 AI 서비스 클라이언트 개발</p>
      </header>

      <div className="grid auto-rows-min gap-4 md:grid-cols-2">
        <Card>
          <CardContent className="flex justify-center">
            <Image src={'/copykle2.webp'} width={500} height={300} alt="copykle editor" />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex justify-center">
            <Image src={'/copykle3.webp'} width={500} height={300} alt="copykle dashboard" />
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col gap-6 rounded-xl bg-muted/20 p-6 md:min-h-min">
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

        <div>
          <h2 className="mb-3 text-xl font-semibold tracking-tight">프로젝트 개요</h2>
          <p className="text-muted-foreground">
            B2C 마케팅 콘텐츠 AI 서비스의 클라이언트를 개발했습니다. AI 생성 콘텐츠를 기반으로 한 블로그형 에디터와 결제
            시스템을 통해 개인 사용자들이 손쉽게 마케팅 콘텐츠를 작성하고 관리할 수 있는 서비스입니다. 드래그 앤 드롭
            기능으로 콘텐츠 배치가 자유롭고, 소셜 로그인과 반응형 디자인으로 접근성을 높였습니다.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold tracking-tight">주요 성과</h2>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <Badge>
                <Code />
              </Badge>
              <p>
                블로그형 AI 콘텐츠 에디터 개발 - AI 생성 텍스트/이미지를 드래그 앤 드롭으로 자유롭게 배치하고 편집할 수
                있는 WYSIWYG 에디터 구현
              </p>
            </li>
            <li className="flex gap-3">
              <Badge>
                <CreditCard />
              </Badge>
              <p>토스페이먼츠 결제 모듈 적용하여 안전하고 편리한 결제 경험을 제공하여 결제 전환율 60% 향상</p>
            </li>
            <li className="flex gap-3">
              <Badge>
                <User />
              </Badge>
              <p>
                OAuth 2.0 기반 소셜 로그인(구글, 네이버) 구현으로 회원가입 소요 시간 80% 단축 및 신규가입자 유입 100%
                증가
              </p>
            </li>
            <li className="flex gap-3">
              <Badge>
                <Globe />
              </Badge>
              <p>반응형 웹 디자인 구현하여 모바일 사용자 이탈율 감소</p>
            </li>
            <li className="flex gap-3">
              <Badge>
                <Server />
              </Badge>
              <p>AWS EC2 기반 Next.js 프론트엔드 서버 구축</p>
            </li>
          </ul>
        </div>

        {/* 사용 기술 및 도구 */}
        <div>
          <h2 className="mb-3 text-xl font-semibold tracking-tight">사용 기술 및 도구</h2>
          <div className="flex flex-wrap gap-2">
            <Badge>Next.js 13</Badge>
            <Badge>Recoil</Badge>
            <Badge>TailwindCSS</Badge>
            <Badge>Tanstack Query</Badge>
            <Badge>AWS</Badge>
            <Badge>OAuth 2.0</Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

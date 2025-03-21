'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Laptop, Users, Rocket, Mail, GitBranch, FileUser, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function InfoPage() {
  const t = useTranslations('InfoPage');

  return (
    <div className="flex flex-1 flex-col gap-6 p-6 max-w-6xl mx-auto">
      <header className="flex flex-col gap-4 md:flex-row md:items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">{t('jobTitle')}</h1>
          <p className="text-lg text-accent-foreground">{t('jobSubtitle')}</p>
        </div>
        <div className="flex gap-2 md:items-end">
          <p className="mb-2 flex items-center gap-2">
            <Mail />
            {t('email')}
          </p>
          <Link href="https://github.com/Songhyun9/portfolio" target="_blank" aria-label="GitHub 프로필 방문하기">
            <Button className="cursor-pointer">
              <GitBranch /> github
            </Button>
          </Link>
          <Link
            href="https://www.rallit.com/resumes//3422@ksh93813/%EA%B9%80%EC%86%A1%ED%98%84?theme=STANDARD"
            target="_blank"
            aria-label="이력서 보기"
          >
            <Button className="cursor-pointer">
              <FileUser /> {t('resume')}
            </Button>
          </Link>
        </div>
      </header>

      <Card>
        <CardContent>
          <p className="text-lg">{t('paragraph1')}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="flex items-start gap-3">
              <Code size={24} className="text-blue-600 mt-1" />
              <div>
                <h3 className="font-bold text-lg">{t('techStack.title')}</h3>
                <p>{t('techStack.description')}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Laptop size={24} className="text-blue-600 mt-1" />
              <div>
                <h3 className="font-bold text-lg">{t('experience.title')}</h3>
                <p>{t('experience.description')}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users size={24} className="text-blue-600 mt-1" />
              <div>
                <h3 className="font-bold text-lg">{t('collaboration.title')}</h3>
                <p>{t('collaboration.description')}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Rocket size={24} className="text-blue-600 mt-1" />
              <div>
                <h3 className="font-bold text-lg">{t('goal.title')}</h3>
                <p>{t('goal.description')}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        {/* Astarmize 카드 */}
        <Card className="aspect-video relative flex justify-center items-center p-4 group">
          <Image
            src="/astarmize.webp"
            alt="Astarmize - B2B 마케팅 콘텐츠 자동화 AI 서비스 이미지"
            width={270}
            height={100}
            className="rounded-xl group-hover:opacity-30 transition-opacity"
          />
          <div className="absolute rounded-xl inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="text-white text-center p-4">
              <h3 className="text-xl font-bold">{t('projects.astarmize.title')}</h3>
              <p className="mb-2">{t('projects.astarmize.description')}</p>
              <Link href="/astarmize" aria-label="Astarmize 프로젝트 상세 보기">
                <Button variant="secondary" className="cursor-pointer hover:bg-white">
                  {t('common.seeMore')}
                  <ChevronRight />
                </Button>
              </Link>
            </div>
          </div>
        </Card>

        {/* Copykle 카드 */}
        <Card className="aspect-video relative flex justify-center items-center p-4 group">
          <Image
            src="/copykle.webp"
            alt="Copykle - B2C 마케팅 콘텐츠 AI 서비스 이미지"
            width={220}
            height={100}
            className="rounded-xl group-hover:opacity-30 transition-opacity"
          />
          <div className="absolute rounded-xl inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="text-white text-center p-4">
              <h3 className="text-xl font-bold">{t('projects.copykle.title')}</h3>
              <p className="mb-2">{t('projects.copykle.description')}</p>
              <Link href="/copykle" aria-label="Copykle 프로젝트 상세 보기">
                <Button variant="secondary" className="cursor-pointer hover:bg-white">
                  {t('common.seeMore')}
                  <ChevronRight />
                </Button>
              </Link>
            </div>
          </div>
        </Card>

        {/* 호이요 카드 */}
        <Card className="aspect-video relative flex justify-center items-center p-4 group">
          <Image
            src="/hoeyo.webp"
            alt="문화예술공간 호이요 웹사이트 이미지"
            width={170}
            height={100}
            className="rounded-xl group-hover:opacity-30 transition-opacity"
          />
          <div className="absolute rounded-xl inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="text-white text-center p-4">
              <h3 className="text-xl font-bold">{t('projects.hoeyo.title')}</h3>
              <p className="mb-2">{t('projects.hoeyo.description')}</p>
              <Link href="/hoeyo" aria-label="hoeyo 프로젝트 상세 보기">
                <Button variant="secondary" className="cursor-pointer hover:bg-white">
                  {t('common.seeMore')}
                  <ChevronRight />
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Laptop, Users, Rocket, Mail, GitBranch, FileUser, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-6 p-6 max-w-6xl mx-auto">
      <header className="flex flex-col gap-4 md:flex-row md:items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">김송현</h1>
          <p className="text-lg text-accent-foreground">프론트엔드 개발자</p>
        </div>
        <div className="flex gap-2 md:items-end">
          <p className="mb-2 flex items-center gap-2">
            <Mail />
            ksh93813@gmail.com
          </p>
          <Link href={'https://github.com/Songhyun9/portfolio'} target="_blank">
            <Button className="cursor-pointer">
              <GitBranch /> github
            </Button>
          </Link>
          <Link
            href={'https://www.rallit.com/resumes//3422@ksh93813/%EA%B9%80%EC%86%A1%ED%98%84?theme=STANDARD'}
            target="_blank"
          >
            <Button className="cursor-pointer">
              <FileUser /> 이력서
            </Button>
          </Link>
        </div>
      </header>

      <Card>
        <CardContent>
          <p className="text-lg">
            안녕하세요 React와 Next.js를 주로 사용하는 프론트엔드 개발자입니다. 주로 스타트업에서 마케팅 솔루션부터 3D
            웹 게임까지 다양한 프로젝트를 경험했습니다. 설계부터 배포까지 전 과정을 주도할 수 있으며, 사용자 친화적인 웹
            서비스 구현에 집중합니다. 새로운 기술과 개발 트렌드를 빠르게 습득하고 실무에 적용하는 것을 즐깁니다.
            팀원들과의 협업을 통해 함께 성장하면서 가치 있는 결과물을 만들어내는 것을 지향하며, 비즈니스 성과를
            극대화하는 것을 목표로 합니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="flex items-start gap-3">
              <Code size={24} className="text-blue-600 mt-1" />
              <div>
                <h3 className="font-bold text-lg">기술 스택</h3>
                <p>React, Next.js, TypeScript, Tailwind CSS, Three.js</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Laptop size={24} className="text-blue-600 mt-1" />
              <div>
                <h3 className="font-bold text-lg">개발 경험</h3>
                <p>설계부터 배포까지 전 과정 주도 경험</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users size={24} className="text-blue-600 mt-1" />
              <div>
                <h3 className="font-bold text-lg">협업 스타일</h3>
                <p>팀원들과 함께 성장하며 가치 있는 결과물 창출</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Rocket size={24} className="text-blue-600 mt-1" />
              <div>
                <h3 className="font-bold text-lg">목표</h3>
                <p>사용자 친화적 서비스로 비즈니스 성과 극대화</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <Card className="aspect-video relative flex justify-center items-center p-4 group">
          <Image
            src={'/astarmize.webp'}
            alt="astarmize"
            width={270}
            height={150}
            className="rounded-xl group-hover:opacity-30 transition-opacity"
          />
          <div className="absolute rounded-xl inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="text-white text-center p-4">
              <h3 className="text-xl font-bold">Astarmize</h3>
              <p className="mb-2">기업을 위한 콘텐츠 생성 AI 플랫폼</p>
              <Link href={'/astarmize'}>
                <Button variant={'secondary'} className="cursor-pointer hover:bg-white">
                  자세히 보기
                  <ChevronRight />
                </Button>
              </Link>
            </div>
          </div>
        </Card>

        <Card className="aspect-video relative flex justify-center items-center p-4 group">
          <Image
            src={'/copykle.webp'}
            alt="copykle"
            width={220}
            height={200}
            className="rounded-xl group-hover:opacity-30 transition-opacity"
          />
          <div className="absolute rounded-xl inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="text-white text-center p-4">
              <h3 className="text-xl font-bold">Copykle</h3>
              <p className="mb-2">B2C 콘텐츠 생성 AI 플랫폼</p>
              <Link href={'/copykle'}>
                <Button variant={'secondary'} className="cursor-pointer hover:bg-white">
                  자세히 보기
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

import React from 'react';
import { Calendar, Palette, Layout } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useTranslations } from 'next-intl';

const HoeyoPage: React.FC = () => {
  const t = useTranslations('HoeyoPage');

  return (
    <div className="flex flex-1 flex-col gap-6 p-6 max-w-6xl mx-auto">
      <header className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{t('title')}</h1>
        <p className="text-lg text-muted-foreground md:text-xl">{t('subtitle')}</p>
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
            <span className="text-sm font-medium text-muted-foreground">{t('client')}</span>
            <span className="font-medium">{t('clientName')}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-muted-foreground">{t('period')}</span>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">09/2024 - 10/2024</span>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-muted-foreground">{t('contribution')}</span>
            <span className="font-medium">100%</span>
          </div>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold tracking-tight">{t('projectOverview')}</h2>
          <p className="text-muted-foreground">{t('projectOverviewText')}</p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold tracking-tight">{t('keyAchievements')}</h2>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <Badge>
                <Palette />
              </Badge>
              <p>{t('achievement1')}</p>
            </li>
            <li className="flex gap-3">
              <Badge>
                <Layout />
              </Badge>
              <p>{t('achievement2')}</p>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold tracking-tight">{t('technologiesTools')}</h2>
          <div className="flex flex-wrap gap-2">
            <Badge>HTML5</Badge>
            <Badge>CSS3</Badge>
            <Badge>JavaScript</Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoeyoPage;

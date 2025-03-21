import React from 'react';
import { Calendar, Code, CreditCard, Globe, Server, User } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const CopyklePage: React.FC = () => {
  const t = useTranslations('CopyklePage');

  return (
    <div className="flex flex-1 flex-col gap-6 p-6 max-w-6xl mx-auto">
      <header className="flex flex-col gap-4">
        <Link className="underline text-blue-700 text-3xl font-bold tracking-tight md:text-4xl" href={'copykle.ai'}>
          {t('title')}
        </Link>
        <p className="text-lg text-muted-foreground md:text-xl">{t('subtitle')}</p>
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
            <span className="text-sm font-medium text-muted-foreground">{t('company')}</span>
            <span className="font-medium">{t('companyName')}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-muted-foreground">{t('period')}</span>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">07/2023 - 07/2024</span>
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
                <Code />
              </Badge>
              <p>{t('achievement1')}</p>
            </li>
            <li className="flex gap-3">
              <Badge>
                <CreditCard />
              </Badge>
              <p>{t('achievement2')}</p>
            </li>
            <li className="flex gap-3">
              <Badge>
                <User />
              </Badge>
              <p>{t('achievement3')}</p>
            </li>
            <li className="flex gap-3">
              <Badge>
                <Globe />
              </Badge>
              <p>{t('achievement4')}</p>
            </li>
            <li className="flex gap-3">
              <Badge>
                <Server />
              </Badge>
              <p>{t('achievement5')}</p>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold tracking-tight">{t('technologiesTools')}</h2>
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
};

export default CopyklePage;

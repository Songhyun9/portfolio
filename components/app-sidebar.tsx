'use client';

import * as React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar';
import { MessageCircleIcon } from 'lucide-react';
import Link from 'next/link';
import { getNavGroups } from '@/lib/navigation';
import { SelectItem, SelectContent, Select, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLocale } from 'next-intl';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const navGroups = React.useMemo(() => getNavGroups(), []);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale = useLocale();

  function onValueChange(nextLocale: string) {
    console.log(pathname, nextLocale);

    const segments = pathname.split('/');
    segments[1] = nextLocale;
    const newPath = segments.join('/');

    // 이동
    router.push(`${newPath}?${searchParams.toString()}`);
  }

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Link href={'/'}>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" className="cursor-pointer">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <MessageCircleIcon className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Chat with Me</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {navGroups.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={pathname === item.url}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
      <SidebarFooter>
        <Select onValueChange={onValueChange} defaultValue={locale}>
          <SelectTrigger>
            <SelectValue placeholder="Select a verified email to display" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ko">korean</SelectItem>
            <SelectItem value="en">english</SelectItem>
          </SelectContent>
        </Select>
      </SidebarFooter>
    </Sidebar>
  );
}

'use client';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useAssistant } from '@ai-sdk/react';
import { CircleStop, Send } from 'lucide-react';
import Image from 'next/image';

export default function Page() {
  const { status, messages, input, submitMessage, handleInputChange, setInput, stop, error } = useAssistant({
    api: '/api/assistant',
  });

  const t = useTranslations('MainPage');

  const sampleQuestions = [t('sampleQuestionStack'), t('sampleQuestionFun')];

  const handleSampleQuestion = (question: string) => {
    setInput(question);

    submitMessage(undefined, {
      data: {
        customMessage: question,
      },
    });
  };

  const handleSubmitOrStop = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (status === 'in_progress') {
      stop();
    } else {
      submitMessage(e);
    }
  };

  return (
    <div className="flex h-full flex-col gap-4 p-4">
      {!messages.length && (
        <div className="flex flex-col w-full h-full justify-center items-center gap-2">
          <Image src={'/avatar.png'} alt="avatar" width={300} height={300} />
          <h1 className="text-xl font-bold">{t('title')}</h1>
          <h1 className="text-xl font-bold">{t('description')}</h1>
        </div>
      )}
      <Card className="flex flex-col h-full w-full relative">
        <CardContent className="flex-grow p-4 h-full ">
          <ScrollArea className="h-full pr-4 pb-10">
            <div className="space-y-4 ">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>
            {error && <div className="text-red-500 mb-2">{error?.message || t('error')}</div>}
          </ScrollArea>
        </CardContent>

        <CardFooter className="absolute bottom-4 w-full">
          <form onSubmit={handleSubmitOrStop} className="flex flex-col p-2 gap-2 w-full">
            <Input
              disabled={status === 'in_progress'}
              value={input}
              placeholder={t('placeholder')}
              onChange={handleInputChange}
              className="bg-zinc-100 w-full p-2"
            />
            <div className="flex justify-between">
              <div className="flex flex-wrap gap-2">
                {sampleQuestions.map((question, index) => (
                  <Button
                    type="button"
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleSampleQuestion(question)}
                    className="text-xs rounded-full"
                    disabled={status === 'in_progress'}
                  >
                    {question}
                  </Button>
                ))}
              </div>
              <Button size="icon" className="cursor-pointer">
                {status === 'in_progress' ? <CircleStop /> : <Send className="h-4 w-4" />}
              </Button>
            </div>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}

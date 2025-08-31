import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const CustomTooltip = ({ children, text }: { children: React.ReactNode; text: string }) => {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent className="dark px-2 py-1 text-xs">{text}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export { CustomTooltip };

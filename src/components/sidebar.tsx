import { CustomTooltip } from '@/components/custom-tooltip';
import { ThemeToggle } from '@/components/theme-toggle';
import { AudioWaveform, Captions, Combine, HelpCircle, Minimize2, Scissors, Settings, Video } from 'lucide-react';
import { useQueryState } from 'nuqs';
import { useEffect } from 'react';

const options = [
  { id: 'compress', title: 'Compress', icon: Minimize2, size: 3.5 },
  { id: 'convert', title: 'Convert', icon: Video, size: 4 },
  { id: 'trim', title: 'Trim', icon: Scissors, size: 3.5 },
  { id: 'combine', title: 'Combine', icon: Combine, size: 3.5 },
  { id: 'extract-audio', title: 'Extract Audio', icon: AudioWaveform, size: 3.5 },
  { id: 'add-subtitles', title: 'Add Subtitles', icon: Captions, size: 4 },
];

const Sidebar = () => {
  const [activeTool, setActiveTool] = useQueryState('tool');

  useEffect(() => {
    if (!activeTool) {
      setActiveTool(options[0].id);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-between min-h-full min-w-[200px] bg-sidebar border-sidebar-border border-r">
      <div className="w-full p-2 space-y-1">
        {options.map((option) => {
          const isActive = activeTool === option.id;
          const IconComponent = option.icon;

          return (
            <button
              key={option.title}
              onClick={() => setActiveTool(option.id)}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-100 focus:outline-none active:scale-98 ${
                isActive
                  ? 'bg-primary text-sidebar-primary-foreground hover:bg-primary/90 focus:bg-primary/90 dark:hover:bg-primary dark:focus:bg-primary'
                  : 'hover:bg-sidebar-accent text-sidebar-foreground focus:bg-sidebar-accent'
              }`}
            >
              <IconComponent
                className={`size-${option.size} ${
                  isActive ? 'text-sidebar-primary-foreground dark:text-muted' : 'text-muted-foreground/70'
                }`}
              />
              <span
                className={`font-normal text-[13px] ${
                  isActive
                    ? 'text-sidebar-primary-foreground dark:text-muted'
                    : 'text-neutral-600 dark:text-muted-foreground'
                }`}
              >
                {option.title}
              </span>
            </button>
          );
        })}
      </div>
      <div className="space-x-2 flex items-center justify-center pb-2">
        <CustomTooltip text="Settings">
          <button className="flex items-center justify-center p-1.5 rounded-md transition-all duration-100 hover:bg-sidebar-accent focus:outline-none focus:bg-sidebar-accent active:scale-98">
            <Settings className="size-4 text-muted-foreground" />
          </button>
        </CustomTooltip>
        <CustomTooltip text="Help">
          <button className="flex items-center justify-center p-1.5 rounded-md transition-all duration-100 hover:bg-sidebar-accent focus:outline-none focus:bg-sidebar-accent active:scale-98">
            <HelpCircle className="size-4 text-muted-foreground" />
          </button>
        </CustomTooltip>
        <ThemeToggle />
      </div>
    </div>
  );
};

export { Sidebar };
